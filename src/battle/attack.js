import { pp } from "./pp";
import { atkdn } from "./attackDown";
import { atkup } from "./attackUp";
import { calculateDamage } from "./damage";
import { hitSound } from "../audio/sounds";
import { faint } from "./faint";
import { enemymove } from "./enemyMoveSelector";
import { applyDrain } from "./drain";

export function attack(
  attacker,
  defender,
  setAttacker,
  setDefender,
  setLog,
  move,
  setAttHit,
  setDefHit,
  setGameOver,
  isPlayer,
  setLocked
) {
  if (!move) return;

  setLocked(true)
  // PP--
  pp(setAttacker, move);

  // STATS BUFF
  if (move && (move.effect === "ATTACK_DOWN" || move.effect === "DEFENSE_UP")) {
    atkdn(setDefender, attacker, defender, setLog, move.effect);
  } else if (
    move &&
    (move.effect === "ATTACK_UP" || move.effect === "DEFENSE_DOWN")
  ) {
    atkup(setAttacker, attacker, defender, setLog, move.effect);
  }

  // DAMAGE
  const { dmg, mult } = calculateDamage(move, attacker, defender);
  const newHp = Math.max(defender.hp - dmg, 0);

  // SOUND + HIT
  hitSound.play();
  setDefHit(true);
  setDefender((e) => ({ ...e, hp: newHp }));

  // MESSAGE (delayed)
  setTimeout(() => {
    let effText = `${attacker.name} used ${move.name}!`;
    if (mult > 1) effText += "\nIt's super effective!";
    if (mult < 1) effText += "\nIt's not very effective...";
    setLog(effText);
  }, 600);

  // DRAIN EFFECT
  if (move.effect === "DRAIN") {
    setTimeout(() => {
      setDefender((p) => ({ ...p, drain: true }));
      setLog(`${defender.name} has been seeded!`);
    }, 1000);
  }

  // HIT RESET
  setTimeout(() => setDefHit(false), 300);

  // FAINT CHECK
  if (newHp === 0) {
    console.log("FAINT IN ATTACK")
    faint(setLog, defender, setGameOver);
    return;
  }

  // 🔴 ENEMY TURN (DELAYED — THIS IS THE IMPORTANT PART)
  if (isPlayer === true) {
    setTimeout(() => {
      const eMove = enemymove(defender);
      if (!eMove) return;

      attack(
        defender,
        attacker,
        setDefender,
        setAttacker,
        setLog,
        eMove,
        setAttHit,
        setDefHit,
        setGameOver,
        false
        ,setLocked
      );
    }, 1000); // enemy waits before attacking
  } else {
    // DRAIN DAMAGE AFTER ENEMY TURN
    
    if (attacker.drain)
      applyDrain(defender, attacker, setDefender, setAttacker, setLog);
    if (defender.drain)
      applyDrain(attacker, defender, setAttacker, setDefender, setLog);
    setTimeout(()=>{
      setLocked(false)
    },1000)
  }

  // FINAL FAINT CHECKS
  if (attacker.hp === 0){ 
    console.log("FAINT OUT ATTACK")
    faint(setLog, attacker, setGameOver)
  };
  if (defender.hp === 0) {
    console.log("FAINT OUT ATTACK")
    faint(setLog, defender, setGameOver);
  }
  
}
