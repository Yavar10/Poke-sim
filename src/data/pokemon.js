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
  },
  CATERPIE: {
  name: "Caterpie",
  type: "bug",
  maxHp: 40,
  attack: 15,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/caterpie.gif"
  },
  moves: ["TACKLE"],
  drain: false
},

METAPOD: {
  name: "Metapod",
  type: "bug",
  maxHp: 45,
  attack: 10,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/metapod.gif"
  },
  moves: ["TACKLE"],
  drain: false
},

BUTTERFREE: {
  name: "Butterfree",
  type: "bug",
  maxHp: 60,
  attack: 40,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/butterfree.gif"
  },
  moves: ["GUST", "GROWL"],
  drain: false
},

WEEDLE: {
  name: "Weedle",
  type: "bug",
  maxHp: 40,
  attack: 15,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/weedle.gif"
  },
  moves: ["TACKLE"],
  drain: false
},

KAKUNA: {
  name: "Kakuna",
  type: "bug",
  maxHp: 45,
  attack: 10,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kakuna.gif"
  },
  moves: ["TACKLE"],
  drain: false
},

BEEDRILL: {
  name: "Beedrill",
  type: "bug",
  maxHp: 65,
  attack: 50,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/beedrill.gif"
  },
  moves: ["SLASH", "BITE"],
  drain: false
},

PIDGEY: {
  name: "Pidgey",
  type: "flying",
  maxHp: 45,
  attack: 25,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgey.gif"
  },
  moves: ["TACKLE", "GUST"],
  drain: false
},

PIDGEOTTO: {
  name: "Pidgeotto",
  type: "flying",
  maxHp: 63,
  attack: 38,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgeotto.gif"
  },
  moves: ["GUST", "QUICK_ATTACK"],
  drain: false
},

PIDGEOT: {
  name: "Pidgeot",
  type: "flying",
  maxHp: 83,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgeot.gif"
  },
  moves: ["GUST", "QUICK_ATTACK", "SLASH"],
  drain: false
},

RATTATA: {
  name: "Rattata",
  type: "normal",
  maxHp: 45,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/rattata.gif"
  },
  moves: ["TACKLE", "QUICK_ATTACK"],
  drain: false
},

RATICATE: {
  name: "Raticate",
  type: "normal",
  maxHp: 70,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/raticate.gif"
  },
  moves: ["BITE", "SLASH", "QUICK_ATTACK"],
  drain: false
},
SPEAROW: {
  name: "Spearow",
  type: "flying",
  maxHp: 40,
  attack: 30,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/spearow.gif"
  },
  moves: ["GUST", "QUICK_ATTACK"],
  drain: false
},

FEAROW: {
  name: "Fearow",
  type: "flying",
  maxHp: 70,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/fearow.gif"
  },
  moves: ["WING_ATTACK", "SLASH", "QUICK_ATTACK"],
  drain: false
},

EKANS: {
  name: "Ekans",
  type: "poison",
  maxHp: 45,
  attack: 40,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ekans.gif"
  },
  moves: ["BITE", "POISON_STING"],
  drain: false
},

ARBOK: {
  name: "Arbok",
  type: "poison",
  maxHp: 75,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/arbok.gif"
  },
  moves: ["BITE", "SLUDGE", "SLASH"],
  drain: false
},

SANDSHREW: {
  name: "Sandshrew",
  type: "ground",
  maxHp: 50,
  attack: 45,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/sandshrew.gif"
  },
  moves: ["SCRATCH", "DIG"],
  drain: false
},

SANDSLASH: {
  name: "Sandslash",
  type: "ground",
  maxHp: 75,
  attack: 65,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/sandslash.gif"
  },
  moves: ["SLASH", "DIG", "EARTHQUAKE"],
  drain: false
},

NIDORAN_F: {
  name: "Nidoran♀",
  type: "poison",
  maxHp: 55,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoran-f.gif"
  },
  moves: ["TACKLE", "POISON_STING"],
  drain: false
},

NIDORINA: {
  name: "Nidorina",
  type: "poison",
  maxHp: 70,
  attack: 45,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidorina.gif"
  },
  moves: ["BITE", "POISON_STING"],
  drain: false
},

