const _XgcFSRPo = require('\x65\x78\x70\x72\x65\x73\x73');
const _gvBhi = require('\x68\x74\x74\x70');
const _cQFOcq = require('\x77\x73');
const _vnwlYBye = require('\x6d\x61\x74\x74\x65\x72\x2d\x6a\x73');

function fnHBnz() {
    return Math.random().toString(36).substr(2, 9);
}

const _jEgUxBi = express();
const _RsK = http.createServer(app);
const _SmkNJWqE = new WebSocket.Server({ server });

app.use(express.static(__dirname));

let _jyT = {};
let _EXm = {};

const _CtEDXBCl = 3000;
const _INTuq = 1500;
const _Nly = 2600;
const _KJnNHgkN = 1200;
const _FAL = (WORLD_WIDTH - ICE_WIDTH) / 2;
const _OiO = (WORLD_HEIGHT - ICE_HEIGHT) / 2;
const _vtPnYyU = 35;
const _WUoZB = 160;
const _gtGbhOJ = 190;
const _Chngk = 70;
const _HHTwtt = 185;
const _JUPk = 176.7;
const _gVDF = 20;

// --- BROADCAST HELPERI ---

function fnuBeVepPb(roomId, messageObj) {
    const _PczcMYUZ = JSON.stringify(messageObj);
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client.roomId === roomId) {
            client.send(payload);
        }
    });
}

function fnrtImw() {
    return Object.keys(rooms).map(id => {
        const _SLiMf = Object.values(players).filter(p => p.roomId === id).length;
        return {
            id: id,
            playerCount: playerCount,
            gameState: rooms[id].gameState
        };
    });
}

function fntLCjki() {
    const _PczcMYUZ = JSON.stringify({ type: '\x72\x6f\x6f\x6d\x2d\x6c\x69\x73\x74', rooms: getRoomList() });
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(payload);
        }
    });
}

// --- SVET / FIZIKA ---

function fnoOUgwEF(roomId, adminId) {
    const _Ghuq = Matter.Engine.create();
    engine.world.gravity.y = 0;
    setupWorld(engine.world);

    engine.world.bodies.forEach(body => {
        if (body.isStatic) {
            body.friction = 0;
            body.frictionStatic = 0;
            body.restitution = 0.6;
        }
    });

    const _xECX = Matter.Bodies.circle(1500, 750, 6, {
        restitution: 0.02,
        friction: 0.05,
        frictionAir: 0.01,
        mass: 0.07,
        label: '\x70\x75\x63\x6b'
    });
    Matter.World.add(engine.world, puck);

    rooms[roomId] = {
        engine: engine,
        adminId: adminId,
        puck: puck,
        isResetting: false,
        score: { teamRed: 0, teamBlue: 0 },
        gameState: '\x4c\x4f\x42\x42\x59',
        goalLimit: 5
    };
}

function fnHmMRq(roomId) {
    let _WngioiEE = rooms[roomId];
    if (!room || room.isResetting) return;
    room.isResetting = true;

    Matter.Body.setPosition(room.puck, { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT / 2 });
    Matter.Body.setVelocity(room.puck, { x: 0, y: 0 });

    for (let _sObz in players) {
        let _xryUtUX = players[id];
        if (p.roomId === roomId && p.body) {
            if (p.team === '\x72\x65\x64') {
                Matter.Body.setPosition(p.body, { x: WORLD_WIDTH / 2 - 400, y: WORLD_HEIGHT / 2 + (Math.random() * 200 - 100) });
            } else if (p.team === '\x62\x6c\x75\x65') {
                Matter.Body.setPosition(p.body, { x: WORLD_WIDTH / 2 + 400, y: WORLD_HEIGHT / 2 + (Math.random() * 200 - 100) });
            } else {
                Matter.Body.setPosition(p.body, { x: WORLD_WIDTH / 2, y: WORLD_HEIGHT / 2 });
            }
            Matter.Body.setVelocity(p.body, { x: 0, y: 0 });
        }
    }

    setTimeout(() => { room.isResetting = false; }, 500);
}
// Upravlja fizičkim telom igrača u zavisnosti od tima.
// Spectator NEMA telo na leduuu (ne postoji na terenu, ne sudara se sa pakom/igračima).
// Telo se pravi tek kad igrač stvarno uđe u red/blue, i uklanja se čim ode u spectate.
function fnfoAaQWWY(p, room, team) {
    if (team === p.team) return;

    if (team === '\x73\x70\x65\x63\x74\x61\x74\x6f\x72') {
        if (p.body && room) {
            Matter.World.remove(room.engine.world, p.body);
        }
        p.body = null;
        p.team = '\x73\x70\x65\x63\x74\x61\x74\x6f\x72';

    } else if (team === '\x72\x65\x64' || team === '\x62\x6c\x75\x65') {
        p.team = team;
        if (!p.body && room) {
            let _OpPka = team === '\x72\x65\x64' ? (WORLD_WIDTH / 2 - 400) : (WORLD_WIDTH / 2 + 400);
            let _NjOU = WORLD_HEIGHT / 2 + (Math.random() * 200 - 100);
            let _AkTn = Matter.Bodies.circle(spawnX, spawnY, 18, { restitution: 0.01, frictionAir: 0.2, density: 0.002, inertia: Infinity });
            p.body = body;
            Matter.World.add(room.engine.world, body);
        }
    }
}
function fnjEHNCvLv(x, y, type) {
    let _QDidWZa = [];
    let _gwtrWRZ = (type === '\x54\x4c' ? Math.PI : type === '\x54\x52' ? Math.PI * 1.5 : type === '\x42\x4c' ? Math.PI * 0.5 : 0);
    for (let _kOrEFBh = 0; i < 10; i++) {
        let _xRKSSQSK = startAngle + (i * Math.PI / 20);
        let _tunie = x + Math.cos(angle) * (CORNER_R + 16);
        let _zPHmFQUt = y + Math.sin(angle) * (CORNER_R + 16);
        corners.push(Matter.Bodies.rectangle(posX, posY, 30, T, { isStatic: true, angle: angle }));
    }
    return corners;
}

