/* export const MOVES = {
  TACKLE: { name: "Tackle", damage: 15, pp: 10, type: "normal" },
  STRUGGLE: { name: "Struggle", damage: 15, pp: 10, type: "normal" },
  SCRATCH: { name: "Scratch", damage: 15, pp: 10, type: "normal" },
  SLASH: { name: "Slash", damage: 22, pp: 5, type: "normal" },
  BITE: { name: "Bite", damage: 18, pp: 8, type: "normal" },
  BODY_SLAM: { name: "Body Slam", damage: 25, pp: 5, type: "normal" },

  VINE_WHIP: { name: "Vine Whip", damage: 18, pp: 8, type: "grass" },
  RAZOR_LEAF: { name: "Razor Leaf", damage: 22, pp: 6, type: "grass" },
  SOLAR_BEAM: { name: "Solar Beam", damage: 35, pp: 3, type: "grass" },
  LEECH_SEED: { name: "Leech Seed", damage: 0, pp: 1, type: "grass", effect: "DRAIN" },

  EMBER: { name: "Ember", damage: 18, pp: 8, type: "fire" },
  FLAME_BURST: { name: "Flame Burst", damage: 24, pp: 6, type: "fire" },
  FLAMETHROWER: { name: "Flamethrower", damage: 30, pp: 5, type: "fire" },
  FIRE_BLAST: { name: "Fire Blast", damage: 40, pp: 3, type: "fire" },

  WATER_GUN: { name: "Water Gun", damage: 18, pp: 8, type: "water" },
  BUBBLE: { name: "Bubble", damage: 14, pp: 10, type: "water" },
  SURF: { name: "Surf", damage: 30, pp: 5, type: "water" },
  HYDRO_PUMP: { name: "Hydro Pump", damage: 40, pp: 3, type: "water" },

  GROWL: { name: "Growl", damage: 0, pp: 5, type: "normal", effect: "ATTACK_DOWN" },
  LEER: { name: "Leer", damage: 0, pp: 5, type: "normal", effect: "DEFENSE_DOWN" },
  GROWTH: { name: "Growth", damage: 0, pp: 5, type: "normal", effect: "ATTACK_UP" },
  SMOKESCREEN: { name: "Smokescreen", damage: 0, pp: 5, type: "normal", effect: "ACCURACY_DOWN" },
  WITHDRAW: { name: "Withdraw", damage: 0, pp: 5, type: "normal", effect: "DEFENSE_UP" },
  WORK_UP: { name: "Work Up", damage: 0, pp: 5, type: "normal", effect: "ATTACK_UP" },
  TAIL_WHIP: { name: "Tail Whip", damage: 0, pp: 5, type: "normal", effect: "DEFENSE_DOWN" },

THUNDERSHOCK: { name: "Thunder Shock", damage: 18, pp: 8, type: "electric" },
THUNDERBOLT: { name: "Thunderbolt", damage: 30, pp: 5, type: "electric" },
THUNDER: { name: "Thunder", damage: 40, pp: 3, type: "electric" },
THUNDER_WAVE: { name: "Thunder Wave", damage: 0, pp: 5, type: "electric", effect: "PARALYZE" },
QUICK_ATTACK: { name: "Quick Attack", damage: 18, pp: 10, type: "normal" },

}; */