NIDOQUEEN: {
  name: "Nidoqueen",
  type: "poison",
  maxHp: 90,
  attack: 65,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoqueen.gif"
  },
  moves: ["SLUDGE", "BODY_SLAM", "EARTHQUAKE"],
  drain: false
},

NIDORAN_M: {
  name: "Nidoran♂",
  type: "poison",
  maxHp: 55,
  attack: 40,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoran-m.gif"
  },
  moves: ["TACKLE", "POISON_STING"],
  drain: false
},

NIDORINO: {
  name: "Nidorino",
  type: "poison",
  maxHp: 70,
  attack: 50,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidorino.gif"
  },
  moves: ["BITE", "POISON_STING"],
  drain: false
},

NIDOKING: {
  name: "Nidoking",
  type: "poison",
  maxHp: 92,
  attack: 70,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoking.gif"
  },
  moves: ["SLUDGE", "EARTHQUAKE", "BODY_SLAM"],
  drain: false
}
,
CLEFAIRY: {
  name: "Clefairy",
  type: "normal",
  maxHp: 60,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/clefairy.gif"
  },
  moves: ["TACKLE", "BODY_SLAM"],
  drain: false
},

CLEFABLE: {
  name: "Clefable",
  type: "normal",
  maxHp: 90,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/clefable.gif"
  },
  moves: ["BODY_SLAM", "SLASH"],
  drain: false
},

VULPIX: {
  name: "Vulpix",
  type: "fire",
  maxHp: 45,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/vulpix.gif"
  },
  moves: ["EMBER", "QUICK_ATTACK"],
  drain: false
},

NINETALES: {
  name: "Ninetales",
  type: "fire",
  maxHp: 75,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ninetales.gif"
  },
  moves: ["FLAMETHROWER", "SLASH"],
  drain: false
},

JIGGLYPUFF: {
  name: "Jigglypuff",
  type: "normal",
  maxHp: 70,
  attack: 30,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/jigglypuff.gif"
  },
  moves: ["TACKLE", "BODY_SLAM"],
  drain: false
},

WIGGLYTUFF: {
  name: "Wigglytuff",
  type: "normal",
  maxHp: 95,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/wigglytuff.gif"
  },
  moves: ["BODY_SLAM", "SLASH"],
  drain: false
},

ZUBAT: {
  name: "Zubat",
  type: "poison",
  maxHp: 45,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/zubat.gif"
  },
  moves: ["BITE", "POISON_STING"],
  drain: false
},

GOLBAT: {
  name: "Golbat",
  type: "poison",
  maxHp: 75,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/golbat.gif"
  },
  moves: ["BITE", "SLUDGE", "WING_ATTACK"],
  drain: false
},

ODDISH: {
  name: "Oddish",
  type: "grass",
  maxHp: 45,
  attack: 30,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/oddish.gif"
  },
  moves: ["VINE_WHIP", "LEECH_SEED"],
  drain: false
},

GLOOM: {
  name: "Gloom",
  type: "grass",
  maxHp: 60,
  attack: 40,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gloom.gif"
  },
  moves: ["RAZOR_LEAF", "LEECH_SEED"],
  drain: false
},

VILEPLUME: {
  name: "Vileplume",
  type: "grass",
  maxHp: 80,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/vileplume.gif"
  },
  moves: ["SOLAR_BEAM", "RAZOR_LEAF"],
  drain: false
},

PARAS: {
  name: "Paras",
  type: "bug",
  maxHp: 45,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/paras.gif"
  },
  moves: ["BUG_BITE", "SCRATCH"],
  drain: false
},

PARASECT: {
  name: "Parasect",
  type: "bug",
  maxHp: 70,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/parasect.gif"
  },
  moves: ["BUG_BITE", "SLASH"],
  drain: false
},

VENONAT: {
  name: "Venonat",
  type: "bug",
  maxHp: 60,
  attack: 40,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venonat.gif"
  },
  moves: ["BUG_BITE", "CONFUSION"],
  drain: false
},

VENOMOTH: {
  name: "Venomoth",
  type: "bug",
  maxHp: 75,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venomoth.gif"
  },
  moves: ["PSYBEAM", "BUG_BITE"],
  drain: false
},

DIGLETT: {
  name: "Diglett",
  type: "ground",
  maxHp: 40,
  attack: 40,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/diglett.gif"
  },
  moves: ["SCRATCH", "DIG"],
  drain: false
},