function fnSZcBGkJf(world) {
    Matter.World.add(world, [
        Matter.Bodies.rectangle(WORLD_WIDTH / 2, startY - T / 2, ICE_WIDTH - (2 * CORNER_R), T, { isStatic: true }),
        Matter.Bodies.rectangle(WORLD_WIDTH / 2, startY + ICE_HEIGHT + T / 2, ICE_WIDTH - (2 * CORNER_R), T, { isStatic: true }),
        Matter.Bodies.rectangle(startX - T / 2, WORLD_HEIGHT / 2, T, ICE_HEIGHT - (2 * CORNER_R), { isStatic: true }),
        Matter.Bodies.rectangle(startX + ICE_WIDTH + T / 2, WORLD_HEIGHT / 2, T, ICE_HEIGHT - (2 * CORNER_R), { isStatic: true }),
        Matter.Bodies.rectangle(startX + PUSH_IN_GOAL - ZID_SIRINA / 2, startY + ICE_HEIGHT / 2, ZID_SIRINA, ZID_VISINA, { isStatic: true }),
        Matter.Bodies.rectangle(startX + ICE_WIDTH - PUSH_IN_GOAL + ZID_SIRINA / 2, startY + ICE_HEIGHT / 2, ZID_SIRINA, ZID_VISINA, { isStatic: true }),
    ]);
    Matter.World.add(world, createCorner(startX + CORNER_R, startY + CORNER_R, '\x54\x4c'));
    Matter.World.add(world, createCorner(startX + ICE_WIDTH - CORNER_R, startY + CORNER_R, '\x54\x52'));
    Matter.World.add(world, createCorner(startX + CORNER_R, startY + ICE_HEIGHT - CORNER_R, '\x42\x4c'));
    Matter.World.add(world, createCorner(startX + ICE_WIDTH - CORNER_R, startY + ICE_HEIGHT - CORNER_R, '\x42\x52'));
}

// --- WEBSOCKET KONEKCIJA ---