export const MOVES = {
  // NORMAL
  TACKLE: { name: "Tackle", damage: 15, pp: 10, type: "normal" },
  SCRATCH: { name: "Scratch", damage: 15, pp: 10, type: "normal" },
  SLASH: { name: "Slash", damage: 22, pp: 5, type: "normal" },
  BITE: { name: "Bite", damage: 18, pp: 8, type: "normal" },
  BODY_SLAM: { name: "Body Slam", damage: 25, pp: 5, type: "normal" },
  QUICK_ATTACK: { name: "Quick Attack", damage: 18, pp: 10, type: "normal" },
  STRUGGLE: { name: "Struggle", damage: 15, pp: 10, type: "normal" },
  GROWL: { name: "Growl", damage: 0, pp: 5, type: "normal", effect: "ATTACK_DOWN" },
  LEER: { name: "Leer", damage: 0, pp: 5, type: "normal", effect: "DEFENSE_DOWN" },
  GROWTH: { name: "Growth", damage: 0, pp: 5, type: "normal", effect: "ATTACK_UP" },
  SMOKESCREEN: { name: "Smokescreen", damage: 0, pp: 5, type: "normal", effect: "ACCURACY_DOWN" },
  WITHDRAW: { name: "Withdraw", damage: 0, pp: 5, type: "normal", effect: "DEFENSE_UP" },
  WORK_UP: { name: "Work Up", damage: 0, pp: 5, type: "normal", effect: "ATTACK_UP" },
  TAIL_WHIP: { name: "Tail Whip", damage: 0, pp: 5, type: "normal", effect: "DEFENSE_DOWN" },

  // GRASS
  VINE_WHIP: { name: "Vine Whip", damage: 18, pp: 8, type: "grass" },
  RAZOR_LEAF: { name: "Razor Leaf", damage: 22, pp: 6, type: "grass" },
  SOLAR_BEAM: { name: "Solar Beam", damage: 35, pp: 3, type: "grass" },
  LEECH_SEED: { name: "Leech Seed", damage: 0, pp: 1, type: "grass", effect: "DRAIN" },

  // FIRE
  EMBER: { name: "Ember", damage: 18, pp: 8, type: "fire" },
  FLAME_BURST: { name: "Flame Burst", damage: 24, pp: 6, type: "fire" },
  FLAMETHROWER: { name: "Flamethrower", damage: 30, pp: 5, type: "fire" },
  FIRE_BLAST: { name: "Fire Blast", damage: 40, pp: 3, type: "fire" },

  // WATER
  WATER_GUN: { name: "Water Gun", damage: 18, pp: 8, type: "water" },
  BUBBLE: { name: "Bubble", damage: 14, pp: 10, type: "water" },
  SURF: { name: "Surf", damage: 30, pp: 5, type: "water" },
  HYDRO_PUMP: { name: "Hydro Pump", damage: 40, pp: 3, type: "water" },

  // ELECTRIC
  THUNDERSHOCK: { name: "Thunder Shock", damage: 18, pp: 8, type: "electric" },
  THUNDERBOLT: { name: "Thunderbolt", damage: 30, pp: 5, type: "electric" },
  THUNDER: { name: "Thunder", damage: 40, pp: 3, type: "electric" },

  // ICE
  ICE_SHARD: { name: "Ice Shard", damage: 18, pp: 10, type: "ice" },
  ICE_BEAM: { name: "Ice Beam", damage: 35, pp: 5, type: "ice" },
  BLIZZARD: { name: "Blizzard", damage: 45, pp: 3, type: "ice" },

  // FIGHTING
  KARATE_CHOP: { name: "Karate Chop", damage: 22, pp: 8, type: "fighting" },
  LOW_KICK: { name: "Low Kick", damage: 18, pp: 10, type: "fighting" },
  SUBMISSION: { name: "Submission", damage: 35, pp: 5, type: "fighting" },

  // POISON
  POISON_STING: { name: "Poison Sting", damage: 15, pp: 10, type: "poison" },
  SLUDGE: { name: "Sludge", damage: 28, pp: 6, type: "poison" },

  // GROUND
  DIG: { name: "Dig", damage: 30, pp: 5, type: "ground" },
  EARTHQUAKE: { name: "Earthquake", damage: 45, pp: 3, type: "ground" },

  // FLYING
  GUST: { name: "Gust", damage: 18, pp: 10, type: "flying" },
  WING_ATTACK: { name: "Wing Attack", damage: 30, pp: 5, type: "flying" },

  // Bug
  BUG_BITE: { name: "Bug Bite", damage: 20, pp: 10, type: "bug" },
  TWINEEDLE: { name: "Twineedle", damage: 28, pp: 6, type: "bug" },

  // PSYCHIC
  CONFUSION: { name: "Confusion", damage: 20, pp: 10, type: "psychic" },
  PSYBEAM: { name: "Psybeam", damage: 28, pp: 6, type: "psychic" },
  PSYCHIC: { name: "Psychic", damage: 40, pp: 5, type: "psychic" },

  // GHOST
  LICK: { name: "Lick", damage: 18, pp: 10, type: "ghost" },
  NIGHT_SHADE: { name: "Night Shade", damage: 25, pp: 6, type: "ghost" },

  // ROCK
  ROCK_THROW: { name: "Rock Throw", damage: 20, pp: 10, type: "rock" },
  ROCK_SLIDE: { name: "Rock Slide", damage: 35, pp: 5, type: "rock" },

  // DRAGON
  DRAGON_RAGE: { name: "Dragon Rage", damage: 30, pp: 5, type: "dragon" },


  STRING_SHOT: { name: "String Shot", damage: 0, pp: 10, type: "bug", effect: "SPEED_DOWN" },
HARDEN: { name: "Harden", damage: 0, pp: 5, type: "normal", effect: "DEFENSE_UP" },
SLEEP_POWDER: { name: "Sleep Powder", damage: 0, pp: 5, type: "grass", effect: "SLEEP" },
FURY_ATTACK: { name: "Fury Attack", damage: 20, pp: 10, type: "normal" },
HYPER_FANG: { name: "Hyper Fang", damage: 35, pp: 5, type: "normal" },
HEADBUTT: { name: "Headbutt", damage: 22, pp: 8, type: "normal" },
TAKE_DOWN: { name: "Take Down", damage: 30, pp: 5, type: "normal" },
REST: { name: "Rest", damage: 0, pp: 3, type: "psychic", effect: "HEAL_FULL" },
FIRE_PUNCH: { name: "Fire Punch", damage: 30, pp: 5, type: "fire" },
SPLASH: { name: "Splash", damage: 0, pp: 40, type: "normal" },
TRANSFORM: { name: "Transform", damage: 0, pp: 5, type: "normal", effect: "TRANSFORM" },
TRI_ATTACK: { name: "Tri Attack", damage: 30, pp: 5, type: "normal" },
DRILL_PECK: { name: "Drill Peck", damage: 35, pp: 5, type: "flying" },
FLY: { name: "Fly", damage: 35, pp: 5, type: "flying" },
OUTRAGE: { name: "Outrage", damage: 45, pp: 3, type: "dragon" },
RECOVER: { name: "Recover", damage: 0, pp: 5, type: "psychic", effect: "HEAL_HALF" },
CRUNCH: { name: "Crunch", damage: 30, pp: 5, type: "dark" }

};