DUGTRIO: {
  name: "Dugtrio",
  type: "ground",
  maxHp: 70,
  attack: 65,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dugtrio.gif"
  },
  moves: ["DIG", "EARTHQUAKE"],
  drain: false
},

MEOWTH: {
  name: "Meowth",
  type: "normal",
  maxHp: 45,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/meowth.gif"
  },
  moves: ["SCRATCH", "BITE"],
  drain: false
},

PERSIAN: {
  name: "Persian",
  type: "normal",
  maxHp: 70,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/persian.gif"
  },
  moves: ["SLASH", "BITE"],
  drain: false
},

PSYDUCK: {
  name: "Psyduck",
  type: "water",
  maxHp: 55,
  attack: 40,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/psyduck.gif"
  },
  moves: ["WATER_GUN", "CONFUSION"],
  drain: false
}
,
GOLDUCK: {
  name: "Golduck",
  type: "water",
  maxHp: 80,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/golduck.gif"
  },
  moves: ["WATER_GUN", "CONFUSION", "SURF"],
  drain: false
},

MANKEY: {
  name: "Mankey",
  type: "fighting",
  maxHp: 45,
  attack: 45,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mankey.gif"
  },
  moves: ["KARATE_CHOP", "SCRATCH"],
  drain: false
},

PRIMEAPE: {
  name: "Primeape",
  type: "fighting",
  maxHp: 70,
  attack: 65,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/primeape.gif"
  },
  moves: ["KARATE_CHOP", "SUBMISSION", "SLASH"],
  drain: false
},

GROWLITHE: {
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
  name: "Arcanine",
  type: "fire",
  maxHp: 90,
  attack: 70,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/arcanine.gif"
  },
  moves: ["FLAMETHROWER", "BITE", "SLASH"],
  drain: false
},

POLIWAG: {
  name: "Poliwag",
  type: "water",
  maxHp: 45,
  attack: 30,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/poliwag.gif"
  },
  moves: ["WATER_GUN", "BUBBLE"],
  drain: false
},

POLIWHIRL: {
  name: "Poliwhirl",
  type: "water",
  maxHp: 65,
  attack: 45,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/poliwhirl.gif"
  },
  moves: ["WATER_GUN", "BODY_SLAM"],
  drain: false
},

POLIWRATH: {
  name: "Poliwrath",
  type: "fighting",
  maxHp: 90,
  attack: 65,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/poliwrath.gif"
  },
  moves: ["SUBMISSION", "SURF", "BODY_SLAM"],
  drain: false
},

ABRA: {
  name: "Abra",
  type: "psychic",
  maxHp: 35,
  attack: 20,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/abra.gif"
  },
  moves: ["CONFUSION"],
  drain: false
},

KADABRA: {
  name: "Kadabra",
  type: "psychic",
  maxHp: 55,
  attack: 45,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kadabra.gif"
  },
  moves: ["CONFUSION", "PSYBEAM"],
  drain: false
},

ALAKAZAM: {
  name: "Alakazam",
  type: "psychic",
  maxHp: 75,
  attack: 65,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/alakazam.gif"
  },
  moves: ["PSYCHIC", "PSYBEAM"],
  drain: false
},

MACHOP: {
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
  name: "Machoke",
  type: "fighting",
  maxHp: 85,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/machoke.gif"
  },
  moves: ["KARATE_CHOP", "SUBMISSION"],
  drain: false
},

MACHAMP: {
  name: "Machamp",
  type: "fighting",
  maxHp: 95,
  attack: 75,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/machamp.gif"
  },
  moves: ["SUBMISSION", "BODY_SLAM"],
  drain: false
},

BELLSPROUT: {
  name: "Bellsprout",
  type: "grass",
  maxHp: 50,
  attack: 40,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bellsprout.gif"
  },
  moves: ["VINE_WHIP", "LEECH_SEED"],
  drain: false
},

WEEPINBELL: {
  name: "Weepinbell",
  type: "grass",
  maxHp: 65,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/weepinbell.gif"
  },
  moves: ["RAZOR_LEAF", "LEECH_SEED"],
  drain: false
},

