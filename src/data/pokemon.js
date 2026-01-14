export const POKEMON = {

CHARIZARD: {
  serialnum: 1,
  name: "Charizard",
  type: ["fire","flying"],
  maxHp: 90,
  attack: 84,
  defence: 60,
  speed: 100,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif"
  },
  moves:["FLAMETHROWER","FLY","DRAGON_CLAW","SLASH"],
  drain:false,
  status:"normal"
},

BLASTOISE: {
  serialnum: 2,
  name: "Blastoise",
  type: ["water"],
  maxHp: 95,
  attack: 83,
  defence: 100,
  speed: 78,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif"
  },
  moves:["SURF","ICE_BEAM","BITE","SKULL_BASH"],
  drain:false,
  status:"normal"
},

VENUSAUR: {
  serialnum: 3,
  name: "Venusaur",
  type: ["grass","poison"],
  maxHp: 95,
  attack: 82,
  defence: 83,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur.gif"
  },
  moves:["GIGA_DRAIN","SLUDGE_BOMB","TOXIC","LEECH_SEED"],
  drain:false,
  status:"normal"
},

PIKACHU: {
  serialnum: 4,
  name: "Pikachu",
  type: ["electric"],
  maxHp: 70,
  attack: 55,
  defence: 40,
  speed: 110,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif"
  },
  moves:["THUNDERBOLT","QUICK_ATTACK","IRON_TAIL","VOLT_TACKLE"],
  drain:false,
  status:"normal"
},

GENGAR: {
  serialnum: 5,
  name: "Gengar",
  type: ["ghost","poison"],
  maxHp: 85,
  attack: 65,
  defence: 60,
  speed: 110,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/gengar.gif"
  },
  moves:["SHADOW_BALL","SLUDGE_BOMB","DREAM_EATER","HYPNOSIS"],
  drain:false,
  status:"normal"
},

ALAKAZAM: {
  serialnum: 6,
  name: "Alakazam",
  type: ["psychic"],
  maxHp: 80,
  attack: 50,
  defence: 45,
  speed: 120,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/alakazam.gif"
  },
  moves:["PSYCHIC","CALM_MIND","RECOVER","SHADOW_BALL"],
  drain:false,
  status:"normal"
},

MACHAMP: {
  serialnum: 7,
  name: "Machamp",
  type: ["fighting"],
  maxHp: 95,
  attack: 130,
  defence: 80,
  speed: 55,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/machamp.gif"
  },
  moves:["DYNAMIC_PUNCH","CROSS_CHOP","STONE_EDGE","BULK_UP"],
  drain:false,
  status:"normal"
},

GYARADOS: {
  serialnum: 8,
  name: "Gyarados",
  type: ["water","flying"],
  maxHp: 100,
  attack: 125,
  defence: 80,
  speed: 81,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/gyarados.gif"
  },
  moves:["WATERFALL","CRUNCH","DRAGON_DANCE","ICE_FANG"],
  drain:false,
  status:"normal"
},

SNORLAX: {
  serialnum: 9,
  name: "Snorlax",
  type: ["normal"],
  maxHp: 160,
  attack: 110,
  defence: 65,
  speed: 30,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/snorlax.gif"
  },
  moves:["BODY_SLAM","REST","CRUNCH","HEAVY_SLAM"],
  drain:false,
  status:"normal"
},

DRAGONITE: {
  serialnum: 10,
  name: "Dragonite",
  type: ["dragon","flying"],
  maxHp: 91,
  attack: 134,
  defence: 95,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/dragonite.gif"
  },
  moves:["OUTRAGE","FLY","DRAGON_CLAW","EXTREME_SPEED"],
  drain:false,
  status:"normal"
},

ARCANINE: {
  serialnum: 11,
  name: "Arcanine",
  type: ["fire"],
  maxHp: 100,
  attack: 110,
  defence: 80,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/arcanine.gif"
  },
  moves:["FLAMETHROWER","EXTREME_SPEED","CRUNCH","ICE_FANG"],
  drain:false,
  status:"normal"
},

LAPRAS: {
  serialnum: 12,
  name: "Lapras",
  type: ["water","ice"],
  maxHp: 130,
  attack: 85,
  defence: 80,
  speed: 60,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/lapras.gif"
  },
  moves:["SURF","ICE_BEAM","BODY_SLAM","REST"],
  drain:false,
  status:"normal"
},

AERODACTYL: {
  serialnum: 13,
  name: "Aerodactyl",
  type: ["rock","flying"],
  maxHp: 80,
  attack: 105,
  defence: 65,
  speed: 130,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/aerodactyl.gif"
  },
  moves:["ROCK_SLIDE","AEROBLAST","CRUNCH","AGILITY"],
  drain:false,
  status:"normal"
},

EEVEE: {
  serialnum: 14,
  name: "Eevee",
  type: ["normal"],
  maxHp: 70,
  attack: 55,
  defence: 50,
  speed: 55,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/eevee.gif"
  },
  moves:["QUICK_ATTACK","BITE","REST","AGILITY"],
  drain:false,
  status:"normal"
},

