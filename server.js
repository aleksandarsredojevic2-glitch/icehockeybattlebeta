const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const Matter = require('matter-js');

function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
}

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(__dirname));

let rooms = {};
let players = {};

const WORLD_WIDTH = 3000;
const WORLD_HEIGHT = 1500;
const ICE_WIDTH = 2600;
const ICE_HEIGHT = 1200;
const startX = (WORLD_WIDTH - ICE_WIDTH) / 2;
const startY = (WORLD_HEIGHT - ICE_HEIGHT) / 2;
const T = 35;
const CORNER_R = 160;
const GOAL_WIDTH = 190;
const ZID_SIRINA = 70;
const ZID_VISINA = 185;
const PUSH_IN_GOAL = 176.7;
const GOL_DUBINA = 20;

// --- BROADCAST HELPERI ---

function broadcastToRoom(roomId, messageObj) {
    const payload = JSON.stringify(messageObj);
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client.roomId === roomId) {
            client.send(payload);
        }
    });
}

function getRoomList() {
    return Object.keys(rooms).map(id => {
        const playerCount = Object.values(players).filter(p => p.roomId === id).length;
        return {
            id: id,
            playerCount: playerCount,
            gameState: rooms[id].gameState
        };
    });
}

function broadcastRoomList() {
    const payload = JSON.stringify({ type: 'room-list', rooms: getRoomList() });
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(payload);
        }
    });
}

// --- SVET / FIZIKA ---

function createRoom(roomId, adminId) {
    const engine = Matter.Engine.create();
    engine.world.gravity.y = 0;
    setupWorld(engine.world);

    engine.world.bodies.forEach(body => {
        if (body.isStatic) {
            body.friction = 0;
            body.frictionStatic = 0;
            body.restitution = 0.6;
        }
    });

    const puck = Matter.Bodies.circle(1500, 750, 6, {
        restitution: 0.1,
        friction: 0.05,
        frictionAir: 0.01,
        mass: 0.04,
        label: 'puck'
    });
    Matter.World.add(engine.world, puck);

    rooms[roomId] = {
        engine: engine,
        adminId: adminId,
        puck: puck,
        isResetting: false,
        score: { teamRed: 0, teamBlue: 0 },
        gameState: 'LOBBY',
        goalLimit: 5
    };
}

function resetRoom(roomId) {
    let room = rooms[roomId];
    if (!room || room.isResetting) return;
    room.isResetting = true;

    Matter.Body.setPosition(room.puck, { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT / 2 });
    Matter.Body.setVelocity(room.puck, { x: 0, y: 0 });

    for (let id in players) {
        let p = players[id];
        if (p.roomId === roomId && p.body) {
            if (p.team === 'red') {
                Matter.Body.setPosition(p.body, { x: WORLD_WIDTH / 2 - 400, y: WORLD_HEIGHT / 2 + (Math.random() * 200 - 100) });
            } else if (p.team === 'blue') {
                Matter.Body.setPosition(p.body, { x: WORLD_WIDTH / 2 + 400, y: WORLD_HEIGHT / 2 + (Math.random() * 200 - 100) });
            } else {
                Matter.Body.setPosition(p.body, { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT / 2 });
            }
            Matter.Body.setVelocity(p.body, { x: 0, y: 0 });
        }
    }

    setTimeout(() => { room.isResetting = false; }, 500);
}

function createCorner(x, y, type) {
    let corners = [];
    let startAngle = (type === 'TL' ? Math.PI : type === 'TR' ? Math.PI * 1.5 : type === 'BL' ? Math.PI * 0.5 : 0);
    for (let i = 0; i < 10; i++) {
        let angle = startAngle + (i * Math.PI / 20);
        let posX = x + Math.cos(angle) * (CORNER_R + 16);
        let posY = y + Math.sin(angle) * (CORNER_R + 16);
        corners.push(Matter.Bodies.rectangle(posX, posY, 30, T, { isStatic: true, angle: angle }));
    }
    return corners;
}

function setupWorld(world) {
    Matter.World.add(world, [
        Matter.Bodies.rectangle(WORLD_WIDTH / 2, startY - T / 2, ICE_WIDTH - (2 * CORNER_R), T, { isStatic: true }),
        Matter.Bodies.rectangle(WORLD_WIDTH / 2, startY + ICE_HEIGHT + T / 2, ICE_WIDTH - (2 * CORNER_R), T, { isStatic: true }),
        Matter.Bodies.rectangle(startX - T / 2, WORLD_HEIGHT / 2, T, ICE_HEIGHT - (2 * CORNER_R), { isStatic: true }),
        Matter.Bodies.rectangle(startX + ICE_WIDTH + T / 2, WORLD_HEIGHT / 2, T, ICE_HEIGHT - (2 * CORNER_R), { isStatic: true }),
        Matter.Bodies.rectangle(startX + PUSH_IN_GOAL - ZID_SIRINA / 2, startY + ICE_HEIGHT / 2, ZID_SIRINA, ZID_VISINA, { isStatic: true }),
        Matter.Bodies.rectangle(startX + ICE_WIDTH - PUSH_IN_GOAL + ZID_SIRINA / 2, startY + ICE_HEIGHT / 2, ZID_SIRINA, ZID_VISINA, { isStatic: true }),
    ]);
    Matter.World.add(world, createCorner(startX + CORNER_R, startY + CORNER_R, 'TL'));
    Matter.World.add(world, createCorner(startX + ICE_WIDTH - CORNER_R, startY + CORNER_R, 'TR'));
    Matter.World.add(world, createCorner(startX + CORNER_R, startY + ICE_HEIGHT - CORNER_R, 'BL'));
    Matter.World.add(world, createCorner(startX + ICE_WIDTH - CORNER_R, startY + ICE_HEIGHT - CORNER_R, 'BR'));
}

