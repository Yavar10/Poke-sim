import { stageMultiplier } from "../data/stageMultiplier";
import { effectiveness } from "../utils/effectiveness";

export function calculateDamage(move, attacker, defender) {
  console.log(attacker.name,move.name,attacker.attackStage,attacker.defenceStage)
  const pretype=(move.damage*attacker.attack*stageMultiplier[attacker.attackStage])/(defender.defence*stageMultiplier[defender.defenceStage])
  const type=defender.type
  let effec=effectiveness(move.type, type[0]);
  if(type.length==2)
    effec*=effectiveness(move.type,type[1])
  const mult =effec

  const dmg = Math.floor(
    (pretype*mult)/4
  );

  return { dmg, mult };
}