VAPOREON: {
  serialnum: 15,
  name: "Vaporeon",
  type: ["water"],
  maxHp: 130,
  attack: 65,
  defence: 60,
  speed: 65,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/vaporeon.gif"
  },
  moves:["SURF","ICE_BEAM","AQUA_RING","REST"],
  drain:false,
  status:"normal"
},

JOLTEON: {
  serialnum: 16,
  name: "Jolteon",
  type: ["electric"],
  maxHp: 80,
  attack: 65,
  defence: 60,
  speed: 130,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/jolteon.gif"
  },
  moves:["THUNDERBOLT","THUNDER_WAVE","QUICK_ATTACK","AGILITY"],
  drain:false,
  status:"normal"
},

FLAREON: {
  serialnum: 17,
  name: "Flareon",
  type: ["fire"],
  maxHp: 85,
  attack: 130,
  defence: 60,
  speed: 65,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/flareon.gif"
  },
  moves:["FLAMETHROWER","FIRE_FANG","SUPERPOWER","REST"],
  drain:false,
  status:"normal"
},

ESPEON: {
  serialnum: 18,
  name: "Espeon",
  type: ["psychic"],
  maxHp: 85,
  attack: 65,
  defence: 60,
  speed: 110,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/espeon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/espeon.gif"
  },
  moves:["PSYCHIC","PSYSHOCK","CALM_MIND","MORNING_SUN"],
  drain:false,
  status:"normal"
},

UMBREON: {
  serialnum: 19,
  name: "Umbreon",
  type: ["dark"],
  maxHp: 110,
  attack: 65,
  defence: 110,
  speed: 65,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/umbreon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/umbreon.gif"
  },
  moves:["DARK_PULSE","TOXIC","MOONLIGHT","CONFUSE_RAY"],
  drain:false,
  status:"normal"
},

LEAFEON: {
  serialnum: 20,
  name: "Leafeon",
  type: ["grass"],
  maxHp: 85,
  attack: 110,
  defence: 130,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/leafeon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/leafeon.gif"
  },
  moves:["LEAF_BLADE","SWORDS_DANCE","SYNTHESIS","X_SCISSOR"],
  drain:false,
  status:"normal"
},

GLACEON: {
  serialnum: 21,
  name: "Glaceon",
  type: ["ice"],
  maxHp: 85,
  attack: 60,
  defence: 110,
  speed: 65,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/glaceon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/glaceon.gif"
  },
  moves:["ICE_BEAM","ICE_SHARD","REST","BARRIER"],
  drain:false,
  status:"normal"
},

KINGDRA: {
  serialnum: 22,
  name: "Kingdra",
  type: ["water","dragon"],
  maxHp: 95,
  attack: 95,
  defence: 95,
  speed: 85,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/kingdra.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/kingdra.gif"
  },
  moves:["SURF","DRAGON_PULSE","ICE_BEAM","AGILITY"],
  drain:false,
  status:"normal"
},

MAGNEZONE: {
  serialnum: 23,
  name: "Magnezone",
  type: ["electric","steel"],
  maxHp: 90,
  attack: 70,
  defence: 115,
  speed: 60,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/magnezone.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/magnezone.gif"
  },
  moves:["THUNDERBOLT","FLASH_CANNON","SIGNAL_BEAM","THUNDER_WAVE"],
  drain:false,
  status:"normal"
},

MAMOSWINE: {
  serialnum: 24,
  name: "Mamoswine",
  type: ["ice","ground"],
  maxHp: 110,
  attack: 130,
  defence: 80,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/mamoswine.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/mamoswine.gif"
  },
  moves:["EARTHQUAKE","ICE_FANG","STONE_EDGE","SUPERPOWER"],
  drain:false,
  status:"normal"
},

LUCARIO: {
  serialnum: 25,
  name: "Lucario",
  type: ["fighting","steel"],
  maxHp: 85,
  attack: 110,
  defence: 70,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/lucario.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/lucario.gif"
  },
  moves:["AURA_SPHERE","CLOSE_COMBAT","METAL_CLAW","NASTY_PLOT"],
  drain:false,
  status:"normal"
},

SCYTHER: {
  serialnum: 26,
  name: "Scyther",
  type: ["bug","flying"],
  maxHp: 70,
  attack: 110,
  defence: 80,
  speed: 105,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/scyther.gif"
  },
  moves:["X_SCISSOR","AIR_SLASH","SWORDS_DANCE","U_TURN"],
  drain:false,
  status:"normal"
},

JYNX: {
  serialnum: 27,
  name: "Jynx",
  type: ["ice","psychic"],
  maxHp: 65,
  attack: 50,
  defence: 35,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/jynx.gif"
  },
  moves:["ICE_BEAM","PSYCHIC","BARRIER","CALM_MIND"],
  drain:false,
  status:"normal"
},