// --- WEBSOCKET KONEKCIJA ---

wss.on('connection', (ws) => {
    let myId = generateRandomId();
    ws.send(JSON.stringify({ type: 'welcome', myId: myId }));
    players[myId] = { team: 'spectator', keys: {}, name: 'Guest', roomId: null };

    // Pošalji klijentu sve dimenzije terena - klijent ih više ne treba hardkodirane
    ws.send(JSON.stringify({
        type: 'world-info',
        WORLD_WIDTH: WORLD_WIDTH,
        WORLD_HEIGHT: WORLD_HEIGHT,
        ICE_WIDTH: ICE_WIDTH,
        ICE_HEIGHT: ICE_HEIGHT,
        CORNER_R: CORNER_R,
        GOAL_WIDTH: GOAL_WIDTH,
        PUSH_IN_GOAL: PUSH_IN_GOAL,
        GOL_DUBINA: GOL_DUBINA,
        T: T
    }));

    // Odmah pošalji trenutnu listu soba novom klijentu
    ws.send(JSON.stringify({ type: 'room-list', rooms: getRoomList() }));

    ws.on('close', () => {
        const p = players[myId];
        if (p) {
            // Ukloni fizičko telo iz sveta da ne ostane "duh" na terenu
            if (p.body && p.roomId && rooms[p.roomId]) {
                Matter.World.remove(rooms[p.roomId].engine.world, p.body);
            }

            // Ako je diskonektovani igrač bio admin, prebaci admina na sledećeg u sobi
            if (p.roomId && rooms[p.roomId] && rooms[p.roomId].adminId === myId) {
                const room = rooms[p.roomId];
                const nextAdmin = Object.keys(players).find(id => id !== myId && players[id].roomId === p.roomId);
                if (nextAdmin) {
                    room.adminId = nextAdmin;
                } else {
                    // Niko drugi nije ostao u sobi - obrisi sobu
                    delete rooms[p.roomId];
                }
            }
        }
        delete players[myId];
        broadcastRoomList();
    });

    ws.on('message', (message) => {
        let data;
        try {
            data = JSON.parse(message);
        } catch (e) {
            return;
        }

        if (data.type === 'join-room') {
            const roomId = data.room;
            if (!rooms[roomId]) {
                // Soba ne postoji (npr. ugašena) - obavesti klijenta i osveži listu
                ws.send(JSON.stringify({ type: 'room-list', rooms: getRoomList() }));
                return;
            }
            ws.roomId = roomId;
            players[myId].roomId = roomId;
            players[myId].name = data.name || "Guest";
            let body = Matter.Bodies.circle(1500, 750, 18, { restitution: 0.001, frictionAir: 0.1, density: 0.002, inertia: Infinity });
            players[myId].body = body;
            Matter.World.add(rooms[roomId].engine.world, body);
            broadcastRoomList();

        } else if (data.type === 'create-room') {
            const newRoomId = generateRandomId();
            createRoom(newRoomId, myId);
            ws.send(JSON.stringify({ type: 'room-created', roomId: newRoomId }));
            broadcastRoomList();

        } else if (data.type === 'list-rooms') {
            ws.send(JSON.stringify({ type: 'room-list', rooms: getRoomList() }));

        } else if (data.type === 'chat') {
            broadcastToRoom(players[myId].roomId, { type: 'chat', senderId: myId, text: data.text });

        } else if (data.type === 'set-team') {
            const p = players[myId];
            const room = p.roomId ? rooms[p.roomId] : null;
            p.name = data.name;

            if (data.team === 'spectator') {
                // svako moze sam sebe da vrati u spectate
                p.team = 'spectator';
            } else if (data.team === 'red' || data.team === 'blue') {
                // iz speca u red/blue moze samo host (i to samo sebe)
                if (room && room.adminId === myId) {
                    p.team = data.team;
                }
                // obican igrac ne moze sam sebe da ubaci u tim - zahtev se ignorise
            }

        } else if (data.type === 'admin-set-team') {
            const p = players[myId];
            const room = p.roomId ? rooms[p.roomId] : null;
            const target = players[data.targetId];

            if (room && room.adminId === myId && target && target.roomId === p.roomId) {
                if (data.team === 'red' || data.team === 'blue' || data.team === 'spectator') {
                    target.team = data.team;
                }
            }

        } else if (data.type === 'start-game') {
            let roomId = players[myId].roomId;
            let room = rooms[roomId];

            if (room && room.adminId === myId) {
                room.gameState = 'PLAYING';

                let noviLimit = parseInt(data.limit);
                room.goalLimit = (!isNaN(noviLimit) && noviLimit > 0) ? noviLimit : 5;

                resetRoom(roomId);

                console.log("Soba " + roomId + " kreće sa limitom: " + room.goalLimit);
                broadcastToRoom(roomId, { type: 'game-started' });
                broadcastRoomList();
            }

        } else if (data.type === 'shoot') {
            let p = players[myId];
            let room = rooms[p.roomId];
            if (p && p.body && room) {
                let dx = room.puck.position.x - p.body.position.x;
                let dy = room.puck.position.y - p.body.position.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 50) {
                    let force = 0.0010;
                    Matter.Body.applyForce(room.puck, room.puck.position, { x: (dx / distance) * force, y: (dy / distance) * force });
                }
            }

        } else if (data.type === 'key-down') {
            players[myId].keys[data.key] = true;

        } else if (data.type === 'key-up') {
            players[myId].keys[data.key] = false;
        }
    });
});

