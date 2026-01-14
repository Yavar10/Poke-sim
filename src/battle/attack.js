import { pp } from "./pp";
import { atkdn,atkup,defdn,defup } from "./statschange";
import { calculateDamage } from "./damage";
import { hitSound } from "../audio/sounds";
import { faint } from "./faint";
import { enemymove } from "./enemyMoveSelector";
import { applyDrain } from "./drain";
import { isItHappening } from "./random";
import { poison, toxic } from "./toxic";
import { heal } from "./heal";
import { burn, burnt } from "./burn";
import { paraz } from "./para";

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

if(attacker.status==="paralyzed"&&isItHappening(40))
{
  setTimeout(() => {
      setLog(`${attacker.name} could not move due to paralysis`);
    }, 600);
}
  else// PP--
  {pp(setAttacker, move);

  // STATS BUFF
  const effectos=move.effect.split("_");
  if (effectos[0] === "ATTACKDOWN" ){
    atkdn(attacker,defender,setAttacker,setDefender,setLog,effectos[1]);
  }
  else if( effectos[0] === "ATTACKUP") {
    atkup(attacker,defender,setAttacker,setDefender,setLog,effectos[1]);
  } else  if (effectos[0] === "DEFENCEDOWN"){
    defdn(attacker,defender,setAttacker,setDefender,setLog,effectos[1]);
  } else if( effectos[0] === "DEFENCEUP") {
    defup(attacker,defender,setAttacker,setDefender,setLog,effectos[1]);
  }
  else if(effectos[0]==="HEAL"){
    heal(setAttacker,attacker,setLog)
  }
  else if (effectos[0]==="TOXIC" && isItHappening(effectos[1])&&defender.status==="normal") {
      toxic(setDefender,defender,setLog)
  }
  else if (effectos[0]==="BURN" && isItHappening(effectos[1])&&defender.status==="normal") {
      burn(setDefender,defender,setLog)
  }
  else if (effectos[0]==="PARALYZE" && isItHappening(effectos[1])&&defender.status==="normal") {
      paraz(setDefender,defender,setLog)
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

  if (newHp === 0) {
    console.log("FAINT IN ATTACK")
    faint(setLog, defender, setGameOver);
    return;
  }
}  // FAINT CHECK

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
    if(attacker.status==="poisoned")
      poison(setAttacker,attacker,setLog)
    if(defender.status==="poisoned")
      poison(setDefender,defender,setLog)
    if(attacker.status==="burnt")
      burnt(setAttacker,attacker,setLog)
    if(defender.status==="burnt")
      burnt(setDefender,defender,setLog)
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