ELECTIVIRE: {
  serialnum: 28,
  name: "Electivire",
  type: ["electric"],
  maxHp: 95,
  attack: 123,
  defence: 67,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/electivire.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/electivire.gif"
  },
  moves:["THUNDERBOLT","ICE_PUNCH","EARTHQUAKE","CROSS_CHOP"],
  drain:false,
  status:"normal"
},

MAGMORTAR: {
  serialnum: 29,
  name: "Magmortar",
  type: ["fire"],
  maxHp: 95,
  attack: 95,
  defence: 67,
  speed: 83,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/magmortar.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/magmortar.gif"
  },
  moves:["FLAMETHROWER","FOCUS_BLAST","THUNDERBOLT","BULK_UP"],
  drain:false,
  status:"normal"
},

CROBAT: {
  serialnum: 30,
  name: "Crobat",
  type: ["poison","flying"],
  maxHp: 85,
  attack: 90,
  defence: 80,
  speed: 130,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/crobat.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/crobat.gif"
  },
  moves:["SLUDGE_BOMB","AIR_SLASH","CONFUSE_RAY","ROOST"],
  drain:false,
  status:"normal"
},

STEELIX: {
  serialnum: 31,
  name: "Steelix",
  type: ["steel","ground"],
  maxHp: 75,
  attack: 85,
  defence: 200,
  speed: 30,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/steelix.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/steelix.gif"
  },
  moves:["EARTHQUAKE","IRON_HEAD","ROCK_SLIDE","AUTOTOMIZE"],
  drain:false,
  status:"normal"
},

HOUNDOOM: {
  serialnum: 32,
  name: "Houndoom",
  type: ["dark","fire"],
  maxHp: 75,
  attack: 90,
  defence: 50,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/houndoom.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/houndoom.gif"
  },
  moves:["DARK_PULSE","FLAMETHROWER","NASTY_PLOT","SLUDGE_BOMB"],
  drain:false,
  status:"normal"
},

DONPHAN: {
  serialnum: 33,
  name: "Donphan",
  type: ["ground"],
  maxHp: 90,
  attack: 120,
  defence: 120,
  speed: 50,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/donphan.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/donphan.gif"
  },
  moves:["EARTHQUAKE","STONE_EDGE","ICE_SHARD","BULK_UP"],
  drain:false,
  status:"normal"
},

SKARMORY: {
  serialnum: 34,
  name: "Skarmory",
  type: ["steel","flying"],
  maxHp: 85,
  attack: 80,
  defence: 140,
  speed: 70,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/skarmory.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/skarmory.gif"
  },
  moves:["IRON_HEAD","AIR_SLASH","ROOST","TOXIC"],
  drain:false,
  status:"normal"
},

KINGLER: {
  serialnum: 35,
  name: "Kingler",
  type: ["water"],
  maxHp: 65,
  attack: 130,
  defence: 115,
  speed: 75,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/kingler.gif"
  },
  moves:["HYDROPUMP","WATERFALL","SWORDS_DANCE","X_SCISSOR"],
  drain:false,
  status:"normal"
},

BRELOOM: {
  serialnum: 36,
  name: "Breloom",
  type: ["grass","fighting"],
  maxHp: 60,
  attack: 130,
  defence: 80,
  speed: 70,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/breloom.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/breloom.gif"
  },
  moves:["SKY_UPPERCUT","LEAF_BLADE","LEECH_SEED","MACH_PUNCH"],
  drain:false,
  status:"normal"
},

SHARPEDO: {
  serialnum: 37,
  name: "Sharpedo",
  type: ["water","dark"],
  maxHp: 70,
  attack: 120,
  defence: 40,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/sharpedo.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/sharpedo.gif"
  },
  moves:["CRUNCH","SURF","ICE_BEAM","AGILITY"],
  drain:false,
  status:"normal"
},

MANECTRIC: {
  serialnum: 38,
  name: "Manectric",
  type: ["electric"],
  maxHp: 70,
  attack: 75,
  defence: 60,
  speed: 105,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/manectric.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/manectric.gif"
  },
  moves:["THUNDERBOLT","SIGNAL_BEAM","QUICK_ATTACK","AGILITY"],
  drain:false,
  status:"normal"
},

AGGRON: {
  serialnum: 39,
  name: "Aggron",
  type: ["steel","rock"],
  maxHp: 70,
  attack: 110,
  defence: 180,
  speed: 50,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/aggron.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/aggron.gif"
  },
  moves:["IRON_HEAD","STONE_EDGE","EARTHQUAKE","AUTOTOMIZE"],
  drain:false,
  status:"normal"
},

ABSOL: {
  serialnum: 40,
  name: "Absol",
  type: ["dark"],
  maxHp: 65,
  attack: 130,
  defence: 60,
  speed: 75,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/absol.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/absol.gif"
  },
  moves:["NIGHT_SLASH","PSYSHOCK","SWORDS_DANCE","QUICK_ATTACK"],
  drain:false,
  status:"normal"
},

TORKOAL: {
  serialnum: 41,
  name: "Torkoal",
  type: ["fire"],
  maxHp: 70,
  attack: 85,
  defence: 140,
  speed: 20,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/torkoal.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/torkoal.gif"
  },
  moves:["FLAMETHROWER","ERUPTION","BODY_SLAM","REST"],
  drain:false,
  status:"normal"
},

