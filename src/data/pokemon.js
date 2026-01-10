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
  },  CATERPIE: {
    pkdx: 10,
    name: "Caterpie",
    type: "bug",
    maxHp: 45,
    attack: 15,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/caterpie.gif"
    },
    moves: ["TACKLE", "STRING_SHOT"],
    drain: false
  },

  METAPOD: {
    pkdx: 11,
    name: "Metapod",
    type: "bug",
    maxHp: 50,
    attack: 10,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/metapod.gif"
    },
    moves: ["HARDEN"],
    drain: false
  },

  BUTTERFREE: {
    pkdx: 12,
    name: "Butterfree",
    type: "bug",
    maxHp: 60,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/butterfree.gif"
    },
    moves: ["CONFUSION", "GUST", "SLEEP_POWDER"],
    drain: false
  },

  WEEDLE: {
    pkdx: 13,
    name: "Weedle",
    type: "bug",
    maxHp: 40,
    attack: 15,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/weedle.gif"
    },
    moves: ["POISON_STING", "STRING_SHOT"],
    drain: false
  },

  KAKUNA: {
    pkdx: 14,
    name: "Kakuna",
    type: "bug",
    maxHp: 45,
    attack: 10,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kakuna.gif"
    },
    moves: ["HARDEN"],
    drain: false
  },

  BEEDRILL: {
    pkdx: 15,
    name: "Beedrill",
    type: "bug",
    maxHp: 65,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/beedrill.gif"
    },
    moves: ["POISON_JAB", "FURY_ATTACK"],
    drain: false
  },

  PIDGEY: {
    pkdx: 16,
    name: "Pidgey",
    type: "flying",
    maxHp: 45,
    attack: 20,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgey.gif"
    },
    moves: ["TACKLE", "GUST"],
    drain: false
  },

  PIDGEOTTO: {
    pkdx: 17,
    name: "Pidgeotto",
    type: "flying",
    maxHp: 60,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgeotto.gif"
    },
    moves: ["GUST", "QUICK_ATTACK"],
    drain: false
  },

  PIDGEOT: {
    pkdx: 18,
    name: "Pidgeot",
    type: "flying",
    maxHp: 80,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgeot.gif"
    },
    moves: ["GUST", "WING_ATTACK"],
    drain: false
  },
