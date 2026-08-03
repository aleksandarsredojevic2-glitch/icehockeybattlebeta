let _0xc2431g;
const express = require("\u0065\u0078\u0070\u0072\u0065\u0073\u0073");
_0xc2431g = (843155 ^ 843163) + (647301 ^ 647301);
const http = require("\u0068\u0074\u0074\u0070");
let _0xc0a;
const WebSocket = require("\u0077\u0073");
_0xc0a = 886513 ^ 886517;
var _0xaef4af = (724602 ^ 724605) + (228473 ^ 228464);
const Matter = require("\u006D\u0061\u0074\u0074\u0065\u0072\u002D\u006A\u0073");
_0xaef4af = 562267 ^ 562266;
function generateRandomId() {
  return Math['\u0072\u0061\u006E\u0064\u006F\u006D']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](466991 ^ 466955)['\u0073\u0075\u0062\u0073\u0074\u0072'](674049 ^ 674051, 143559 ^ 143566);
}
var _0x88370f = (255378 ^ 255377) + (933085 ^ 933080);
const app = express();
_0x88370f = (653500 ^ 653492) + (791829 ^ 791837);
const server = http['\u0063\u0072\u0065\u0061\u0074\u0065\u0053\u0065\u0072\u0076\u0065\u0072'](app);
var _0xb0a3gb = (469557 ^ 469558) + (255613 ^ 255612);
const wss = new WebSocket['\u0053\u0065\u0072\u0076\u0065\u0072']({
  '\u0073\u0065\u0072\u0076\u0065\u0072': server
});
_0xb0a3gb = (898869 ^ 898876) + (789137 ^ 789137);
app['\u0075\u0073\u0065'](express['\u0073\u0074\u0061\u0074\u0069\u0063'](__dirname));
let _0x71313e;
let rooms = {};
_0x71313e = (741954 ^ 741956) + (990918 ^ 990919);
let players = {};
let _0x77c;
const WORLD_WIDTH = 262655 ^ 264775;
_0x77c = 534638 ^ 534632;
var _0x1eb26c = (602726 ^ 602721) + (360769 ^ 360776);
const WORLD_HEIGHT = 851710 ^ 850722;
_0x1eb26c = 898942 ^ 898934;
var _0x2d_0xc63 = (917720 ^ 917722) + (778514 ^ 778515);
const ICE_WIDTH = 233253 ^ 230669;
_0x2d_0xc63 = "hbnlpg".split("").reverse().join("");
var _0xcf53a = (827204 ^ 827204) + (667597 ^ 667594);
const ICE_HEIGHT = 670501 ^ 671637;
_0xcf53a = 506556 ^ 506549;
var _0x271a = (246755 ^ 246759) + (558397 ^ 558392);
const startX = (WORLD_WIDTH - ICE_WIDTH) / (706222 ^ 706220);
_0x271a = (890853 ^ 890861) + (447558 ^ 447555);
const startY = (WORLD_HEIGHT - ICE_HEIGHT) / (256713 ^ 256715);
var _0x81bd9g = (699429 ^ 699430) + (586554 ^ 586546);
const T = 919528 ^ 919499;
_0x81bd9g = 805092 ^ 805089;
let _0xf_0xbf4;
const CORNER_R = 903983 ^ 904079;
_0xf_0xbf4 = (109319 ^ 109318) + (736719 ^ 736714);
const GOAL_WIDTH = 523050 ^ 523156;
const ZID_SIRINA = 504001 ^ 503943;
const ZID_VISINA = 819720 ^ 819889;
let _0xefb;
const PUSH_IN_GOAL = 176.7;
_0xefb = (114876 ^ 114877) + (803669 ^ 803676);
const GOL_DUBINA = 963453 ^ 963433;
function broadcastToRoom(roomId, messageObj) {
  const _0xa_0x97e = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](messageObj);
  wss['\u0063\u006C\u0069\u0065\u006E\u0074\u0073']['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](client => {
    if (client['\u0072\u0065\u0061\u0064\u0079\u0053\u0074\u0061\u0074\u0065'] === WebSocket['\u004F\u0050\u0045\u004E'] && client['\u0072\u006F\u006F\u006D\u0049\u0064'] === roomId) {
      client['\u0073\u0065\u006E\u0064'](_0xa_0x97e);
    }
  });
}
function getRoomList() {
  return Object['\u006B\u0065\u0079\u0073'](rooms)['\u006D\u0061\u0070'](id => {
    const _0x903g = Object['\u0076\u0061\u006C\u0075\u0065\u0073'](players)['\u0066\u0069\u006C\u0074\u0065\u0072'](p => p['\u0072\u006F\u006F\u006D\u0049\u0064'] === id)['\u006C\u0065\u006E\u0067\u0074\u0068'];
    return {
      '\u0069\u0064': id,
      '\u0070\u006C\u0061\u0079\u0065\u0072\u0043\u006F\u0075\u006E\u0074': _0x903g,
      "gameState": rooms[id]['\u0067\u0061\u006D\u0065\u0053\u0074\u0061\u0074\u0065']
    };
  });
}
function broadcastRoomList() {
  var _0x468b7b = (930649 ^ 930652) + (684445 ^ 684441);
  const _0xeg38c = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
    "type": "\u0072\u006F\u006F\u006D\u002D\u006C\u0069\u0073\u0074",
    '\u0072\u006F\u006F\u006D\u0073': getRoomList()
  });
  _0x468b7b = (884811 ^ 884809) + (361283 ^ 361282);
  wss['\u0063\u006C\u0069\u0065\u006E\u0074\u0073']['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](client => {
    if (client['\u0072\u0065\u0061\u0064\u0079\u0053\u0074\u0061\u0074\u0065'] === WebSocket['\u004F\u0050\u0045\u004E']) {
      client['\u0073\u0065\u006E\u0064'](_0xeg38c);
    }
  });
}
function createRoom(roomId, adminId) {
  const _0x32g48c = Matter['\u0045\u006E\u0067\u0069\u006E\u0065']['\u0063\u0072\u0065\u0061\u0074\u0065']();
  _0x32g48c['\u0077\u006F\u0072\u006C\u0064']['\u0067\u0072\u0061\u0076\u0069\u0074\u0079']['\u0079'] = 365691 ^ 365691;
  setupWorld(_0x32g48c['\u0077\u006F\u0072\u006C\u0064']);
  _0x32g48c['\u0077\u006F\u0072\u006C\u0064']['\u0062\u006F\u0064\u0069\u0065\u0073']['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](body => {
    if (body['\u0069\u0073\u0053\u0074\u0061\u0074\u0069\u0063']) {
      body['\u0066\u0072\u0069\u0063\u0074\u0069\u006F\u006E'] = 339119 ^ 339119;
      body['\u0066\u0072\u0069\u0063\u0074\u0069\u006F\u006E\u0053\u0074\u0061\u0074\u0069\u0063'] = 618400 ^ 618400;
      body['\u0072\u0065\u0073\u0074\u0069\u0074\u0075\u0074\u0069\u006F\u006E'] = 0.6;
    }
  });
  const _0xc2fc = Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0063\u0069\u0072\u0063\u006C\u0065'](459943 ^ 459131, 273390 ^ 272640, 590431 ^ 590425, {
    "restitution": 0.02,
    '\u0066\u0072\u0069\u0063\u0074\u0069\u006F\u006E': 0.05,
    '\u0066\u0072\u0069\u0063\u0074\u0069\u006F\u006E\u0041\u0069\u0072': 0.01,
    "mass": 0.07,
    '\u006C\u0061\u0062\u0065\u006C': "\u0070\u0075\u0063\u006B"
  });
  Matter['\u0057\u006F\u0072\u006C\u0064']['\u0061\u0064\u0064'](_0x32g48c['\u0077\u006F\u0072\u006C\u0064'], _0xc2fc);
  rooms[roomId] = {
    '\u0065\u006E\u0067\u0069\u006E\u0065': _0x32g48c,
    "adminId": adminId,
    "puck": _0xc2fc,
    '\u0069\u0073\u0052\u0065\u0073\u0065\u0074\u0074\u0069\u006E\u0067': false,
    "score": {
      '\u0074\u0065\u0061\u006D\u0052\u0065\u0064': 0,
      "teamBlue": 0
    },
    "gameState": 'LOBBY',
    '\u0067\u006F\u0061\u006C\u004C\u0069\u006D\u0069\u0074': 5
  };
}
function resetRoom(roomId, _0x87f8gd) {
  let _0x1dd8ge = rooms[roomId];
  _0x87f8gd = 301071 ^ 301069;
  if (!_0x1dd8ge || _0x1dd8ge['\u0069\u0073\u0052\u0065\u0073\u0065\u0074\u0074\u0069\u006E\u0067']) return;
  _0x1dd8ge['\u0069\u0073\u0052\u0065\u0073\u0065\u0074\u0074\u0069\u006E\u0067'] = !![];
  Matter['\u0042\u006F\u0064\u0079']['\u0073\u0065\u0074\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](_0x1dd8ge['\u0070\u0075\u0063\u006B'], {
    '\u0078': WORLD_WIDTH / (527954 ^ 527952),
    '\u0079': WORLD_HEIGHT / (914474 ^ 914472)
  });
  Matter['\u0042\u006F\u0064\u0079']['\u0073\u0065\u0074\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079'](_0x1dd8ge['\u0070\u0075\u0063\u006B'], {
    '\u0078': 0,
    '\u0079': 0
  });
  for (let _0x249d5f in players) {
    var _0x289fg = (491336 ^ 491343) + (115442 ^ 115450);
    let p = players[_0x249d5f];
    _0x289fg = (603906 ^ 603908) + (289648 ^ 289657);
    if (p['\u0072\u006F\u006F\u006D\u0049\u0064'] === roomId && p['\u0062\u006F\u0064\u0079']) {
      if (p['\u0074\u0065\u0061\u006D'] === "\u0072\u0065\u0064") {
        Matter['\u0042\u006F\u0064\u0079']['\u0073\u0065\u0074\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](p['\u0062\u006F\u0064\u0079'], {
          '\u0078': WORLD_WIDTH / (800621 ^ 800623) - (319423 ^ 319023),
          '\u0079': WORLD_HEIGHT / (456110 ^ 456108) + (Math['\u0072\u0061\u006E\u0064\u006F\u006D']() * (371661 ^ 371461) - (315651 ^ 315751))
        });
      } else if (p['\u0074\u0065\u0061\u006D'] === "\u0062\u006C\u0075\u0065") {
        Matter['\u0042\u006F\u0064\u0079']['\u0073\u0065\u0074\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](p['\u0062\u006F\u0064\u0079'], {
          '\u0078': WORLD_WIDTH / (242482 ^ 242480) + (159809 ^ 160209),
          '\u0079': WORLD_HEIGHT / (203740 ^ 203742) + (Math['\u0072\u0061\u006E\u0064\u006F\u006D']() * (369224 ^ 369280) - (434917 ^ 434817))
        });
      } else {
        Matter['\u0042\u006F\u0064\u0079']['\u0073\u0065\u0074\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](p['\u0062\u006F\u0064\u0079'], {
          '\u0078': WORLD_WIDTH / (142154 ^ 142152),
          '\u0079': WORLD_HEIGHT / (112951 ^ 112949)
        });
      }
      Matter['\u0042\u006F\u0064\u0079']['\u0073\u0065\u0074\u0056\u0065\u006C\u006F\u0063\u0069\u0074\u0079'](p['\u0062\u006F\u0064\u0079'], {
        '\u0078': 0,
        '\u0079': 0
      });
    }
  }
  setTimeout(() => {
    _0x1dd8ge['\u0069\u0073\u0052\u0065\u0073\u0065\u0074\u0074\u0069\u006E\u0067'] = false;
  }, 508622 ^ 508730);
}
function setPlayerTeam(p, room, team) {
  if (team === p['\u0074\u0065\u0061\u006D']) return;
  if (team === "\u0073\u0070\u0065\u0063\u0074\u0061\u0074\u006F\u0072") {
    if (p['\u0062\u006F\u0064\u0079'] && room) {
      Matter['\u0057\u006F\u0072\u006C\u0064']['\u0072\u0065\u006D\u006F\u0076\u0065'](room['\u0065\u006E\u0067\u0069\u006E\u0065']['\u0077\u006F\u0072\u006C\u0064'], p['\u0062\u006F\u0064\u0079']);
    }
    p['\u0062\u006F\u0064\u0079'] = null;
    p['\u0074\u0065\u0061\u006D'] = "\u0073\u0070\u0065\u0063\u0074\u0061\u0074\u006F\u0072";
  } else if (team === "der".split("").reverse().join("") || team === "\u0062\u006C\u0075\u0065") {
    p['\u0074\u0065\u0061\u006D'] = team;
    if (!p['\u0062\u006F\u0064\u0079'] && room) {
      var _0xec23e = (121266 ^ 121267) + (775047 ^ 775046);
      let _0x67d = team === "\u0072\u0065\u0064" ? WORLD_WIDTH / (659686 ^ 659684) - (846147 ^ 846035) : WORLD_WIDTH / (703796 ^ 703798) + (325639 ^ 326039);
      _0xec23e = (303413 ^ 303414) + (631784 ^ 631786);
      let _0x7f6dbe = WORLD_HEIGHT / (155377 ^ 155379) + (Math['\u0072\u0061\u006E\u0064\u006F\u006D']() * (175940 ^ 176012) - (963413 ^ 963377));
      let _0xf2_0x3ab = Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0063\u0069\u0072\u0063\u006C\u0065'](_0x67d, _0x7f6dbe, 753420 ^ 753438, {
        "restitution": 0.01,
        '\u0066\u0072\u0069\u0063\u0074\u0069\u006F\u006E\u0041\u0069\u0072': 0.2,
        "density": 0.002,
        '\u0069\u006E\u0065\u0072\u0074\u0069\u0061': Infinity
      });
      p['\u0062\u006F\u0064\u0079'] = _0xf2_0x3ab;
      Matter['\u0057\u006F\u0072\u006C\u0064']['\u0061\u0064\u0064'](room['\u0065\u006E\u0067\u0069\u006E\u0065']['\u0077\u006F\u0072\u006C\u0064'], _0xf2_0x3ab);
    }
  }
}
function createCorner(x, y, type, _0xd3c) {
  let _0x69d2f = [];
  _0xd3c = (361170 ^ 361178) + (340571 ^ 340569);
  let _0x_0x2ea = type === "LT".split("").reverse().join("") ? Math['\u0050\u0049'] : type === "\u0054\u0052" ? Math['\u0050\u0049'] * 1.5 : type === "LB".split("").reverse().join("") ? Math['\u0050\u0049'] * 0.5 : 328753 ^ 328753;
  for (let i = 583206 ^ 583206; i < (945967 ^ 945957); i++) {
    var _0xfebfd = (188460 ^ 188459) + (804579 ^ 804583);
    let _0xdefbfd = _0x_0x2ea + i * Math['\u0050\u0049'] / (913623 ^ 913603);
    _0xfebfd = 156607 ^ 156605;
    let _0xb0ca;
    let _0xc95dde = x + Math['\u0063\u006F\u0073'](_0xdefbfd) * (CORNER_R + (184120 ^ 184104));
    _0xb0ca = (762553 ^ 762545) + (845519 ^ 845514);
    let _0xe3877e = y + Math['\u0073\u0069\u006E'](_0xdefbfd) * (CORNER_R + (194330 ^ 194314));
    _0x69d2f['\u0070\u0075\u0073\u0068'](Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0072\u0065\u0063\u0074\u0061\u006E\u0067\u006C\u0065'](_0xc95dde, _0xe3877e, 103642 ^ 103620, T, {
      '\u0069\u0073\u0053\u0074\u0061\u0074\u0069\u0063': !![],
      '\u0061\u006E\u0067\u006C\u0065': _0xdefbfd
    }));
  }
  return _0x69d2f;
}
function setupWorld(world) {
  Matter['\u0057\u006F\u0072\u006C\u0064']['\u0061\u0064\u0064'](world, [Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0072\u0065\u0063\u0074\u0061\u006E\u0067\u006C\u0065'](WORLD_WIDTH / (702483 ^ 702481), startY - T / (911497 ^ 911499), ICE_WIDTH - (370469 ^ 370471) * CORNER_R, T, {
    '\u0069\u0073\u0053\u0074\u0061\u0074\u0069\u0063': !![]
  }), Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0072\u0065\u0063\u0074\u0061\u006E\u0067\u006C\u0065'](WORLD_WIDTH / (291812 ^ 291814), startY + ICE_HEIGHT + T / (331833 ^ 331835), ICE_WIDTH - (681316 ^ 681318) * CORNER_R, T, {
    '\u0069\u0073\u0053\u0074\u0061\u0074\u0069\u0063': !![]
  }), Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0072\u0065\u0063\u0074\u0061\u006E\u0067\u006C\u0065'](startX - T / (195405 ^ 195407), WORLD_HEIGHT / (784513 ^ 784515), T, ICE_HEIGHT - (617034 ^ 617032) * CORNER_R, {
    "isStatic": !![]
  }), Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0072\u0065\u0063\u0074\u0061\u006E\u0067\u006C\u0065'](startX + ICE_WIDTH + T / (251242 ^ 251240), WORLD_HEIGHT / (787691 ^ 787689), T, ICE_HEIGHT - (303461 ^ 303463) * CORNER_R, {
    '\u0069\u0073\u0053\u0074\u0061\u0074\u0069\u0063': !![]
  }), Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0072\u0065\u0063\u0074\u0061\u006E\u0067\u006C\u0065'](startX + PUSH_IN_GOAL - ZID_SIRINA / (303198 ^ 303196), startY + ICE_HEIGHT / (874178 ^ 874176), ZID_SIRINA, ZID_VISINA, {
    "isStatic": !![]
  }), Matter['\u0042\u006F\u0064\u0069\u0065\u0073']['\u0072\u0065\u0063\u0074\u0061\u006E\u0067\u006C\u0065'](startX + ICE_WIDTH - PUSH_IN_GOAL + ZID_SIRINA / (880548 ^ 880550), startY + ICE_HEIGHT / (415035 ^ 415033), ZID_SIRINA, ZID_VISINA, {
    '\u0069\u0073\u0053\u0074\u0061\u0074\u0069\u0063': !![]
  })]);
  Matter['\u0057\u006F\u0072\u006C\u0064']['\u0061\u0064\u0064'](world, createCorner(startX + CORNER_R, startY + CORNER_R, "\u0054\u004C"));
  Matter['\u0057\u006F\u0072\u006C\u0064']['\u0061\u0064\u0064'](world, createCorner(startX + ICE_WIDTH - CORNER_R, startY + CORNER_R, "\u0054\u0052"));
  Matter['\u0057\u006F\u0072\u006C\u0064']['\u0061\u0064\u0064'](world, createCorner(startX + CORNER_R, startY + ICE_HEIGHT - CORNER_R, "LB".split("").reverse().join("")));
  Matter['\u0057\u006F\u0072\u006C\u0064']['\u0061\u0064\u0064'](world, createCorner(startX + ICE_WIDTH - CORNER_R, startY + ICE_HEIGHT - CORNER_R, "\u0042\u0052"));
}
wss['\u006F\u006E']("\u0063\u006F\u006E\u006E\u0065\u0063\u0074\u0069\u006F\u006E", ws => {
  let _0x976e;
  let myId = generateRandomId();
  _0x976e = '\u006C\u006A\u006B\u0063\u006C\u0063';
  ws['\u0073\u0065\u006E\u0064'](JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
    '\u0074\u0079\u0070\u0065': "\u0077\u0065\u006C\u0063\u006F\u006D\u0065",
    '\u006D\u0079\u0049\u0064': myId
  }));
  players[myId] = {
    '\u0074\u0065\u0061\u006D': "\u0073\u0070\u0065\u0063\u0074\u0061\u0074\u006F\u0072",
    "keys": {},
    '\u006E\u0061\u006D\u0065': "\u0047\u0075\u0065\u0073\u0074",
    '\u0072\u006F\u006F\u006D\u0049\u0064': null
  };
  ws['\u0073\u0065\u006E\u0064'](JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
    '\u0074\u0079\u0070\u0065': "\u0077\u006F\u0072\u006C\u0064\u002D\u0069\u006E\u0066\u006F",
    "WORLD_WIDTH": WORLD_WIDTH,
    "WORLD_HEIGHT": WORLD_HEIGHT,
    '\u0049\u0043\u0045\u005F\u0057\u0049\u0044\u0054\u0048': ICE_WIDTH,
    '\u0049\u0043\u0045\u005F\u0048\u0045\u0049\u0047\u0048\u0054': ICE_HEIGHT,
    '\u0043\u004F\u0052\u004E\u0045\u0052\u005F\u0052': CORNER_R,
    '\u0047\u004F\u0041\u004C\u005F\u0057\u0049\u0044\u0054\u0048': GOAL_WIDTH,
    '\u0050\u0055\u0053\u0048\u005F\u0049\u004E\u005F\u0047\u004F\u0041\u004C': PUSH_IN_GOAL,
    '\u0047\u004F\u004C\u005F\u0044\u0055\u0042\u0049\u004E\u0041': GOL_DUBINA,
    '\u0054': T
  }));
  ws['\u0073\u0065\u006E\u0064'](JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
    '\u0074\u0079\u0070\u0065': 'room-list',
    "rooms": getRoomList()
  }));
  ws['\u006F\u006E']("esolc".split("").reverse().join(""), () => {
    const p = players[myId];
    if (p) {
      if (p['\u0062\u006F\u0064\u0079'] && p['\u0072\u006F\u006F\u006D\u0049\u0064'] && rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']]) {
        Matter['\u0057\u006F\u0072\u006C\u0064']['\u0072\u0065\u006D\u006F\u0076\u0065'](rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']]['\u0065\u006E\u0067\u0069\u006E\u0065']['\u0077\u006F\u0072\u006C\u0064'], p['\u0062\u006F\u0064\u0079']);
      }
      if (p['\u0072\u006F\u006F\u006D\u0049\u0064'] && rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']] && rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']]['\u0061\u0064\u006D\u0069\u006E\u0049\u0064'] === myId) {
        const room = rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']];
        const nextAdmin = Object['\u006B\u0065\u0079\u0073'](players)['\u0066\u0069\u006E\u0064'](id => id !== myId && players[id]['\u0072\u006F\u006F\u006D\u0049\u0064'] === p['\u0072\u006F\u006F\u006D\u0049\u0064']);
        if (nextAdmin) {
          room['\u0061\u0064\u006D\u0069\u006E\u0049\u0064'] = nextAdmin;
        } else {
          delete rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']];
        }
      }
    }
    delete players[myId];
    broadcastRoomList();
  });
  ws['\u006F\u006E']("egassem".split("").reverse().join(""), message => {
    let data;
    try {
      data = JSON['\u0070\u0061\u0072\u0073\u0065'](message);
    } catch (e) {
      return;
    }
    if (data['\u0074\u0079\u0070\u0065'] === "\u006A\u006F\u0069\u006E\u002D\u0072\u006F\u006F\u006D") {
      const roomId = data['\u0072\u006F\u006F\u006D'];
      if (!rooms[roomId]) {
        ws['\u0073\u0065\u006E\u0064'](JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
          "type": 'room-list',
          '\u0072\u006F\u006F\u006D\u0073': getRoomList()
        }));
        return;
      }
      ws['\u0072\u006F\u006F\u006D\u0049\u0064'] = roomId;
      players[myId]['\u0072\u006F\u006F\u006D\u0049\u0064'] = roomId;
      players[myId]['\u006E\u0061\u006D\u0065'] = data['\u006E\u0061\u006D\u0065'] || "tseuG".split("").reverse().join("");
      broadcastRoomList();
    } else if (data['\u0074\u0079\u0070\u0065'] === "\u0063\u0072\u0065\u0061\u0074\u0065\u002D\u0072\u006F\u006F\u006D") {
      var _0x442cdb = (460575 ^ 460568) + (994513 ^ 994517);
      const newRoomId = generateRandomId();
      _0x442cdb = 646934 ^ 646930;
      createRoom(newRoomId, myId);
      ws['\u0073\u0065\u006E\u0064'](JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
        "type": 'room-created',
        "roomId": newRoomId
      }));
      broadcastRoomList();
    } else if (data['\u0074\u0079\u0070\u0065'] === "\u006C\u0069\u0073\u0074\u002D\u0072\u006F\u006F\u006D\u0073") {
      ws['\u0073\u0065\u006E\u0064'](JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
        '\u0074\u0079\u0070\u0065': "\u0072\u006F\u006F\u006D\u002D\u006C\u0069\u0073\u0074",
        "rooms": getRoomList()
      }));
    } else if (data['\u0074\u0079\u0070\u0065'] === "\u0063\u0068\u0061\u0074") {
      broadcastToRoom(players[myId]['\u0072\u006F\u006F\u006D\u0049\u0064'], {
        "type": "\u0063\u0068\u0061\u0074",
        "senderId": myId,
        "text": data['\u0074\u0065\u0078\u0074']
      });
    } else if (data['\u0074\u0079\u0070\u0065'] === "\u0073\u0065\u0074\u002D\u0074\u0065\u0061\u006D") {
      const p = players[myId];
      const room = p['\u0072\u006F\u006F\u006D\u0049\u0064'] ? rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']] : null;
      p['\u006E\u0061\u006D\u0065'] = data['\u006E\u0061\u006D\u0065'];
      if (data['\u0074\u0065\u0061\u006D'] === "rotatceps".split("").reverse().join("")) {
        setPlayerTeam(p, room, "rotatceps".split("").reverse().join(""));
      } else if (data['\u0074\u0065\u0061\u006D'] === "der".split("").reverse().join("") || data['\u0074\u0065\u0061\u006D'] === "eulb".split("").reverse().join("")) {
        if (room && room['\u0061\u0064\u006D\u0069\u006E\u0049\u0064'] === myId) {
          setPlayerTeam(p, room, data['\u0074\u0065\u0061\u006D']);
        }
      }
    } else if (data['\u0074\u0079\u0070\u0065'] === "\u0061\u0064\u006D\u0069\u006E\u002D\u0073\u0065\u0074\u002D\u0074\u0065\u0061\u006D") {
      const p = players[myId];
      var _0x4gf10f = (104305 ^ 104306) + (756041 ^ 756047);
      const room = p['\u0072\u006F\u006F\u006D\u0049\u0064'] ? rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']] : null;
      _0x4gf10f = (290754 ^ 290752) + (158423 ^ 158430);
      const target = players[data['\u0074\u0061\u0072\u0067\u0065\u0074\u0049\u0064']];
      if (room && room['\u0061\u0064\u006D\u0069\u006E\u0049\u0064'] === myId && target && target['\u0072\u006F\u006F\u006D\u0049\u0064'] === p['\u0072\u006F\u006F\u006D\u0049\u0064']) {
        if (data['\u0074\u0065\u0061\u006D'] === "\u0072\u0065\u0064" || data['\u0074\u0065\u0061\u006D'] === "eulb".split("").reverse().join("") || data['\u0074\u0065\u0061\u006D'] === "\u0073\u0070\u0065\u0063\u0074\u0061\u0074\u006F\u0072") {
          setPlayerTeam(target, room, data['\u0074\u0065\u0061\u006D']);
        }
      }
    } else if (data['\u0074\u0079\u0070\u0065'] === "emag-trats".split("").reverse().join("")) {
      var _0xf4d = (625151 ^ 625142) + (862280 ^ 862283);
      let roomId = players[myId]['\u0072\u006F\u006F\u006D\u0049\u0064'];
      _0xf4d = (989955 ^ 989959) + (296048 ^ 296054);
      let room = rooms[roomId];
      if (room && room['\u0061\u0064\u006D\u0069\u006E\u0049\u0064'] === myId) {
        room['\u0067\u0061\u006D\u0065\u0053\u0074\u0061\u0074\u0065'] = "GNIYALP".split("").reverse().join("");
        let _0xb812f;
        let noviLimit = parseInt(data['\u006C\u0069\u006D\u0069\u0074']);
        _0xb812f = (204935 ^ 204931) + (910362 ^ 910363);
        room['\u0067\u006F\u0061\u006C\u004C\u0069\u006D\u0069\u0074'] = !isNaN(noviLimit) && noviLimit > (787114 ^ 787114) ? noviLimit : 164567 ^ 164562;
        resetRoom(roomId);
        console['\u006C\u006F\u0067']("\u0053\u006F\u0062\u0061\u0020" + roomId + "\u0020\u006B\u0072\u0065\u0107\u0065\u0020\u0073\u0061\u0020\u006C\u0069\u006D\u0069\u0074\u006F\u006D\u003A\u0020" + room['\u0067\u006F\u0061\u006C\u004C\u0069\u006D\u0069\u0074']);
        broadcastToRoom(roomId, {
          '\u0074\u0079\u0070\u0065': "\u0067\u0061\u006D\u0065\u002D\u0073\u0074\u0061\u0072\u0074\u0065\u0064"
        });
        broadcastRoomList();
      }
    } else if (data['\u0074\u0079\u0070\u0065'] === "toohs".split("").reverse().join("")) {
      let p = players[myId];
      let room = rooms[p['\u0072\u006F\u006F\u006D\u0049\u0064']];
      if (p && p['\u0062\u006F\u0064\u0079'] && room) {
        let _0x821cgc;
        let dx = room['\u0070\u0075\u0063\u006B']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0078'] - p['\u0062\u006F\u0064\u0079']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0078'];
        _0x821cgc = "nopngj".split("").reverse().join("");
        let _0x3ca3e;
        let dy = room['\u0070\u0075\u0063\u006B']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0079'] - p['\u0062\u006F\u0064\u0079']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0079'];
        _0x3ca3e = (699177 ^ 699179) + (265627 ^ 265629);
        var _0x3ab8ed = (306853 ^ 306850) + (428501 ^ 428497);
        let distance = Math['\u0073\u0071\u0072\u0074'](dx * dx + dy * dy);
        _0x3ab8ed = (802403 ^ 802401) + (568168 ^ 568160);
        if (distance < (683848 ^ 683898)) {
          var _0x88a0f = (414869 ^ 414867) + (841342 ^ 841340);
          let force = 0.0010;
          _0x88a0f = 623605 ^ 623605;
          Matter['\u0042\u006F\u0064\u0079']['\u0061\u0070\u0070\u006C\u0079\u0046\u006F\u0072\u0063\u0065'](room['\u0070\u0075\u0063\u006B'], room['\u0070\u0075\u0063\u006B']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E'], {
            '\u0078': dx / distance * force,
            '\u0079': dy / distance * force
          });
        }
      }
    } else if (data['\u0074\u0079\u0070\u0065'] === "\u006B\u0065\u0079\u002D\u0064\u006F\u0077\u006E") {
      players[myId]['\u006B\u0065\u0079\u0073'][data['\u006B\u0065\u0079']] = !![];
    } else if (data['\u0074\u0079\u0070\u0065'] === "pu-yek".split("").reverse().join("")) {
      players[myId]['\u006B\u0065\u0079\u0073'][data['\u006B\u0065\u0079']] = false;
    }
  });
});
setInterval(() => {
  for (let roomId in rooms) {
    let room = rooms[roomId];
    if (!room) continue;
    for (let id in players) {
      let p = players[id];
      if (p['\u0072\u006F\u006F\u006D\u0049\u0064'] === roomId && p['\u0062\u006F\u0064\u0079']) {
        var _0x077c = (490745 ^ 490737) + (185533 ^ 185529);
        let dx = p['\u006B\u0065\u0079\u0073']['ArrowLeft'] || p['\u006B\u0065\u0079\u0073']["\u004B\u0065\u0079\u0041"] ? -(746317 ^ 746316) : p['\u006B\u0065\u0079\u0073']["\u0041\u0072\u0072\u006F\u0077\u0052\u0069\u0067\u0068\u0074"] || p['\u006B\u0065\u0079\u0073']["\u004B\u0065\u0079\u0044"] ? 463930 ^ 463931 : 538285 ^ 538285;
        _0x077c = 171776 ^ 171779;
        let dy = p['\u006B\u0065\u0079\u0073']['ArrowUp'] || p['\u006B\u0065\u0079\u0073']["\u004B\u0065\u0079\u0057"] ? -(497880 ^ 497881) : p['\u006B\u0065\u0079\u0073']["\u0041\u0072\u0072\u006F\u0077\u0044\u006F\u0077\u006E"] || p['\u006B\u0065\u0079\u0073']["\u004B\u0065\u0079\u0053"] ? 196527 ^ 196526 : 447178 ^ 447178;
        if (dx !== (661187 ^ 661187) || dy !== (257993 ^ 257993)) {
          let magnitude = Math['\u0073\u0071\u0072\u0074'](dx * dx + dy * dy);
          let nx = dx / magnitude,
            ny = dy / magnitude;
          if (Math['\u0073\u0071\u0072\u0074'](p['\u0062\u006F\u0064\u0079']['\u0076\u0065\u006C\u006F\u0063\u0069\u0074\u0079']['\u0078'] ** (524768 ^ 524770) + p['\u0062\u006F\u0064\u0079']['\u0076\u0065\u006C\u006F\u0063\u0069\u0074\u0079']['\u0079'] ** (697517 ^ 697519)) < 2.01) {
            Matter['\u0042\u006F\u0064\u0079']['\u0061\u0070\u0070\u006C\u0079\u0046\u006F\u0072\u0063\u0065'](p['\u0062\u006F\u0064\u0079'], p['\u0062\u006F\u0064\u0079']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E'], {
              '\u0078': nx * 0.02,
              '\u0079': ny * 0.02
            });
          }
        }
      }
    }
    Matter['\u0045\u006E\u0067\u0069\u006E\u0065']['\u0075\u0070\u0064\u0061\u0074\u0065'](room['\u0065\u006E\u0067\u0069\u006E\u0065'], (705716 ^ 706396) / (989876 ^ 989832));
    if (room['\u0067\u0061\u006D\u0065\u0053\u0074\u0061\u0074\u0065'] === "\u0050\u004C\u0041\u0059\u0049\u004E\u0047") {
      var _0xb7b8d = (874427 ^ 874431) + (906642 ^ 906647);
      let p = room['\u0070\u0075\u0063\u006B']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E'];
      _0xb7b8d = 583481 ^ 583473;
      var _0x5bda = (539951 ^ 539951) + (740513 ^ 740517);
      let scored = false;
      _0x5bda = (533831 ^ 533826) + (288037 ^ 288036);
      let levaLinija = startX + PUSH_IN_GOAL;
      if (p['\u0078'] >= levaLinija && p['\u0078'] <= levaLinija + GOL_DUBINA && p['\u0079'] > startY + (ICE_HEIGHT / (495883 ^ 495881) - GOAL_WIDTH / (719276 ^ 719278)) && p['\u0079'] < startY + (ICE_HEIGHT / (909202 ^ 909200) + GOAL_WIDTH / (629475 ^ 629473))) {
        room['\u0073\u0063\u006F\u0072\u0065']['\u0074\u0065\u0061\u006D\u0042\u006C\u0075\u0065']++;
        scored = !![];
      }
      let desnaLinija = startX + ICE_WIDTH - PUSH_IN_GOAL;
      if (p['\u0078'] >= desnaLinija - GOL_DUBINA && p['\u0078'] <= desnaLinija && p['\u0079'] > startY + (ICE_HEIGHT / (821790 ^ 821788) - GOAL_WIDTH / (471757 ^ 471759)) && p['\u0079'] < startY + (ICE_HEIGHT / (869408 ^ 869410) + GOAL_WIDTH / (655208 ^ 655210))) {
        room['\u0073\u0063\u006F\u0072\u0065']['\u0074\u0065\u0061\u006D\u0052\u0065\u0064']++;
        scored = !![];
      }
      if (scored) {
        let limit = room['\u0067\u006F\u0061\u006C\u004C\u0069\u006D\u0069\u0074'] || 781620 ^ 781617;
        if (room['\u0073\u0063\u006F\u0072\u0065']['\u0074\u0065\u0061\u006D\u0042\u006C\u0075\u0065'] >= limit || room['\u0073\u0063\u006F\u0072\u0065']['\u0074\u0065\u0061\u006D\u0052\u0065\u0064'] >= limit) {
          broadcastToRoom(roomId, {
            '\u0074\u0079\u0070\u0065': 'game-over',
            '\u0077\u0069\u006E\u006E\u0065\u0072': room['\u0073\u0063\u006F\u0072\u0065']['\u0074\u0065\u0061\u006D\u0042\u006C\u0075\u0065'] >= limit ? "eulB".split("").reverse().join("") : "\u0052\u0065\u0064"
          });
          room['\u0067\u0061\u006D\u0065\u0053\u0074\u0061\u0074\u0065'] = "YBBOL".split("").reverse().join("");
          room['\u0073\u0063\u006F\u0072\u0065'] = {
            "teamRed": 0,
            '\u0074\u0065\u0061\u006D\u0042\u006C\u0075\u0065': 0
          };
          broadcastRoomList();
        }
        resetRoom(roomId);
      }
    }
    var _0xce6fc = (624950 ^ 624950) + (433795 ^ 433793);
    let playerList = {};
    _0xce6fc = "odbcic".split("").reverse().join("");
    for (let id in players) {
      var _0xa483fg = (709486 ^ 709484) + (918319 ^ 918318);
      const pl = players[id];
      _0xa483fg = (330869 ^ 330864) + (297886 ^ 297882);
      if (pl['\u0072\u006F\u006F\u006D\u0049\u0064'] === roomId) {
        playerList[id] = {
          '\u0074\u0065\u0061\u006D': pl['\u0074\u0065\u0061\u006D'],
          "name": pl['\u006E\u0061\u006D\u0065'],
          '\u0078': pl['\u0062\u006F\u0064\u0079'] ? pl['\u0062\u006F\u0064\u0079']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0078'] : null,
          '\u0079': pl['\u0062\u006F\u0064\u0079'] ? pl['\u0062\u006F\u0064\u0079']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0079'] : null
        };
      }
    }
    broadcastToRoom(roomId, {
      "type": "\u0075\u0070\u0064\u0061\u0074\u0065",
      '\u0070\u0075\u0063\u006B': {
        '\u0078': room['\u0070\u0075\u0063\u006B']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0078'],
        '\u0079': room['\u0070\u0075\u0063\u006B']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']['\u0079']
      },
      '\u0070\u006C\u0061\u0079\u0065\u0072\u0073': playerList,
      '\u0073\u0063\u006F\u0072\u0065': room['\u0073\u0063\u006F\u0072\u0065'],
      '\u0061\u0064\u006D\u0069\u006E\u0049\u0064': room['\u0061\u0064\u006D\u0069\u006E\u0049\u0064']
    });
  }
}, (228300 ^ 227364) / (806801 ^ 806829));
server['\u006C\u0069\u0073\u0074\u0065\u006E'](373674 ^ 374802, () => console['\u006C\u006F\u0067']("\u0053\u0065\u0072\u0076\u0065\u0072\u0020\u0072\u0061\u0064\u0069\u0021"));