ALTARIA: {
  serialnum: 42,
  name: "Altaria",
  type: ["dragon","flying"],
  maxHp: 75,
  attack: 70,
  defence: 90,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/altaria.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/altaria.gif"
  },
  moves:["DRAGON_PULSE","AIR_SLASH","ROOST","COTTON_GUARD"],
  drain:false,
  status:"normal"
},

ROSERADE: {
  serialnum: 43,
  name: "Roserade",
  type: ["grass","poison"],
  maxHp: 60,
  attack: 70,
  defence: 65,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/roserade.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/roserade.gif"
  },
  moves:["GIGA_DRAIN","SLUDGE_BOMB","TOXIC","SLEEP_POWDER"],
  drain:false,
  status:"normal"
},

HONCHKROW: {
  serialnum: 44,
  name: "Honchkrow",
  type: ["dark","flying"],
  maxHp: 100,
  attack: 125,
  defence: 52,
  speed: 71,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/honchkrow.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/honchkrow.gif"
  },
  moves:["DARK_PULSE","AIR_SLASH","NASTY_PLOT","ROOST"],
  drain:false,
  status:"normal"
},

WEAVILE: {
  serialnum: 45,
  name: "Weavile",
  type: ["dark","ice"],
  maxHp: 70,
  attack: 120,
  defence: 65,
  speed: 125,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/weavile.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/weavile.gif"
  },
  moves:["NIGHT_SLASH","ICICLE_CRASH","ICE_SHARD","SWORDS_DANCE"],
  drain:false,
  status:"normal"
},

RHYPERIOR: {
  serialnum: 46,
  name: "Rhyperior",
  type: ["ground","rock"],
  maxHp: 115,
  attack: 140,
  defence: 130,
  speed: 40,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/rhyperior.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/rhyperior.gif"
  },
  moves:["EARTHQUAKE","STONE_EDGE","MEGAHORN","SUPERPOWER"],
  drain:false,
  status:"normal"
},

TOXICROAK: {
  serialnum: 47,
  name: "Toxicroak",
  type: ["poison","fighting"],
  maxHp: 83,
  attack: 106,
  defence: 65,
  speed: 85,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/toxicroak.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/toxicroak.gif"
  },
  moves:["CROSS_CHOP","SLUDGE_BOMB","NASTY_PLOT","NIGHT_SLASH"],
  drain:false,
  status:"normal"
},

GLISCOR: {
  serialnum: 48,
  name: "Gliscor",
  type: ["ground","flying"],
  maxHp: 75,
  attack: 95,
  defence: 125,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/gliscor.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/gliscor.gif"
  },
  moves:["EARTHQUAKE","X_SCISSOR","ROOST","TOXIC"],
  drain:false,
  status:"normal"
},

FROSLASS: {
  serialnum: 49,
  name: "Froslass",
  type: ["ice","ghost"],
  maxHp: 70,
  attack: 80,
  defence: 70,
  speed: 110,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/froslass.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/froslass.gif"
  },
  moves:["ICE_BEAM","SHADOW_BALL","CONFUSE_RAY","CALM_MIND"],
  drain:false,
  status:"normal"
},

GALLADE: {
  serialnum: 50,
  name: "Gallade",
  type: ["psychic","fighting"],
  maxHp: 68,
  attack: 125,
  defence: 65,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/gallade.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/gallade.gif"
  },
  moves:["PSYSTRIKE","CLOSE_COMBAT","SWORDS_DANCE","NIGHT_SLASH"],
  drain:false,
  status:"normal"
},

SWAMPERT: {
  serialnum: 51,
  name: "Swampert",
  type: ["water","ground"],
  maxHp: 105,
  attack: 110,
  defence: 90,
  speed: 60,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/swampert.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/swampert.gif"
  },
  moves:["SURF","EARTHQUAKE","ICE_BEAM","SUPERPOWER"],
  drain:false,
  status:"normal"
},

SCEPTILE: {
  serialnum: 52,
  name: "Sceptile",
  type: ["grass"],
  maxHp: 85,
  attack: 85,
  defence: 65,
  speed: 120,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/sceptile.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/sceptile.gif"
  },
  moves:["LEAF_BLADE","DRAGON_PULSE","X_SCISSOR","AGILITY"],
  drain:false,
  status:"normal"
},

BLAZIKEN: {
  serialnum: 53,
  name: "Blaziken",
  type: ["fire","fighting"],
  maxHp: 88,
  attack: 120,
  defence: 70,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/blaziken.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/blaziken.gif"
  },
  moves:["FLARE_BLITZ","SKY_UPPERCUT","BLAZE_KICK","SWORDS_DANCE"],
  drain:false,
  status:"normal"
},

GARDEVOIR: {
  serialnum: 54,
  name: "Gardevoir",
  type: ["psychic"],
  maxHp: 90,
  attack: 65,
  defence: 65,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/gardevoir.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/gardevoir.gif"
  },
  moves:["PSYCHIC","MOONBLAST","CALM_MIND","WISH"],
  drain:false,
  status:"normal"
},