/* 
  RATTATA: {
    pkdx: 19,
    name: "Rattata",
    type: "normal",
    maxHp: 40,
    attack: 25,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/rattata.gif"
    },
    moves: ["TACKLE", "QUICK_ATTACK"],
    drain: false
  },

  RATICATE: {
    pkdx: 20,
    name: "Raticate",
    type: "normal",
    maxHp: 65,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/raticate.gif"
    },
    moves: ["HYPER_FANG", "QUICK_ATTACK"],
    drain: false
  },
    SPEAROW: {
    pkdx: 21,
    name: "Spearow",
    type: "flying",
    maxHp: 40,
    attack: 30,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/spearow.gif"
    },
    moves: ["PECK", "GROWL"],
    drain: false
  },

  FEAROW: {
    pkdx: 22,
    name: "Fearow",
    type: "flying",
    maxHp: 65,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/fearow.gif"
    },
    moves: ["PECK", "FURY_ATTACK"],
    drain: false
  },

  EKANS: {
    pkdx: 23,
    name: "Ekans",
    type: "poison",
    maxHp: 45,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ekans.gif"
    },
    moves: ["BITE", "POISON_STING"],
    drain: false
  },

  ARBOK: {
    pkdx: 24,
    name: "Arbok",
    type: "poison",
    maxHp: 70,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/arbok.gif"
    },
    moves: ["BITE", "GLARE"],
    drain: false
  },

  SANDSHREW: {
    pkdx: 27,
    name: "Sandshrew",
    type: "ground",
    maxHp: 50,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/sandshrew.gif"
    },
    moves: ["SCRATCH", "DEFENSE_CURL"],
    drain: false
  },

  SANDSLASH: {
    pkdx: 28,
    name: "Sandslash",
    type: "ground",
    maxHp: 75,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/sandslash.gif"
    },
    moves: ["SLASH", "DEFENSE_CURL"],
    drain: false
  },

  CLEFAIRY: {
    pkdx: 35,
    name: "Clefairy",
    type: "fairy",
    maxHp: 70,
    attack: 30,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/clefairy.gif"
    },
    moves: ["POUND", "GROWL"],
    drain: false
  },

  CLEFABLE: {
    pkdx: 36,
    name: "Clefable",
    type: "fairy",
    maxHp: 95,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/clefable.gif"
    },
    moves: ["BODY_SLAM", "GROWL"],
    drain: false
  },

  VULPIX: {
    pkdx: 37,
    name: "Vulpix",
    type: "fire",
    maxHp: 38,
    attack: 30,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/vulpix.gif"
    },
    moves: ["EMBER", "TAIL_WHIP"],
    drain: false
  },

  NINETALES: {
    pkdx: 38,
    name: "Ninetales",
    type: "fire",
    maxHp: 73,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ninetales.gif"
    },
    moves: ["EMBER", "CONFUSE_RAY"],
    drain: false
  },

  ZUBAT: {
    pkdx: 41,
    name: "Zubat",
    type: "poison",
    maxHp: 40,
    attack: 25,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/zubat.gif"
    },
    moves: ["LEECH_LIFE", "BITE"],
    drain: false
  },

  GOLBAT: {
    pkdx: 42,
    name: "Golbat",
    type: "poison",
    maxHp: 75,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/golbat.gif"
    },
    moves: ["LEECH_LIFE", "BITE"],
    drain: false
  },

  ODDISH: {
    pkdx: 43,
    name: "Oddish",
    type: "grass",
    maxHp: 45,
    attack: 25,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/oddish.gif"
    },
    moves: ["ABSORB", "GROWTH"],
    drain: false
  },

  GLOOM: {
    pkdx: 44,
    name: "Gloom",
    type: "grass",
    maxHp: 60,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gloom.gif"
    },
    moves: ["ABSORB", "ACID"],
    drain: false
  },

  VILEPLUME: {
    pkdx: 45,
    name: "Vileplume",
    type: "grass",
    maxHp: 75,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/vileplume.gif"
    },
    moves: ["PETAL_DANCE", "SOLAR_BEAM"],
    drain: false
  },

  PARAS: {
    pkdx: 46,
    name: "Paras",
    type: "bug",
    maxHp: 35,
    attack: 30,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/paras.gif"
    },
    moves: ["SCRATCH", "ABSORB"],
    drain: false
  },

  PARASECT: {
    pkdx: 47,
    name: "Parasect",
    type: "bug",
    maxHp: 60,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/parasect.gif"
    },
    moves: ["SLASH", "ABSORB"],
    drain: false
  },

  DIGLETT: {
    pkdx: 50,
    name: "Diglett",
    type: "ground",
    maxHp: 30,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/diglett.gif"
    },
    moves: ["SCRATCH", "MUD_SLAP"],
    drain: false
  },

  DUGTRIO: {
    pkdx: 51,
    name: "Dugtrio",
    type: "ground",
    maxHp: 55,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dugtrio.gif"
    },
    moves: ["EARTHQUAKE", "SLASH"],
    drain: false
  },

  MEOWTH: {
    pkdx: 52,
    name: "Meowth",
    type: "normal",
    maxHp: 40,
    attack: 30,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/meowth.gif"
    },
    moves: ["SCRATCH", "BITE"],
    drain: false
  },

  PERSIAN: {
    pkdx: 53,
    name: "Persian",
    type: "normal",
    maxHp: 65,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/persian.gif"
    },
    moves: ["SLASH", "BITE"],
    drain: false
  },

  PSYDUCK: {
    pkdx: 54,
    name: "Psyduck",
    type: "water",
    maxHp: 50,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/psyduck.gif"
    },
    moves: ["WATER_GUN", "CONFUSION"],
    drain: false
  },

  GOLDUCK: {
    pkdx: 55,
    name: "Golduck",
    type: "water",
    maxHp: 80,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/golduck.gif"
    },
    moves: ["SURF", "CONFUSION"],
    drain: false
  },

  MANKEY: {
    pkdx: 56,
    name: "Mankey",
    type: "fighting",
    maxHp: 40,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mankey.gif"
    },
    moves: ["KARATE_CHOP", "LEER"],
    drain: false
  },

  PRIMEAPE: {
    pkdx: 57,
    name: "Primeape",
    type: "fighting",
    maxHp: 65,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/primeape.gif"
    },
    moves: ["CROSS_CHOP", "RAGE"],
    drain: false
  },

  GROWLITHE: {
    pkdx: 58,
    name: "Growlithe",
    type: "fire",
    maxHp: 55,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/growlithe.gif"
    },
    moves: ["EMBER", "BITE"],
    drain: false
  },

  ARCANINE: {
    pkdx: 59,
    name: "Arcanine",
    type: "fire",
    maxHp: 90,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/arcanine.gif"
    },
    moves: ["FLAMETHROWER", "EXTREME_SPEED"],
    drain: false
  },

  POLIWAG: {
    pkdx: 60,
    name: "Poliwag",
    type: "water",
    maxHp: 40,
    attack: 25,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/poliwag.gif"
    },
    moves: ["WATER_GUN", "BUBBLE"],
    drain: false
  },

  POLIWHIRL: {
    pkdx: 61,
    name: "Poliwhirl",
    type: "water",
    maxHp: 65,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/poliwhirl.gif"
    },
    moves: ["WATER_GUN", "BODY_SLAM"],
    drain: false
  },

  POLIWRATH: {
    pkdx: 62,
    name: "Poliwrath",
    type: "water",
    maxHp: 90,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/poliwrath.gif"
    },
    moves: ["SURF", "CROSS_CHOP"],
    drain: false
  },

  ABRA: {
    pkdx: 63,
    name: "Abra",
    type: "psychic",
    maxHp: 25,
    attack: 15,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/abra.gif"
    },
    moves: ["CONFUSION"],
    drain: false
  },

  KADABRA: {
    pkdx: 64,
    name: "Kadabra",
    type: "psychic",
    maxHp: 40,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kadabra.gif"
    },
    moves: ["CONFUSION", "PSYBEAM"],
    drain: false
  },

  ALAKAZAM: {
    pkdx: 65,
    name: "Alakazam",
    type: "psychic",
    maxHp: 55,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/alakazam.gif"
    },
    moves: ["PSYCHIC", "PSYBEAM"],
    drain: false
  },

  MACHOP: {
    pkdx: 66,
    name: "Machop",
    type: "fighting",
    maxHp: 70,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/machop.gif"
    },
    moves: ["KARATE_CHOP", "LOW_KICK"],
    drain: false
  },

  MACHOKE: {
    pkdx: 67,
    name: "Machoke",
    type: "fighting",
    maxHp: 80,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/machoke.gif"
    },
    moves: ["KARATE_CHOP", "SUBMISSION"],
    drain: false
  },

  MACHAMP: {
    pkdx: 68,
    name: "Machamp",
    type: "fighting",
    maxHp: 90,
    attack: 80,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/machamp.gif"
    },
    moves: ["CROSS_CHOP", "SUBMISSION"],
    drain: false
  },

  BELLSPROUT: {
    pkdx: 69,
    name: "Bellsprout",
    type: "grass",
    maxHp: 50,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bellsprout.gif"
    },
    moves: ["VINE_WHIP", "ABSORB"],
    drain: false
  },

  WEEPINBELL: {
    pkdx: 70,
    name: "Weepinbell",
    type: "grass",
    maxHp: 65,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/weepinbell.gif"
    },
    moves: ["VINE_WHIP", "ACID"],
    drain: false
  },

  VICTREEBEL: {
    pkdx: 71,
    name: "Victreebel",
    type: "grass",
    maxHp: 80,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/victreebel.gif"
    },
    moves: ["RAZOR_LEAF", "SLAM"],
    drain: false
  },

  TENTACOOL: {
    pkdx: 72,
    name: "Tentacool",
    type: "water",
    maxHp: 40,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/tentacool.gif"
    },
    moves: ["WATER_GUN", "ACID"],
    drain: false
  },

  TENTACRUEL: {
    pkdx: 73,
    name: "Tentacruel",
    type: "water",
    maxHp: 80,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/tentacruel.gif"
    },
    moves: ["SURF", "ACID"],
    drain: false
  },

  GEODUDE: {
    pkdx: 74,
    name: "Geodude",
    type: "rock",
    maxHp: 40,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/geodude.gif"
    },
    moves: ["ROCK_THROW", "TACKLE"],
    drain: false
  },

  GRAVELER: {
    pkdx: 75,
    name: "Graveler",
    type: "rock",
    maxHp: 55,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/graveler.gif"
    },
    moves: ["ROCK_THROW", "EARTHQUAKE"],
    drain: false
  },
    GOLEM: {
    pkdx: 76,
    name: "Golem",
    type: "rock",
    maxHp: 80,
    attack: 80,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/golem.gif"
    },
    moves: ["EARTHQUAKE", "ROCK_SLIDE"],
    drain: false
  },

  PONYTA: {
    pkdx: 77,
    name: "Ponyta",
    type: "fire",
    maxHp: 50,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ponyta.gif"
    },
    moves: ["EMBER", "STOMP"],
    drain: false
  },

  RAPIDASH: {
    pkdx: 78,
    name: "Rapidash",
    type: "fire",
    maxHp: 65,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/rapidash.gif"
    },
    moves: ["FLAMETHROWER", "STOMP"],
    drain: false
  },

  SLOWPOKE: {
    pkdx: 79,
    name: "Slowpoke",
    type: "water",
    maxHp: 90,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/slowpoke.gif"
    },
    moves: ["WATER_GUN", "CONFUSION"],
    drain: false
  },

  SLOWBRO: {
    pkdx: 80,
    name: "Slowbro",
    type: "water",
    maxHp: 95,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/slowbro.gif"
    },
    moves: ["SURF", "CONFUSION"],
    drain: false
  },

  MAGNEMITE: {
    pkdx: 81,
    name: "Magnemite",
    type: "electric",
    maxHp: 40,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/magnemite.gif"
    },
    moves: ["THUNDERSHOCK", "TACKLE"],
    drain: false
  },

  MAGNETON: {
    pkdx: 82,
    name: "Magneton",
    type: "electric",
    maxHp: 65,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/magneton.gif"
    },
    moves: ["THUNDERBOLT", "SPARK"],
    drain: false
  },

  FARFETCHD: {
    pkdx: 83,
    name: "Farfetch’d",
    type: "normal",
    maxHp: 52,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/farfetchd.gif"
    },
    moves: ["SLASH", "LEER"],
    drain: false
  },

  DODUO: {
    pkdx: 84,
    name: "Doduo",
    type: "flying",
    maxHp: 45,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/doduo.gif"
    },
    moves: ["PECK", "FURY_ATTACK"],
    drain: false
  },

  DODRIO: {
    pkdx: 85,
    name: "Dodrio",
    type: "flying",
    maxHp: 60,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dodrio.gif"
    },
    moves: ["DRILL_PECK", "TRI_ATTACK"],
    drain: false
  },

  SEEL: {
    pkdx: 86,
    name: "Seel",
    type: "water",
    maxHp: 65,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/seel.gif"
    },
    moves: ["ICY_WIND", "HEADBUTT"],
    drain: false
  },

  DEWGONG: {
    pkdx: 87,
    name: "Dewgong",
    type: "water",
    maxHp: 90,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dewgong.gif"
    },
    moves: ["ICE_BEAM", "SURF"],
    drain: false
  },

  GRIMER: {
    pkdx: 88,
    name: "Grimer",
    type: "poison",
    maxHp: 80,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/grimer.gif"
    },
    moves: ["SLUDGE", "POUND"],
    drain: false
  },

  MUK: {
    pkdx: 89,
    name: "Muk",
    type: "poison",
    maxHp: 105,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/muk.gif"
    },
    moves: ["SLUDGE", "MINIMIZE"],
    drain: false
  },

  SHELLDER: {
    pkdx: 90,
    name: "Shellder",
    type: "water",
    maxHp: 30,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/shellder.gif"
    },
    moves: ["ICY_WIND", "CLAMP"],
    drain: false
  },

  CLOYSTER: {
    pkdx: 91,
    name: "Cloyster",
    type: "water",
    maxHp: 50,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/cloyster.gif"
    },
    moves: ["ICE_BEAM", "CLAMP"],
    drain: false
  },

  GASTLY: {
    pkdx: 92,
    name: "Gastly",
    type: "ghost",
    maxHp: 30,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gastly.gif"
    },
    moves: ["LICK", "CONFUSE_RAY"],
    drain: false
  },

  HAUNTER: {
    pkdx: 93,
    name: "Haunter",
    type: "ghost",
    maxHp: 45,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/haunter.gif"
    },
    moves: ["SHADOW_BALL", "CONFUSE_RAY"],
    drain: false
  },

  GENGAR: {
    pkdx: 94,
    name: "Gengar",
    type: "ghost",
    maxHp: 60,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gengar.gif"
    },
    moves: ["SHADOW_BALL", "DREAM_EATER"],
    drain: false
  },

  ONIX: {
    pkdx: 95,
    name: "Onix",
    type: "rock",
    maxHp: 35,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/onix.gif"
    },
    moves: ["ROCK_THROW", "BIND"],
    drain: false
  },

  DROWZEE: {
    pkdx: 96,
    name: "Drowzee",
    type: "psychic",
    maxHp: 60,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/drowzee.gif"
    },
    moves: ["CONFUSION", "HYPNOSIS"],
    drain: false
  },

  HYPNO: {
    pkdx: 97,
    name: "Hypno",
    type: "psychic",
    maxHp: 85,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/hypno.gif"
    },
    moves: ["PSYCHIC", "HYPNOSIS"],
    drain: false
  },

  KRABBY: {
    pkdx: 98,
    name: "Krabby",
    type: "water",
    maxHp: 30,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/krabby.gif"
    },
    moves: ["BUBBLE", "VICE_GRIP"],
    drain: false
  },

  KINGLER: {
    pkdx: 99,
    name: "Kingler",
    type: "water",
    maxHp: 55,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kingler.gif"
    },
    moves: ["CRABHAMMER", "VICE_GRIP"],
    drain: false
  },

  VOLTORB: {
    pkdx: 100,
    name: "Voltorb",
    type: "electric",
    maxHp: 40,
    attack: 30,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/voltorb.gif"
    },
    moves: ["SPARK", "TACKLE"],
    drain: false
  },

  ELECTRODE: {
    pkdx: 101,
    name: "Electrode",
    type: "electric",
    maxHp: 60,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/electrode.gif"
    },
    moves: ["THUNDERBOLT", "SELF_DESTRUCT"],
    drain: false
  },

  EXEGGCUTE: {
    pkdx: 102,
    name: "Exeggcute",
    type: "grass",
    maxHp: 60,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/exeggcute.gif"
    },
    moves: ["CONFUSION", "ABSORB"],
    drain: false
  },

  EXEGGUTOR: {
    pkdx: 103,
    name: "Exeggutor",
    type: "grass",
    maxHp: 95,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/exeggutor.gif"
    },
    moves: ["PSYCHIC", "SOLAR_BEAM"],
    drain: false
  },

  CUBONE: {
    pkdx: 104,
    name: "Cubone",
    type: "ground",
    maxHp: 50,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/cubone.gif"
    },
    moves: ["BONE_CLUB", "HEADBUTT"],
    drain: false
  },

  MAROWAK: {
    pkdx: 105,
    name: "Marowak",
    type: "ground",
    maxHp: 60,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/marowak.gif"
    },
    moves: ["BONE_CLUB", "EARTHQUAKE"],
    drain: false
  },

  HITMONLEE: {
    pkdx: 106,
    name: "Hitmonlee",
    type: "fighting",
    maxHp: 50,
    attack: 75,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/hitmonlee.gif"
    },
    moves: ["HI_JUMP_KICK", "DOUBLE_KICK"],
    drain: false
  },

  HITMONCHAN: {
    pkdx: 107,
    name: "Hitmonchan",
    type: "fighting",
    maxHp: 50,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/hitmonchan.gif"
    },
    moves: ["MACH_PUNCH", "ICE_PUNCH"],
    drain: false
  },

  LICKITUNG: {
    pkdx: 108,
    name: "Lickitung",
    type: "normal",
    maxHp: 90,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/lickitung.gif"
    },
    moves: ["LICK", "BODY_SLAM"],
    drain: false
  },

  KOFFING: {
    pkdx: 109,
    name: "Koffing",
    type: "poison",
    maxHp: 40,
    attack: 35,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/koffing.gif"
    },
    moves: ["SMOG", "TACKLE"],
    drain: false
  },

  WEEZING: {
    pkdx: 110,
    name: "Weezing",
    type: "poison",
    maxHp: 65,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/weezing.gif"
    },
    moves: ["SLUDGE", "EXPLOSION"],
    drain: false
  },

  RHYHORN: {
    pkdx: 111,
    name: "Rhyhorn",
    type: "rock",
    maxHp: 80,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/rhyhorn.gif"
    },
    moves: ["HORN_ATTACK", "STOMP"],
    drain: false
  },

  RHYDON: {
    pkdx: 112,
    name: "Rhydon",
    type: "rock",
    maxHp: 105,
    attack: 80,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/rhydon.gif"
    },
    moves: ["EARTHQUAKE", "MEGAHORN"],
    drain: false
  },

  CHANSEY: {
    pkdx: 113,
    name: "Chansey",
    type: "normal",
    maxHp: 250,
    attack: 20,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/chansey.gif"
    },
    moves: ["SOFT_BOILED", "POUND"],
    drain: false
  },

  TANGELA: {
    pkdx: 114,
    name: "Tangela",
    type: "grass",
    maxHp: 65,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/tangela.gif"
    },
    moves: ["VINE_WHIP", "ABSORB"],
    drain: false
  },

  KANGASKHAN: {
    pkdx: 115,
    name: "Kangaskhan",
    type: "normal",
    maxHp: 105,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kangaskhan.gif"
    },
    moves: ["COMET_PUNCH", "BITE"],
    drain: false
  },

  HORSEA: {
    pkdx: 116,
    name: "Horsea",
    type: "water",
    maxHp: 30,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/horsea.gif"
    },
    moves: ["WATER_GUN", "SMOKESCREEN"],
    drain: false
  },

  SEADRA: {
    pkdx: 117,
    name: "Seadra",
    type: "water",
    maxHp: 55,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/seadra.gif"
    },
    moves: ["SURF", "SMOKESCREEN"],
    drain: false
  },

  GOLDEEN: {
    pkdx: 118,
    name: "Goldeen",
    type: "water",
    maxHp: 45,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/goldeen.gif"
    },
    moves: ["HORN_ATTACK", "WATER_GUN"],
    drain: false
  },

  SEAKING: {
    pkdx: 119,
    name: "Seaking",
    type: "water",
    maxHp: 80,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/seaking.gif"
    },
    moves: ["MEGAHORN", "SURF"],
    drain: false
  },

  STARYU: {
    pkdx: 120,
    name: "Staryu",
    type: "water",
    maxHp: 30,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/staryu.gif"
    },
    moves: ["WATER_GUN", "RAPID_SPIN"],
    drain: false
  },

  STARMIE: {
    pkdx: 121,
    name: "Starmie",
    type: "water",
    maxHp: 60,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/starmie.gif"
    },
    moves: ["SURF", "PSYCHIC"],
    drain: false
  },

  MR_MIME: {
    pkdx: 122,
    name: "Mr. Mime",
    type: "psychic",
    maxHp: 40,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mr-mime.gif"
    },
    moves: ["PSYCHIC", "BARRIER"],
    drain: false
  },

  SCYTHER: {
    pkdx: 123,
    name: "Scyther",
    type: "bug",
    maxHp: 70,
    attack: 75,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/scyther.gif"
    },
    moves: ["SLASH", "FURY_CUTTER"],
    drain: false
  },

  JYNX: {
    pkdx: 124,
    name: "Jynx",
    type: "psychic",
    maxHp: 65,
    attack: 50,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/jynx.gif"
    },
    moves: ["ICE_BEAM", "PSYCHIC"],
    drain: false
  },

  ELECTABUZZ: {
    pkdx: 125,
    name: "Electabuzz",
    type: "electric",
    maxHp: 65,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/electabuzz.gif"
    },
    moves: ["THUNDERPUNCH", "SPARK"],
    drain: false
  },
  MAGMAR: {
    pkdx: 126,
    name: "Magmar",
    type: "fire",
    maxHp: 65,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/magmar.gif"
    },
    moves: ["EMBER", "FIRE_PUNCH"],
    drain: false
  },

  PINSIR: {
    pkdx: 127,
    name: "Pinsir",
    type: "bug",
    maxHp: 65,
    attack: 75,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pinsir.gif"
    },
    moves: ["VICE_GRIP", "SUBMISSION"],
    drain: false
  },

  TAUROS: {
    pkdx: 128,
    name: "Tauros",
    type: "normal",
    maxHp: 75,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/tauros.gif"
    },
    moves: ["TAKE_DOWN", "HEADBUTT"],
    drain: false
  },

  MAGIKARP: {
    pkdx: 129,
    name: "Magikarp",
    type: "water",
    maxHp: 20,
    attack: 10,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/magikarp.gif"
    },
    moves: ["SPLASH"],
    drain: false
  },

  GYARADOS: {
    pkdx: 130,
    name: "Gyarados",
    type: "water",
    maxHp: 95,
    attack: 80,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gyarados.gif"
    },
    moves: ["SURF", "BITE"],
    drain: false
  },

  LAPRAS: {
    pkdx: 131,
    name: "Lapras",
    type: "water",
    maxHp: 130,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/lapras.gif"
    },
    moves: ["ICE_BEAM", "SURF"],
    drain: false
  },

  DITTO: {
    pkdx: 132,
    name: "Ditto",
    type: "normal",
    maxHp: 48,
    attack: 48,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ditto.gif"
    },
    moves: ["TRANSFORM"],
    drain: false
  },

  EEVEE: {
    pkdx: 133,
    name: "Eevee",
    type: "normal",
    maxHp: 55,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/eevee.gif"
    },
    moves: ["QUICK_ATTACK", "BITE"],
    drain: false
  },

  VAPOREON: {
    pkdx: 134,
    name: "Vaporeon",
    type: "water",
    maxHp: 130,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/vaporeon.gif"
    },
    moves: ["SURF", "ICE_BEAM"],
    drain: false
  },

  JOLTEON: {
    pkdx: 135,
    name: "Jolteon",
    type: "electric",
    maxHp: 65,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/jolteon.gif"
    },
    moves: ["THUNDERBOLT", "QUICK_ATTACK"],
    drain: false
  },

  FLAREON: {
    pkdx: 136,
    name: "Flareon",
    type: "fire",
    maxHp: 65,
    attack: 80,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/flareon.gif"
    },
    moves: ["FLAMETHROWER", "BITE"],
    drain: false
  },

  PORYGON: {
    pkdx: 137,
    name: "Porygon",
    type: "normal",
    maxHp: 65,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/porygon.gif"
    },
    moves: ["TRI_ATTACK"],
    drain: false
  },

  OMANYTE: {
    pkdx: 138,
    name: "Omanyte",
    type: "rock",
    maxHp: 35,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/omanyte.gif"
    },
    moves: ["WATER_GUN", "WITHDRAW"],
    drain: false
  },

  OMASTAR: {
    pkdx: 139,
    name: "Omastar",
    type: "rock",
    maxHp: 70,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/omastar.gif"
    },
    moves: ["SURF", "WITHDRAW"],
    drain: false
  },

  KABUTO: {
    pkdx: 140,
    name: "Kabuto",
    type: "rock",
    maxHp: 30,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kabuto.gif"
    },
    moves: ["SCRATCH", "HARDEN"],
    drain: false
  },

  KABUTOPS: {
    pkdx: 141,
    name: "Kabutops",
    type: "rock",
    maxHp: 60,
    attack: 75,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/kabutops.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kabutops.gif"
    },
    moves: ["SLASH", "SURF"],
    drain: false
  },

  AERODACTYL: {
    pkdx: 142,
    name: "Aerodactyl",
    type: "rock",
    maxHp: 80,
    attack: 75,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/aerodactyl.gif"
    },
    moves: ["WING_ATTACK", "BITE"],
    drain: false
  },

  SNORLAX: {
    pkdx: 143,
    name: "Snorlax",
    type: "normal",
    maxHp: 160,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/snorlax.gif"
    },
    moves: ["BODY_SLAM", "REST"],
    drain: false
  },

  ARTICUNO: {
    pkdx: 144,
    name: "Articuno",
    type: "ice",
    maxHp: 90,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/articuno.gif"
    },
    moves: ["ICE_BEAM", "GUST"],
    drain: false
  },

  ZAPDOS: {
    pkdx: 145,
    name: "Zapdos",
    type: "electric",
    maxHp: 90,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/zapdos.gif"
    },
    moves: ["THUNDERBOLT", "DRILL_PECK"],
    drain: false
  },

  MOLTRES: {
    pkdx: 146,
    name: "Moltres",
    type: "fire",
    maxHp: 90,
    attack: 70,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/moltres.gif"
    },
    moves: ["FLAMETHROWER", "WING_ATTACK"],
    drain: false
  }, */

  DRATINI: {
    pkdx: 147,
    name: "Dratini",
    type: "dragon",
    maxHp: 41,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dratini.gif"
    },
    moves: ["DRAGON_RAGE", "WRAP"],
    drain: false
  },

  DRAGONAIR: {
    pkdx: 148,
    name: "Dragonair",
    type: "dragon",
    maxHp: 61,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dragonair.gif"
    },
    moves: ["DRAGON_RAGE", "SURF"],
    drain: false
  },

  DRAGONITE: {
    pkdx: 149,
    name: "Dragonite",
    type: "dragon",
    maxHp: 91,
    attack: 80,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dragonite.gif"
    },
    moves: ["OUTRAGE", "FLY"],
    drain: false
  },

  MEWTWO: {
    pkdx: 150,
    name: "Mewtwo",
    type: "psychic",
    maxHp: 106,
    attack: 90,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mewtwo.gif"
    },
    moves: ["PSYCHIC", "RECOVER"],
    drain: false
  },

  MEW: {
    pkdx: 151,
    name: "Mew",
    type: "psychic",
    maxHp: 100,
    attack: 75,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mew.gif"
    },
    moves: ["PSYCHIC", "TRANSFORM"],
    drain: false
  }




};