VICTREEBEL: {
  name: "Victreebel",
  type: "grass",
  maxHp: 85,
  attack: 70,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/victreebel.gif"
  },
  moves: ["SOLAR_BEAM", "RAZOR_LEAF"],
  drain: false
}
,
TENTACOOL: {
  name: "Tentacool",
  type: "water",
  maxHp: 45,
  attack: 30,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/tentacool.gif"
  },
  moves: ["WATER_GUN", "BUBBLE"],
  drain: false
},

TENTACRUEL: {
  name: "Tentacruel",
  type: "water",
  maxHp: 80,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/tentacruel.gif"
  },
  moves: ["SURF", "BUBBLE"],
  drain: false
},

GEODUDE: {
  name: "Geodude",
  type: "rock",
  maxHp: 50,
  attack: 45,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/geodude.gif"
  },
  moves: ["TACKLE", "ROCK_THROW"],
  drain: false
},

GRAVELER: {
  name: "Graveler",
  type: "rock",
  maxHp: 70,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/graveler.gif"
  },
  moves: ["ROCK_THROW", "BODY_SLAM"],
  drain: false
},

GOLEM: {
  name: "Golem",
  type: "rock",
  maxHp: 90,
  attack: 75,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/golem.gif"
  },
  moves: ["ROCK_THROW", "BODY_SLAM"],
  drain: false
},

PONYTA: {
  name: "Ponyta",
  type: "fire",
  maxHp: 50,
  attack: 45,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ponyta.gif"
  },
  moves: ["EMBER", "FLAME_BURST"],
  drain: false
},

RAPIDASH: {
  name: "Rapidash",
  type: "fire",
  maxHp: 75,
  attack: 65,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/rapidash.gif"
  },
  moves: ["FLAMETHROWER", "SLASH"],
  drain: false
},

SLOWPOKE: {
  name: "Slowpoke",
  type: "psychic",
  maxHp: 70,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/slowpoke.gif"
  },
  moves: ["CONFUSION", "WATER_GUN"],
  drain: false
},

SLOWBRO: {
  name: "Slowbro",
  type: "psychic",
  maxHp: 95,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/slowbro.gif"
  },
  moves: ["PSYCHIC", "SURF"],
  drain: false
},

MAGNEMITE: {
  name: "Magnemite",
  type: "electric",
  maxHp: 45,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/magnemite.gif"
  },
  moves: ["THUNDERSHOCK"],
  drain: false
},

MAGNETON: {
  name: "Magneton",
  type: "electric",
  maxHp: 70,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/magneton.gif"
  },
  moves: ["THUNDERBOLT"],
  drain: false
},

GASTLY: {
  name: "Gastly",
  type: "ghost",
  maxHp: 40,
  attack: 35,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gastly.gif"
  },
  moves: ["LICK", "CONFUSION"],
  drain: false
},

HAUNTER: {
  name: "Haunter",
  type: "ghost",
  maxHp: 60,
  attack: 55,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/haunter.gif"
  },
  moves: ["LICK", "SHADOW_BALL"],
  drain: false
},

GENGAR: {
  name: "Gengar",
  type: "ghost",
  maxHp: 80,
  attack: 70,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gengar.gif"
  },
  moves: ["SHADOW_BALL", "DREAM_EATER"],
  drain: false
},

DRATINI: {
  name: "Dratini",
  type: "dragon",
  maxHp: 55,
  attack: 45,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dratini.gif"
  },
  moves: ["DRAGON_RAGE"],
  drain: false
},

DRAGONAIR: {
  name: "Dragonair",
  type: "dragon",
  maxHp: 75,
  attack: 60,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dragonair.gif"
  },
  moves: ["DRAGON_RAGE", "SLASH"],
  drain: false
},

DRAGONITE: {
  name: "Dragonite",
  type: "dragon",
  maxHp: 100,
  attack: 80,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dragonite.gif"
  },
  moves: ["DRAGON_RAGE", "BODY_SLAM"],
  drain: false
},

MEWTWO: {
  name: "Mewtwo",
  type: "psychic",
  maxHp: 110,
  attack: 90,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mewtwo.gif"
  },
  moves: ["PSYCHIC", "SHADOW_BALL"],
  drain: false
},

MEW: {
  name: "Mew",
  type: "psychic",
  maxHp: 100,
  attack: 80,
  sprites: {
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mew.gif"
  },
  moves: ["PSYCHIC", "BODY_SLAM"],
  drain: false
}

};