METAGROSS: {
  serialnum: 55,
  name: "Metagross",
  type: ["steel","psychic"],
  maxHp: 95,
  attack: 135,
  defence: 130,
  speed: 70,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/metagross.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/metagross.gif"
  },
  moves:["METEOR_MASH","ZEN_HEADBUTT","EARTHQUAKE","AGILITY"],
  drain:false,
  status:"normal"
},

SALAMENCE: {
  serialnum: 56,
  name: "Salamence",
  type: ["dragon","flying"],
  maxHp: 95,
  attack: 135,
  defence: 80,
  speed: 100,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/salamence.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/salamence.gif"
  },
  moves:["OUTRAGE","FLY","FIRE_FANG","DRAGON_DANCE"],
  drain:false,
  status:"normal"
},

FLYGON: {
  serialnum: 57,
  name: "Flygon",
  type: ["ground","dragon"],
  maxHp: 90,
  attack: 100,
  defence: 80,
  speed: 100,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/flygon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/flygon.gif"
  },
  moves:["EARTHQUAKE","DRAGON_CLAW","U_TURN","ROOST"],
  drain:false,
  status:"normal"
},

MILOTIC: {
  serialnum: 58,
  name: "Milotic",
  type: ["water"],
  maxHp: 100,
  attack: 70,
  defence: 95,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/milotic.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/milotic.gif"
  },
  moves:["SURF","ICE_BEAM","RECOVER","TOXIC"],
  drain:false,
  status:"normal"
},
TOGEKISS: {
  serialnum: 59,
  name: "Togekiss",
  type: ["fairy","flying"],
  maxHp: 95,
  attack: 50,
  defence: 85,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/togekiss.gif"
  },
  moves:["AIR_SLASH","AURA_SPHERE","ROOST","THUNDER_WAVE"],
  drain:false,
  status:"normal"
},
PORYGON_Z: {
  serialnum: 60,
  name: "Porygon-Z",
  type: ["normal"],
  maxHp: 85,
  attack: 80,
  defence: 70,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/porygon-z.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/porygon-z.gif"
  },
  moves:["THUNDERBOLT","ICE_BEAM","SHADOW_BALL","AGILITY"],
  drain:false,
  status:"normal"
},

STARAPTOR: {
  serialnum: 61,
  name: "Staraptor",
  type: ["normal","flying"],
  maxHp: 85,
  attack: 120,
  defence: 70,
  speed: 100,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/staraptor.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/staraptor.gif"
  },
  moves:["BRAVE_BIRD","CLOSE_COMBAT","U_TURN","QUICK_ATTACK"],
  drain:false,
  status:"normal"
},

ROTOM: {
  serialnum: 62,
  name: "Rotom",
  type: ["electric","ghost"],
  maxHp: 75,
  attack: 65,
  defence: 80,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/rotom.gif"
  },
  moves:["THUNDERBOLT","SHADOW_BALL","CONFUSE_RAY","THUNDER_WAVE"],
  drain:false,
  status:"normal"
},

DUSKNOIR: {
  serialnum: 63,
  name: "Dusknoir",
  type: ["ghost"],
  maxHp: 90,
  attack: 100,
  defence: 135,
  speed: 45,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/dusknoir.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/dusknoir.gif"
  },
  moves:["SHADOW_BALL","ICE_PUNCH","EARTHQUAKE","REST"],
  drain:false,
  status:"normal"
},

YANMEGA: {
  serialnum: 64,
  name: "Yanmega",
  type: ["bug","flying"],
  maxHp: 86,
  attack: 76,
  defence: 86,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/yanmega.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/yanmega.gif"
  },
  moves:["BUG_BUZZ","AIR_SLASH","SIGNAL_BEAM","U_TURN"],
  drain:false,
  status:"normal"
},

DRAPION: {
  serialnum: 65,
  name: "Drapion",
  type: ["poison","dark"],
  maxHp: 70,
  attack: 90,
  defence: 110,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/drapion.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/drapion.gif"
  },
  moves:["CRUNCH","SLUDGE_BOMB","EARTHQUAKE","TOXIC"],
  drain:false,
  status:"normal"
},

BRONZONG: {
  serialnum: 66,
  name: "Bronzong",
  type: ["steel","psychic"],
  maxHp: 67,
  attack: 89,
  defence: 116,
  speed: 33,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/bronzong.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/bronzong.gif"
  },
  moves:["PSYCHIC","FLASH_CANNON","EARTHQUAKE","REFLECT"],
  drain:false,
  status:"normal"
},

SPIRITOMB: {
  serialnum: 67,
  name: "Spiritomb",
  type: ["ghost","dark"],
  maxHp: 108,
  attack: 92,
  defence: 108,
  speed: 35,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/spiritomb.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/spiritomb.gif"
  },
  moves:["DARK_PULSE","SHADOW_BALL","CONFUSE_RAY","REST"],
  drain:false,
  status:"normal"
},

