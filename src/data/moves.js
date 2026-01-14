export const MOVES = {

// ===== FIRE =====
FLAMETHROWER: { name:"FLAMETHROWER", damage:90, type:"fire", effect:"BURN_30", pp:8 },
ERUPTION: { name:"ERUPTION", damage:120, type:"fire", effect:"BURN_30", pp:3 },
FLARE_BLITZ: { name:"FLARE_BLITZ", damage:120, type:"fire", effect:"BURN_30", pp:3 },
BLAZE_KICK: { name:"BLAZE_KICK", damage:85, type:"fire", effect:"BURN_30", pp:8 },
FIRE_FANG: { name:"FIRE_FANG", damage:65, type:"fire", effect:"BURN_30", pp:10 },
FIERY_DANCE: { name:"FIERY_DANCE", damage:80, type:"fire", effect:"ATTACKUP_SELF", pp:8 },
SACRED_FIRE: { name:"SACRED_FIRE", damage:100, type:"fire", effect:"BURN_100", pp:5 },
BLUE_FLARE: { name:"BLUE_FLARE", damage:130, type:"fire", effect:"BURN_30", pp:3 },

// ===== WATER =====
SURF: { name:"SURF", damage:90, type:"water", effect:"NONE", pp:8 },
WATERFALL: { name:"WATERFALL", damage:80, type:"water", effect:"FLINCH_30", pp:10 },
RAZOR_SHELL: { name:"RAZOR_SHELL", damage:75, type:"water", effect:"DEFENCEDOWN_ENEMY", pp:10 },
AQUA_JET: { name:"AQUA_JET", damage:40, type:"water", effect:"NONE", pp:15 },
AQUA_RING: { name:"AQUA_RING", damage:0, type:"water", effect:"HEAL", pp:5 },
HYDROPUMP: { name:"HYDRO_PUMP", damage:110, type:"water", effect:"NONE", pp:3 },


// ===== GRASS =====
GIGA_DRAIN: { name:"GIGA_DRAIN", damage:75, type:"grass", effect:"HEAL", pp:8 },
RAZOR_LEAF: { name:"RAZOR_LEAF", damage:55, type:"grass", effect:"NONE", pp:12 },
PETAL_DANCE: { name:"PETAL_DANCE", damage:120, type:"grass", effect:"ATTACKUP_SELF", pp:3 },
POWER_WHIP: { name:"POWER_WHIP", damage:150, type:"grass", effect:"NONE", pp:1 },
LEAF_BLADE: { name:"LEAF_BLADE", damage:90, type:"grass", effect:"NONE", pp:8 },
LEAF_STORM: { name:"LEAF_STORM", damage:130, type:"grass", effect:"ATTACKDOWN_SELF", pp:3 },
SYNTHESIS: { name:"SYNTHESIS", damage:0, type:"grass", effect:"HEAL", pp:5 },
SLEEP_POWDER: { name:"SLEEP_POWDER", damage:0, type:"grass", effect:"NONE", pp:5 },
LEECH_SEED: { name: "LEECH_SEED", damage: 0, pp: 1, type: "grass", effect: "DRAIN" },
COTTON_GUARD: { name:"COTTON_GUARD", damage:0, type:"grass", effect:"DEFENCEUP_SELF", pp:5 },
STUN_SPORE: { name:"STUN_SPORE", damage:0, type:"grass", effect:"PARALYZE_100", pp:8 },

// ===== ELECTRIC =====
THUNDERBOLT: { name:"THUNDERBOLT", damage:90, type:"electric", effect:"PARALYZE_30", pp:8 },
THUNDER_WAVE: { name:"THUNDER_WAVE", damage:0, type:"electric", effect:"PARALYZE_100", pp:8 },
VOLT_TACKLE: { name:"VOLT_TACKLE", damage:120, type:"electric", effect:"NONE", pp:3 },
WILD_CHARGE: { name:"WILD_CHARGE", damage:90, type:"electric", effect:"NONE", pp:5 },
BOLT_STRIKE: { name:"BOLT_STRIKE", damage:130, type:"electric", effect:"PARALYZE_30", pp:3 },

// ===== ICE =====
ICE_BEAM: { name:"ICE_BEAM", damage:90, type:"ice", effect:"NONE", pp:8 },
ICE_PUNCH: { name:"ICE_PUNCH", damage:75, type:"ice", effect:"NONE", pp:10 },
ICE_FANG: { name:"ICE_FANG", damage:65, type:"ice", effect:"NONE", pp:10 },
ICICLE_CRASH: { name:"ICICLE_CRASH", damage:85, type:"ice", effect:"FLINCH_30", pp:8 },
ICE_SHARD: { name:"ICE_SHARD", damage:40, type:"ice", effect:"NONE", pp:15 },
GLACIATE: { name:"GLACIATE", damage:65, type:"ice", effect:"ATTACKDOWN_ENEMY", pp:8 },

// ===== FIGHTING =====
DYNAMIC_PUNCH: { name:"DYNAMIC_PUNCH", damage:100, type:"fighting", effect:"NONE", pp:5 },
CROSS_CHOP: { name:"CROSS_CHOP", damage:100, type:"fighting", effect:"NONE", pp:5 },
CLOSE_COMBAT: { name:"CLOSE_COMBAT", damage:120, type:"fighting", effect:"DEFENCEDOWN_SELF", pp:5 },
FOCUS_BLAST: { name:"FOCUS_BLAST", damage:120, type:"fighting", effect:"DEFENCEDOWN_ENEMY", pp:5 },
SUPERPOWER: { name:"SUPERPOWER", damage:120, type:"fighting", effect:"ATTACKDOWN_SELF", pp:5 },
SKY_UPPERCUT: { name:"SKY_UPPERCUT", damage:85, type:"fighting", effect:"NONE", pp:8 },
HAMMER_ARM: { name:"HAMMER_ARM", damage:100, type:"fighting", effect:"ATTACKUP_SELF", pp:5 },
MACH_PUNCH: { name:"MACH_PUNCH", damage:40, type:"fighting", effect:"NONE", pp:15 },
AURA_SPHERE: { name:"AURA_SPHERE", damage:80, type:"fighting", effect:"NONE", pp:8 },

// ===== DARK =====
BITE: { name:"BITE", damage:60, type:"dark", effect:"FLINCH_30", pp:12 },
CRUNCH: { name:"CRUNCH", damage:80, type:"dark", effect:"DEFENCEDOWN_ENEMY", pp:10 },
DARK_PULSE: { name:"DARK_PULSE", damage:80, type:"dark", effect:"FLINCH_30", pp:10 },
NIGHT_SLASH: { name:"NIGHT_SLASH", damage:70, type:"dark", effect:"NONE", pp:10 },
NIGHT_DAZE: { name:"NIGHT_DAZE", damage:85, type:"dark", effect:"ATTACKDOWN_ENEMY", pp:8 },
NASTY_PLOT: { name:"NASTY_PLOT", damage:0, type:"dark", effect:"ATTACKUP_SELF", pp:5 },

// ===== PSYCHIC =====
PSYCHIC: { name:"PSYCHIC", damage:90, type:"psychic", effect:"DEFENCEDOWN_ENEMY", pp:8 },
PSYSHOCK: { name:"PSYSHOCK", damage:80, type:"psychic", effect:"NONE", pp:8 },
ZEN_HEADBUTT: { name:"ZEN_HEADBUTT", damage:80, type:"psychic", effect:"FLINCH_30", pp:8 },
PSYSTRIKE: { name:"PSYSTRIKE", damage:100, type:"psychic", effect:"NONE", pp:5 },
CALM_MIND: { name:"CALM_MIND", damage:0, type:"psychic", effect:"ATTACKUP_SELF", pp:8 },
AGILITY: { name:"AGILITY", damage:0, type:"psychic", effect:"ATTACKUP_SELF", pp:8 },
HYPNOSIS: { name:"HYPNOSIS", damage:60, type:"psychic", effect:"NONE", pp:5 },
DREAM_EATER: { name:"DREAM_EATER", damage:100, type:"psychic", effect:"HEAL", pp:5 },
BARRIER: { name:"BARRIER", damage:0, type:"psychic", effect:"DEFENCEUP_SELF", pp:5 },
REFLECT: { name:"REFLECT", damage:0, type:"psychic", effect:"DEFENCEUP_SELF", pp:5 },

// ===== GHOST =====
SHADOW_BALL: { name:"SHADOW_BALL", damage:80, type:"ghost", effect:"DEFENCEDOWN_ENEMY", pp:8 },
SHADOW_FORCE: { name:"SHADOW_FORCE", damage:120, type:"ghost", effect:"NONE", pp:3 },
CONFUSE_RAY: { name:"CONFUSE_RAY", damage:50, type:"ghost", effect:"NONE", pp:8 },

// ===== NORMAL =====
SLASH: { name:"SLASH", damage:70, type:"normal", effect:"NONE", pp:10 },
BULK_UP: {name: "BULK_UP",damage: 0,type: "fighting",effect: "ATTACKUP_SELF",pp: 8},
QUICK_ATTACK: { name:"QUICK_ATTACK", damage:40, type:"normal", effect:"NONE", pp:15 },
BODY_SLAM: { name:"BODY_SLAM", damage:85, type:"normal", effect:"PARALYZE_30", pp:8 },
EXTREME_SPEED: { name:"EXTREME_SPEED", damage:80, type:"normal", effect:"NONE", pp:8 },
SKULL_BASH: { name:"SKULL_BASH", damage:100, type:"normal", effect:"DEFENCEUP_SELF", pp:5 },
REST: { name:"REST", damage:0, type:"psychic", effect:"HEAL", pp:3 },
RECOVER: { name:"RECOVER", damage:0, type:"normal", effect:"HEAL", pp:5 },
WISH: { name:"WISH", damage:0, type:"normal", effect:"HEAL", pp:5 },
MORNING_SUN: { name:"MORNING_SUN", damage:0, type:"normal", effect:"HEAL", pp:5 },
EXPLOSION: { name:"EXPLOSION", damage:250, type:"normal", effect:"DEFENCEDOWN_SELF", pp:1 },


// ===== STEEL =====
IRON_TAIL: { name:"IRON_TAIL", damage:100, type:"steel", effect:"DEFENCEDOWN_ENEMY", pp:5 },
IRON_HEAD: { name:"IRON_HEAD", damage:80, type:"steel", effect:"FLINCH_30", pp:10 },
METEOR_MASH: { name:"METEOR_MASH", damage:90, type:"steel", effect:"ATTACKUP_SELF", pp:5 },
FLASH_CANNON: { name:"FLASH_CANNON", damage:80, type:"steel", effect:"DEFENCEDOWN_ENEMY", pp:8 },
BULLET_PUNCH: { name:"BULLET_PUNCH", damage:40, type:"steel", effect:"NONE", pp:15 },
HEAVY_SLAM: { name:"HEAVY_SLAM", damage:100, type:"steel", effect:"NONE", pp:5 },
AUTOTOMIZE: { name:"AUTOTOMIZE", damage:0, type:"steel", effect:"ATTACKUP_SELF", pp:5 },
METAL_CLAW:{name:"METAL_CLAW",damage:50,type:"steel",effect:"ATTACKUP_SELF",pp:15},


// ===== ROCK =====
STONE_EDGE: { name:"STONE_EDGE", damage:100, type:"rock", effect:"NONE", pp:5 },
ROCK_SLIDE: { name:"ROCK_SLIDE", damage:75, type:"rock", effect:"FLINCH_30", pp:10 },
POWER_GEM: { name:"POWER_GEM", damage:80, type:"rock", effect:"NONE", pp:8 },
HEAD_SMASH: { name:"HEAD_SMASH", damage:150, type:"rock", effect:"NONE", pp:3 },

// ===== BUG =====
X_SCISSOR: { name:"X_SCISSOR", damage:80, type:"bug", effect:"NONE", pp:8 },
MEGAHORN: { name:"MEGAHORN", damage:120, type:"bug", effect:"NONE", pp:5 },
BUG_BUZZ: { name:"BUG_BUZZ", damage:90, type:"bug", effect:"DEFENCEDOWN_ENEMY", pp:8 },
SIGNAL_BEAM: { name:"SIGNAL_BEAM", damage:75, type:"bug", effect:"NONE", pp:10 },
U_TURN: { name:"U_TURN", damage:70, type:"bug", effect:"NONE", pp:10 },
QUIVER_DANCE: { name:"QUIVER_DANCE", damage:0, type:"bug", effect:"ATTACKUP_SELF", pp:5 },

// ===== DRAGON =====
DRAGON_CLAW: { name:"DRAGON_CLAW", damage:80, type:"dragon", effect:"NONE", pp:8 },
DRAGON_PULSE: { name:"DRAGON_PULSE", damage:85, type:"dragon", effect:"NONE", pp:8 },
OUTRAGE: { name:"OUTRAGE", damage:120, type:"dragon", effect:"ATTACKUP_SELF", pp:3 },
SWORDS_DANCE: { name:"SWORDS_DANCE", damage:0, type:"normal", effect:"ATTACKUP_SELF", pp:5 },
DRAGON_DANCE: { name:"DRAGON_DANCE", damage:0, type:"dragon", effect:"ATTACKUP_SELF", pp:5 },
ROAR_OF_TIME: { name:"ROAR_OF_TIME", damage:150, type:"dragon", effect:"NONE", pp:3 },
SPACIAL_REND: { name:"SPACIAL_REND", damage:100, type:"dragon", effect:"NONE", pp:5 },

// ===== FLYING =====
FLY: { name:"FLY", damage:90, type:"flying", effect:"NONE", pp:6 },
AIR_SLASH: { name:"AIR_SLASH", damage:75, type:"flying", effect:"FLINCH_30", pp:10 },
BRAVE_BIRD: { name:"BRAVE_BIRD", damage:120, type:"flying", effect:"NONE", pp:3 },
AEROBLAST: { name:"AEROBLAST", damage:100, type:"flying", effect:"NONE", pp:5 },
ROOST: { name:"ROOST", damage:0, type:"flying", effect:"HEAL", pp:5 },
DRAGON_ASCENT: { name:"DRAGON_ASCENT", damage:120, type:"flying", effect:"DEFENCEDOWN_SELF", pp:3 },


// ===== POISON =====
SLUDGE_BOMB: { name:"SLUDGE_BOMB", damage:90, type:"poison", effect:"TOXIC_30", pp:8 },
TOXIC: { name:"TOXIC", damage:0, type:"poison", effect:"TOXIC_100", pp:5 },
GLARE: { name:"GLARE", damage:0, type:"normal", effect:"PARALYZE_100", pp:8 },
COIL: { name:"COIL", damage:0, type:"poison", effect:"DEFENCEUP_SELF", pp:5 },

// ===== FAIRY =====
MOONBLAST: { name:"MOONBLAST", damage:95, type:"fairy", effect:"ATTACKDOWN_ENEMY", pp:8 },
MOONLIGHT: { name:"MOONLIGHT", damage:0, type:"fairy", effect:"HEAL", pp:5 },
// ===== GROUND =====
EARTHQUAKE: {name: "EARTHQUAKE",damage: 100,type: "ground",effect: "NONE",pp: 5}


};
