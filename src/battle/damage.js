import { stageMultiplier } from "../data/stageMultiplier";
import { effectiveness } from "../utils/effectiveness";

export function calculateDamage(move, attacker, defender) {
  console.log(attacker.name,move.name)
  const mult =
    stageMultiplier[attacker.attackStage] *
    effectiveness(move.type, defender.type);

  const dmg = Math.floor(
    move.damage * mult * (attacker.attack / 50)
  );

  return { dmg, mult };
}