// --- GLAVNA PETLJA IGRE ---

setInterval(() => {
    for (let roomId in rooms) {
        let room = rooms[roomId];
        if (!room) continue;

        // 1. Kretanje igrača
        for (let id in players) {
            let p = players[id];
            if (p.roomId === roomId && p.body) {
                let dx = (p.keys['ArrowLeft'] || p.keys['KeyA']) ? -1 : ((p.keys['ArrowRight'] || p.keys['KeyD']) ? 1 : 0);
                let dy = (p.keys['ArrowUp'] || p.keys['KeyW']) ? -1 : ((p.keys['ArrowDown'] || p.keys['KeyS']) ? 1 : 0);
                if (dx !== 0 || dy !== 0) {
                    let magnitude = Math.sqrt(dx * dx + dy * dy);
                    let nx = dx / magnitude, ny = dy / magnitude;
                    if (Math.sqrt(p.body.velocity.x ** 2 + p.body.velocity.y ** 2) < 2.5) {
                        Matter.Body.applyForce(p.body, p.body.position, { x: nx * 0.02, y: ny * 0.02 });
                    }
                }
            }
        }

        // 2. Update fizike
        Matter.Engine.update(room.engine, 1000 / 60);

        // 3. Detekcija gola (samo ako se igra)
        if (room.gameState === 'PLAYING') {
            let p = room.puck.position;
            let scored = false;

            // LEVI GOL (Plavi napadaju, Crveni brane)
            let levaLinija = startX + PUSH_IN_GOAL;
            if (p.x >= levaLinija && p.x <= levaLinija + GOL_DUBINA &&
                p.y > startY + (ICE_HEIGHT / 2 - GOAL_WIDTH / 2) &&
                p.y < startY + (ICE_HEIGHT / 2 + GOAL_WIDTH / 2)) {
                room.score.teamBlue++;
                scored = true;
            }

            // DESNI GOL (Crveni napadaju, Plavi brane)
            let desnaLinija = startX + ICE_WIDTH - PUSH_IN_GOAL;
            if (p.x >= desnaLinija - GOL_DUBINA && p.x <= desnaLinija &&
                p.y > startY + (ICE_HEIGHT / 2 - GOAL_WIDTH / 2) &&
                p.y < startY + (ICE_HEIGHT / 2 + GOAL_WIDTH / 2)) {
                room.score.teamRed++;
                scored = true;
            }

            if (scored) {
                let limit = room.goalLimit || 5;
                if (room.score.teamBlue >= limit || room.score.teamRed >= limit) {
                    broadcastToRoom(roomId, { type: 'game-over', winner: room.score.teamBlue >= limit ? 'Blue' : 'Red' });
                    room.gameState = 'LOBBY';
                    room.score = { teamRed: 0, teamBlue: 0 };
                    broadcastRoomList();
                }
                resetRoom(roomId);
            }
        }

        // 4. Slanje update-a klijentima
        let playerList = {};
        for (let id in players) {
            if (players[id].roomId === roomId && players[id].body) {
                playerList[id] = { x: players[id].body.position.x, y: players[id].body.position.y, team: players[id].team, name: players[id].name };
            }
        }
        broadcastToRoom(roomId, { type: 'update', puck: { x: room.puck.position.x, y: room.puck.position.y }, players: playerList, score: room.score, adminId: room.adminId });
    }
}, 1000 / 60);

server.listen(3000, () => console.log('Server radi!'));