wss.on('\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e', (ws) => {
    let _uXRp = generateRandomId();
    ws.send(JSON.stringify({ type: '\x77\x65\x6c\x63\x6f\x6d\x65', myId: myId }));
    players[myId] = { team: '\x73\x70\x65\x63\x74\x61\x74\x6f\x72', keys: {}, name: '\x47\x75\x65\x73\x74', roomId: null };

    // Pošalji klijentu sve dimenzije terena - klijent ih više ne treba hardkodirane
    ws.send(JSON.stringify({
        type: '\x77\x6f\x72\x6c\x64\x2d\x69\x6e\x66\x6f',
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
    ws.send(JSON.stringify({ type: '\x72\x6f\x6f\x6d\x2d\x6c\x69\x73\x74', rooms: getRoomList() }));

    ws.on('\x63\x6c\x6f\x73\x65', () => {
        const _xryUtUX = players[myId];
        if (p) {
            // Ukloni fizičko telo iz sveta da ne ostane "\x64\x75\x68" na terenu
            if (p.body && p.roomId && rooms[p.roomId]) {
                Matter.World.remove(rooms[p.roomId].engine.world, p.body);
            }

            // Ako je diskonektovani igrač bio admin, prebaci admina na sledećeg u sobi
            if (p.roomId && rooms[p.roomId] && rooms[p.roomId].adminId === myId) {
                const _WngioiEE = rooms[p.roomId];
                const _JlyqojZz = Object.keys(players).find(id => id !== myId && players[id].roomId === p.roomId);
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

    ws.on('\x6d\x65\x73\x73\x61\x67\x65', (message) => {
        let _STacAA;
        try {
            data = JSON.parse(message);
        } catch (e) {
            return;
        }

        if (data.type === '\x6a\x6f\x69\x6e\x2d\x72\x6f\x6f\x6d') {
            const _nhJk = data.room;
            if (!rooms[roomId]) {
                // Soba ne postoji (npr. ugašena) - obavesti klijenta i osveži listu
                ws.send(JSON.stringify({ type: '\x72\x6f\x6f\x6d\x2d\x6c\x69\x73\x74', rooms: getRoomList() }));
                return;
            }
           ws.roomId = roomId;
            players[myId].roomId = roomId;
            players[myId].name = data.name || "\x47\x75\x65\x73\x74";
            // NAPOMENA: telo se namerno NE pravi ovde. Igrač ulazi kao spectator
            // (bez tela na ledu) - telo se kreira tek kad izabere red/blue tim.
            broadcastRoomList();

        } else if (data.type === '\x63\x72\x65\x61\x74\x65\x2d\x72\x6f\x6f\x6d') {
            const _wITPuU = generateRandomId();
            createRoom(newRoomId, myId);
            ws.send(JSON.stringify({ type: '\x72\x6f\x6f\x6d\x2d\x63\x72\x65\x61\x74\x65\x64', roomId: newRoomId }));
            broadcastRoomList();

        } else if (data.type === '\x6c\x69\x73\x74\x2d\x72\x6f\x6f\x6d\x73') {
            ws.send(JSON.stringify({ type: '\x72\x6f\x6f\x6d\x2d\x6c\x69\x73\x74', rooms: getRoomList() }));

        } else if (data.type === '\x63\x68\x61\x74') {
            broadcastToRoom(players[myId].roomId, { type: '\x63\x68\x61\x74', senderId: myId, text: data.text });

        } else if (data.type === '\x73\x65\x74\x2d\x74\x65\x61\x6d') {
            const _xryUtUX = players[myId];
            const _WngioiEE = p.roomId ? rooms[p.roomId] : null;
            p.name = data.name;

           if (data.team === '\x73\x70\x65\x63\x74\x61\x74\x6f\x72') {
                // svako moze sam sebe da vrati u spectate
                setPlayerTeam(p, room, '\x73\x70\x65\x63\x74\x61\x74\x6f\x72');
            } else if (data.team === '\x72\x65\x64' || data.team === '\x62\x6c\x75\x65') {
                // iz speca u red/blue moze samo host (i to samo sebe)
                if (room && room.adminId === myId) {
                    setPlayerTeam(p, room, data.team);
                }
                // obican igrac ne moze sam sebe da ubaci u tim - zahtev se ignorise
            }

        } else if (data.type === '\x61\x64\x6d\x69\x6e\x2d\x73\x65\x74\x2d\x74\x65\x61\x6d') {
            const _xryUtUX = players[myId];
            const _WngioiEE = p.roomId ? rooms[p.roomId] : null;
            const _JAkvfCV = players[data.targetId];

           if (room && room.adminId === myId && target && target.roomId === p.roomId) {
                if (data.team === '\x72\x65\x64' || data.team === '\x62\x6c\x75\x65' || data.team === '\x73\x70\x65\x63\x74\x61\x74\x6f\x72') {
                    setPlayerTeam(target, room, data.team);
                }
            }
        } else if (data.type === '\x73\x74\x61\x72\x74\x2d\x67\x61\x6d\x65') {
            let _nhJk = players[myId].roomId;
            let _WngioiEE = rooms[roomId];

            if (room && room.adminId === myId) {
                room.gameState = '\x50\x4c\x41\x59\x49\x4e\x47';

                let _neU = parseInt(data.limit);
                room.goalLimit = (!isNaN(noviLimit) && noviLimit > 0) ? noviLimit : 5;

                resetRoom(roomId);

                console.log("\x53\x6f\x62\x61\x20" + roomId + "\x20\x6b\x72\x65\x107\x65\x20\x73\x61\x20\x6c\x69\x6d\x69\x74\x6f\x6d\x3a\x20" + room.goalLimit);
                broadcastToRoom(roomId, { type: '\x67\x61\x6d\x65\x2d\x73\x74\x61\x72\x74\x65\x64' });
                broadcastRoomList();
            }

        } else if (data.type === '\x73\x68\x6f\x6f\x74') {
            let _xryUtUX = players[myId];
            let _WngioiEE = rooms[p.roomId];
            if (p && p.body && room) {
                let _nyBWbJ = room.puck.position.x - p.body.position.x;
                let _VYu = room.puck.position.y - p.body.position.y;
                let _oZQ = Math.sqrt(dx * dx + dy * dy);
                if (distance < 50) {
                    let _sNYZ = 0.0010;
                    Matter.Body.applyForce(room.puck, room.puck.position, { x: (dx / distance) * force, y: (dy / distance) * force });
                }
            }

        } else if (data.type === '\x6b\x65\x79\x2d\x64\x6f\x77\x6e') {
            players[myId].keys[data.key] = true;

        } else if (data.type === '\x6b\x65\x79\x2d\x75\x70') {
            players[myId].keys[data.key] = false;
        }
    });
});

// --- GLAVNA PETLJA IGRE ---

setInterval(() => {
    for (let _nhJk in rooms) {
        let _WngioiEE = rooms[roomId];
        if (!room) continue;

        // 1. Kretanje igrača
        for (let _sObz in players) {
            let _xryUtUX = players[id];
            if (p.roomId === roomId && p.body) {
                let _nyBWbJ = (p.keys['\x41\x72\x72\x6f\x77\x4c\x65\x66\x74'] || p.keys['\x4b\x65\x79\x41']) ? -1 : ((p.keys['\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74'] || p.keys['\x4b\x65\x79\x44']) ? 1 : 0);
                let _VYu = (p.keys['\x41\x72\x72\x6f\x77\x55\x70'] || p.keys['\x4b\x65\x79\x57']) ? -1 : ((p.keys['\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e'] || p.keys['\x4b\x65\x79\x53']) ? 1 : 0);
                if (dx !== 0 || dy !== 0) {
                    let _Yihez = Math.sqrt(dx * dx + dy * dy);
                    let _YdTI = dx / magnitude, ny = dy / magnitude;
                    if (Math.sqrt(p.body.velocity.x ** 2 + p.body.velocity.y ** 2) < 2.01) {
                        Matter.Body.applyForce(p.body, p.body.position, { x: nx * 0.02, y: ny * 0.02 });
                    }
                }
            }
        }

        // 2. Update fizike
        Matter.Engine.update(room.engine, 1000 / 60);

        // 3. Detekcija gola (samo ako se igra)
        if (room.gameState === '\x50\x4c\x41\x59\x49\x4e\x47') {
            let _xryUtUX = room.puck.position;
            let _wIDODLNZ = false;

            // LEVI GOL (Plavi napadaju, Crveni brane)
            let _fddw = startX + PUSH_IN_GOAL;
            if (p.x >= levaLinija && p.x <= levaLinija + GOL_DUBINA &&
                p.y > startY + (ICE_HEIGHT / 2 - GOAL_WIDTH / 2) &&
                p.y < startY + (ICE_HEIGHT / 2 + GOAL_WIDTH / 2)) {
                room.score.teamBlue++;
                scored = true;
            }

            // DESNI GOL (Crveni napadaju, Plavi brane)
            let _GwraSAQ = startX + ICE_WIDTH - PUSH_IN_GOAL;
            if (p.x >= desnaLinija - GOL_DUBINA && p.x <= desnaLinija &&
                p.y > startY + (ICE_HEIGHT / 2 - GOAL_WIDTH / 2) &&
                p.y < startY + (ICE_HEIGHT / 2 + GOAL_WIDTH / 2)) {
                room.score.teamRed++;
                scored = true;
            }

            if (scored) {
                let _qWQW = room.goalLimit || 5;
                if (room.score.teamBlue >= limit || room.score.teamRed >= limit) {
                    broadcastToRoom(roomId, { type: '\x67\x61\x6d\x65\x2d\x6f\x76\x65\x72', winner: room.score.teamBlue >= limit ? '\x42\x6c\x75\x65' : '\x52\x65\x64' });
                    room.gameState = '\x4c\x4f\x42\x42\x59';
                    room.score = { teamRed: 0, teamBlue: 0 };
                    broadcastRoomList();
                }
                resetRoom(roomId);
            }
        }

        // 4. Slanje update-a klijentima
        // 4. Slanje update-a klijentima
        // Šaljemo SVE igrače u sobi (uključujući spectatore, bez x/y) da bi lobby lista
        // i admin dugmići za premeštanje radili i pre starta igre.
        let _buStaG = {};
        for (let _sObz in players) {
            const _BDvoLW = players[id];
            if (pl.roomId === roomId) {
                playerList[id] = {
                    team: pl.team,
                    name: pl.name,
                    x: pl.body ? pl.body.position.x : null,
                    y: pl.body ? pl.body.position.y : null
                };
            }
        }
        broadcastToRoom(roomId, { type: '\x75\x70\x64\x61\x74\x65', puck: { x: room.puck.position.x, y: room.puck.position.y }, players: playerList, score: room.score, adminId: room.adminId });
    }
}, 1000 / 60);

server.listen(3000, () => console.log('\x53\x65\x72\x76\x65\x72\x20\x72\x61\x64\x69\x21'));