GASTRODON: {
  serialnum: 68,
  name: "Gastrodon",
  type: ["water","ground"],
  maxHp: 111,
  attack: 83,
  defence: 68,
  speed: 39,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/gastrodon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/gastrodon.gif"
  },
  moves:["SURF","EARTHQUAKE","ICE_BEAM","RECOVER"],
  drain:false,
  status:"normal"
},

DRIFBLIM: {
  serialnum: 69,
  name: "Drifblim",
  type: ["ghost","flying"],
  maxHp: 150,
  attack: 80,
  defence: 44,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/drifblim.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/drifblim.gif"
  },
  moves:["SHADOW_BALL","AIR_SLASH","CALM_MIND","REST"],
  drain:false,
  status:"normal"
},

LICKILICKY: {
  serialnum: 70,
  name: "Lickilicky",
  type: ["normal"],
  maxHp: 110,
  attack: 85,
  defence: 95,
  speed: 50,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/lickilicky.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/lickilicky.gif"
  },
  moves:["BODY_SLAM","EARTHQUAKE","POWER_WHIP","REST"],
  drain:false,
  status:"normal"
},

TANGROWTH: {
  serialnum: 71,
  name: "Tangrowth",
  type: ["grass"],
  maxHp: 100,
  attack: 100,
  defence: 125,
  speed: 50,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/tangrowth.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/tangrowth.gif"
  },
  moves:["GIGA_DRAIN","LEAF_STORM","EARTHQUAKE","STUN_SPORE"],
  drain:false,
  status:"normal"
},

ELECTRODE: {
  serialnum: 72,
  name: "Electrode",
  type: ["electric"],
  maxHp: 60,
  attack: 50,
  defence: 70,
  speed: 150,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/electrode.gif"
  },
  moves:["THUNDERBOLT","THUNDER_WAVE","EXTREME_SPEED","AGILITY"],
  drain:false,
  status:"normal"
},

CRADILY: {
  serialnum: 73,
  name: "Cradily",
  type: ["rock","grass"],
  maxHp: 86,
  attack: 81,
  defence: 97,
  speed: 43,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/cradily.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/cradily.gif"
  },
  moves:["GIGA_DRAIN","STONE_EDGE","EARTHQUAKE","RECOVER"],
  drain:false,
  status:"normal"
},

CARRACOSTA: {
  serialnum: 74,
  name: "Carracosta",
  type: ["water","rock"],
  maxHp: 74,
  attack: 108,
  defence: 133,
  speed: 32,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/carracosta.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/carracosta.gif"
  },
  moves:["WATERFALL","STONE_EDGE","AQUA_JET","IRON_DEFENSE"],
  drain:false,
  status:"normal"
},

REUNICLUS: {
  serialnum: 75,
  name: "Reuniclus",
  type: ["psychic"],
  maxHp: 110,
  attack: 65,
  defence: 75,
  speed: 30,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/reuniclus.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/reuniclus.gif"
  },
  moves:["PSYCHIC","PSYSHOCK","CALM_MIND","RECOVER"],
  drain:false,
  status:"normal"
},

HAXORUS: {
  serialnum: 76,
  name: "Haxorus",
  type: ["dragon"],
  maxHp: 76,
  attack: 147,
  defence: 90,
  speed: 97,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/haxorus.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/haxorus.gif"
  },
  moves:["OUTRAGE","DRAGON_CLAW","EARTHQUAKE","SWORDS_DANCE"],
  drain:false,
  status:"normal"
},

CHANDELURE: {
  serialnum: 77,
  name: "Chandelure",
  type: ["ghost","fire"],
  maxHp: 60,
  attack: 55,
  defence: 90,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/chandelure.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/chandelure.gif"
  },
  moves:["SHADOW_BALL","FLAMETHROWER","CALM_MIND","ENERGY_BALL"],
  drain:false,
  status:"normal"
},

COFAGRIGUS: {
  serialnum: 78,
  name: "Cofagrigus",
  type: ["ghost"],
  maxHp: 58,
  attack: 50,
  defence: 145,
  speed: 30,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/cofagrigus.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/cofagrigus.gif"
  },
  moves:["SHADOW_BALL","TOXIC","REST","CALM_MIND"],
  drain:false,
  status:"normal"
},

KROOKODILE: {
  serialnum: 79,
  name: "Krookodile",
  type: ["ground","dark"],
  maxHp: 95,
  attack: 117,
  defence: 80,
  speed: 92,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/krookodile.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/krookodile.gif"
  },
  moves:["EARTHQUAKE","CRUNCH","STONE_EDGE","BULK_UP"],
  drain:false,
  status:"normal"
},

JELLICENT: {
  serialnum: 80,
  name: "Jellicent",
  type: ["water","ghost"],
  maxHp: 100,
  attack: 60,
  defence: 70,
  speed: 60,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/jellicent.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/jellicent.gif"
  },
  moves:["SURF","SHADOW_BALL","RECOVER","TOXIC"],
  drain:false,
  status:"normal"
},

