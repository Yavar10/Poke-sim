export const POKEMON = {
  // ===== GEN 1 =====
  BULBASAUR: {
    name: "Bulbasaur",
    type: "grass",
    maxHp: 53,
    attack: 29,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif"
    },
    moves: ["TACKLE","VINE_WHIP","LEER","LEECH_SEED"],
    drain: false
  },
  IVYSAUR: {
    name: "Ivysaur",
    type: "grass",
    maxHp: 70,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ivysaur.gif"
    },
    moves: ["VINE_WHIP","RAZOR_LEAF","LEECH_SEED","GROWTH"],
    drain: false
  },
  VENUSAUR: {
    name: "Venusaur",
    type: "grass",
    maxHp: 90,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur.gif"
    },
    moves: ["RAZOR_LEAF","SOLAR_BEAM","LEECH_SEED","GROWTH"],
    drain: false
  },

  CHARMANDER: {
    name: "Charmander",
    type: "fire",
    maxHp: 44,
    attack: 28,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif"
    },
    moves: ["SCRATCH","EMBER","GROWL","LEER"],
    drain: false
  },
  CHARMELEON: {
    name: "Charmeleon",
    type: "fire",
    maxHp: 65,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmeleon.gif"
    },
    moves: ["EMBER","FLAME_BURST","SCRATCH","WORK_UP"],
    drain: false
  },
  CHARIZARD: {
    name: "Charizard",
    type: "fire",
    maxHp: 85,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif"
    },
    moves: ["FLAMETHROWER","FIRE_BLAST","SLASH","WORK_UP"],
    drain: false
  },

  SQUIRTLE: {
    name: "Squirtle",
    type: "water",
    maxHp: 58,
    attack: 24,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif"
    },
    moves: ["TACKLE","WATER_GUN","GROWL","LEER"],
    drain: false
  },
  WARTORTLE: {
    name: "Wartortle",
    type: "water",
    maxHp: 72,
    attack: 38,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/wartortle.gif"
    },
    moves: ["WATER_GUN","BUBBLE","BITE","WITHDRAW"],
    drain: false
  },
  BLASTOISE: {
    name: "Blastoise",
    type: "water",
    maxHp: 92,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif"
    },
    moves: ["HYDRO_PUMP","SURF","BITE","WITHDRAW"],
    drain: false
  },

  PICHU: {
    name: "Pichu",
    type: "electric",
    maxHp: 40,
    attack: 22,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pichu.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pichu.gif"
    },
    moves: ["THUNDERSHOCK", "TAIL_WHIP", "GROWL"],
    drain: false
  },

  PIKACHU: {
    name: "Pikachu",
    type: "electric",
    maxHp: 55,
    attack: 38,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif"
    },
    moves: ["THUNDERSHOCK", "QUICK_ATTACK", "TAIL_WHIP", "THUNDER"],
    drain: false
  },

  RAICHU: {
    name: "Raichu",
    type: "electric",
    maxHp: 85,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/raichu.gif"
    },
    moves: ["THUNDERBOLT", "THUNDER", "QUICK_ATTACK", "TAIL_WHIP"],
    drain: false
  },

  // ===== GEN 2 =====
  CHIKORITA: {
    name: "Chikorita",
    type: "grass",
    maxHp: 55,
    attack: 26,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/chikorita.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/chikorita.gif"
    },
    moves: ["TACKLE","RAZOR_LEAF","GROWL","LEECH_SEED"],
    drain: false
  },
  BAYLEEF: {
    name: "Bayleef",
    type: "grass",
    maxHp: 70,
    attack: 38,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/bayleef.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bayleef.gif"
    },
    moves: ["RAZOR_LEAF","BODY_SLAM","GROWTH","LEECH_SEED"],
    drain: false
  },
  MEGANIUM: {
    name: "Meganium",
    type: "grass",
    maxHp: 90,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/meganium.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/meganium.gif"
    },
    moves: ["SOLAR_BEAM","BODY_SLAM","GROWTH","LEECH_SEED"],
    drain: false
  },

  CYNDAQUIL: {
    name: "Cyndaquil",
    type: "fire",
    maxHp: 50,
    attack: 30,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/cyndaquil.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/cyndaquil.gif"
    },
    moves: ["SCRATCH","EMBER","WORK_UP","LEER"],
    drain: false
  },
  QUILAVA: {
    name: "Quilava",
    type: "fire",
    maxHp: 65,
    attack: 42,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/quilava.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/quilava.gif"
    },
    moves: ["EMBER","FLAME_BURST","WORK_UP","SLASH"],
    drain: false
  },
  TYPHLOSION: {
    name: "Typhlosion",
    type: "fire",
    maxHp: 85,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/typhlosion.gif"
    },
    moves: ["FLAMETHROWER","FIRE_BLAST","SLASH","WORK_UP"],
    drain: false
  },

  TOTODILE: {
    name: "Totodile",
    type: "water",
    maxHp: 55,
    attack: 32,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/totodile.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/totodile.gif"
    },
    moves: ["SCRATCH","WATER_GUN","BITE","LEER"],
    drain: false
  },
  CROCONAW: {
    name: "Croconaw",
    type: "water",
    maxHp: 70,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/croconaw.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/croconaw.gif"
    },
    moves: ["WATER_GUN","BITE","SLASH","WITHDRAW"],
    drain: false
  },
  FERALIGATR: {
    name: "Feraligatr",
    type: "water",
    maxHp: 95,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/feraligatr.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/feraligatr.gif"
    },
    moves: ["HYDRO_PUMP","CRUNCH","SLASH","WITHDRAW"],
    drain: false
  }
};