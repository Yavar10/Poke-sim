export const MOVES = {
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

};