MIENSHAO: {
  serialnum: 81,
  name: "Mienshao",
  type: ["fighting"],
  maxHp: 65,
  attack: 125,
  defence: 60,
  speed: 105,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/mienshao.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/mienshao.gif"
  },
  moves:["CLOSE_COMBAT","U_TURN","STONE_EDGE","BULK_UP"],
  drain:false,
  status:"normal"
},

GALVANTULA: {
  serialnum: 82,
  name: "Galvantula",
  type: ["bug","electric"],
  maxHp: 70,
  attack: 77,
  defence: 60,
  speed: 108,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/galvantula.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/galvantula.gif"
  },
  moves:["THUNDERBOLT","BUG_BUZZ","SIGNAL_BEAM","AGILITY"],
  drain:false,
  status:"normal"
},

FERROTHORN: {
  serialnum: 83,
  name: "Ferrothorn",
  type: ["grass","steel"],
  maxHp: 74,
  attack: 94,
  defence: 131,
  speed: 20,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/ferrothorn.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/ferrothorn.gif"
  },
  moves:["POWER_WHIP","IRON_HEAD","TOXIC","REST"],
  drain:false,
  status:"normal"
},

BISHARP: {
  serialnum: 84,
  name: "Bisharp",
  type: ["dark","steel"],
  maxHp: 65,
  attack: 125,
  defence: 100,
  speed: 70,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/bisharp.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/bisharp.gif"
  },
  moves:["IRON_HEAD","NIGHT_SLASH","SWORDS_DANCE","STONE_EDGE"],
  drain:false,
  status:"normal"
},

BRAVIARY: {
  serialnum: 85,
  name: "Braviary",
  type: ["normal","flying"],
  maxHp: 100,
  attack: 123,
  defence: 75,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/braviary.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/braviary.gif"
  },
  moves:["BRAVE_BIRD","SUPERPOWER","ROOST","U_TURN"],
  drain:false,
  status:"normal"
},

MANDIBUZZ: {
  serialnum: 86,
  name: "Mandibuzz",
  type: ["dark","flying"],
  maxHp: 110,
  attack: 65,
  defence: 105,
  speed: 80,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/mandibuzz.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/mandibuzz.gif"
  },
  moves:["DARK_PULSE","AIR_SLASH","ROOST","TOXIC"],
  drain:false,
  status:"normal"
},

ACCELGOR: {
  serialnum: 87,
  name: "Accelgor",
  type: ["bug"],
  maxHp: 80,
  attack: 70,
  defence: 40,
  speed: 145,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/accelgor.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/accelgor.gif"
  },
  moves:["BUG_BUZZ","GIGA_DRAIN","U_TURN","AGILITY"],
  drain:false,
  status:"normal"
},

ESCAVALIER: {
  serialnum: 88,
  name: "Escavalier",
  type: ["bug","steel"],
  maxHp: 70,
  attack: 135,
  defence: 105,
  speed: 20,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/escavalier.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/escavalier.gif"
  },
  moves:["MEGAHORN","IRON_HEAD","CLOSE_COMBAT","SWORDS_DANCE"],
  drain:false,
  status:"normal"
},

SIGILYPH: {
  serialnum: 89,
  name: "Sigilyph",
  type: ["psychic","flying"],
  maxHp: 72,
  attack: 58,
  defence: 80,
  speed: 97,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/sigilyph.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/sigilyph.gif"
  },
  moves:["PSYCHIC","AIR_SLASH","CALM_MIND","ROOST"],
  drain:false,
  status:"normal"
},

EELEKTROSS: {
  serialnum: 90,
  name: "Eelektross",
  type: ["electric"],
  maxHp: 85,
  attack: 115,
  defence: 80,
  speed: 50,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/eelektross.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/eelektross.gif"
  },
  moves:["THUNDERBOLT","CRUNCH","GIGA_DRAIN","COIL"],
  drain:false,
  status:"normal"
},

ZOROARK: {
  serialnum: 91,
  name: "Zoroark",
  type: ["dark"],
  maxHp: 80,
  attack: 105,
  defence: 60,
  speed: 105,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/zoroark.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/zoroark.gif"
  },
  moves:["NIGHT_DAZE","DARK_PULSE","NASTY_PLOT","FLAMETHROWER"],
  drain:false,
  status:"normal"
},

VOLCARONA: {
  serialnum: 92,
  name: "Volcarona",
  type: ["bug","fire"],
  maxHp: 85,
  attack: 60,
  defence: 65,
  speed: 100,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/volcarona.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/volcarona.gif"
  },
  moves:["FIERY_DANCE","BUG_BUZZ","QUIVER_DANCE","GIGA_DRAIN"],
  drain:false,
  status:"normal"
},

// ===== LEGENDARIES =====

LUGIA: {
  serialnum: 93,
  name: "Lugia",
  type: ["psychic","flying"],
  maxHp: 106,
  attack: 90,
  defence: 130,
  speed: 110,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/lugia.gif"
  },
  moves:["AEROBLAST","PSYCHIC","CALM_MIND","RECOVER"],
  drain:false,
  status:"normal"
},

