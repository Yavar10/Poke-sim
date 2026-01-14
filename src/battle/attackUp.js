export function atkup(
  setAttacker,
  attacker,
  defender,
  setLog,
  effect
) {
  // APPLY STAT CHANGE IMMEDIATELY
  setAttacker(e => ({
    ...e,
    attackStage: Math.min(e.attackStage + 1, 2)
  }));

  // DELAY MESSAGE
  setTimeout(() => {
    effect === "ATTACK_UP"
      ? setLog(`${attacker.name}'s Attack rose!`)
      : setLog(`${defender.name}'s Defence fell!`);
  }, 1000);
}