MEWTWO: {
  serialnum: 94,
  name: "Mewtwo",
  type: ["psychic"],
  maxHp: 106,
  attack: 110,
  defence: 90,
  speed: 130,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/mewtwo.gif"
  },
  moves:["PSYSTRIKE","PSYCHIC","CALM_MIND","RECOVER"],
  drain:false,
  status:"normal"
},

GROUDON: {
  serialnum: 95,
  name: "Groudon",
  type: ["ground"],
  maxHp: 100,
  attack: 150,
  defence: 140,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/groudon.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/groudon.gif"
  },
  moves:["EARTHQUAKE","STONE_EDGE","SUPERPOWER","BULK_UP"],
  drain:false,
  status:"normal"
},

KYOGRE: {
  serialnum: 96,
  name: "Kyogre",
  type: ["water"],
  maxHp: 100,
  attack: 100,
  defence: 90,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/kyogre.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/kyogre.gif"
  },
  moves:["SURF","ICE_BEAM","THUNDERBOLT","CALM_MIND"],
  drain:false,
  status:"normal"
},

RAYQUAZA: {
  serialnum: 97,
  name: "Rayquaza",
  type: ["dragon","flying"],
  maxHp: 105,
  attack: 150,
  defence: 90,
  speed: 115,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/rayquaza.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/rayquaza.gif"
  },
  moves:["DRAGON_ASCENT","OUTRAGE","EXTREME_SPEED","DRAGON_DANCE"],
  drain:false,
  status:"normal"
},

DIALGA: {
  serialnum: 98,
  name: "Dialga",
  type: ["steel","dragon"],
  maxHp: 120,
  attack: 120,
  defence: 120,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/dialga.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/dialga.gif"
  },
  moves:["ROAR_OF_TIME","FLASH_CANNON","DRAGON_PULSE","CALM_MIND"],
  drain:false,
  status:"normal"
},

PALKIA: {
  serialnum: 99,
  name: "Palkia",
  type: ["water","dragon"],
  maxHp: 120,
  attack: 120,
  defence: 100,
  speed: 100,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/palkia.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/palkia.gif"
  },
  moves:["SPACIAL_REND","SURF","DRAGON_PULSE","AQUA_RING"],
  drain:false,
  status:"normal"
},

GIRATINA: {
  serialnum: 100,
  name: "Giratina",
  type: ["ghost","dragon"],
  maxHp: 150,
  attack: 120,
  defence: 120,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/giratina.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/giratina.gif"
  },
  moves:["SHADOW_FORCE","DRAGON_CLAW","REST","CALM_MIND"],
  drain:false,
  status:"normal"
},
RESHIRAM: {
  name: "Reshiram",
  type: ["dragon","fire"],
  maxHp: 125,
  attack: 130,
  defence: 100,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/reshiram.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/reshiram.gif"
  },
  moves:["BLUE_FLARE","DRAGON_PULSE","EARTHQUAKE","ROOST"],
  drain:false,
  status:"normal"
},
ZEKROM: {
  name: "Zekrom",
  type: ["dragon","electric"],
  maxHp: 125,
  attack: 150,
  defence: 100,
  speed: 90,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/zekrom.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/zekrom.gif"
  },
  moves:["BOLT_STRIKE","DRAGON_CLAW","CRUNCH","DRAGON_DANCE"],
  drain:false,
  status:"normal"
},
KYUREM: {
  name: "Kyurem",
  type: ["dragon","ice"],
  maxHp: 125,
  attack: 130,
  defence: 90,
  speed: 95,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/kyurem.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/kyurem.gif"
  },
  moves:["ICE_BEAM","DRAGON_PULSE","GLACIATE","ROOST"],
  drain:false,
  status:"normal"
},
THUNDURUS: {
  name: "Thundurus",
  type: ["electric","flying"],
  maxHp: 79,
  attack: 115,
  defence: 70,
  speed: 111,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/thundurus.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/thundurus.gif"
  },
  moves:["THUNDERBOLT","AIR_SLASH","NASTY_PLOT","AGILITY"],
  drain:false,
  status:"normal"
},
TORNADUS: {
  name: "Tornadus",
  type: ["flying"],
  maxHp: 79,
  attack: 115,
  defence: 70,
  speed: 111,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/tornadus.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/tornadus.gif"
  },
  moves:["AIR_SLASH","U_TURN","ROCK_SLIDE","DARK_PULSE"],
  drain:false,
  status:"normal"
},

LANDORUS: {
  name: "Landorus",
  type: ["ground","flying"],
  maxHp: 89,
  attack: 125,
  defence: 90,
  speed: 101,
  sprites:{
    front:"https://img.pokemondb.net/sprites/black-white/anim/normal/landorus.gif",
    back:"https://img.pokemondb.net/sprites/black-white/anim/back-normal/landorus.gif"
  },
  moves:["EARTHQUAKE","STONE_EDGE","U_TURN","SUPERPOWER"],
  drain:false,
  status:"normal"
}



};
