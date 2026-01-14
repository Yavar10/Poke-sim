export function atkdn(
  setDefender,
  attacker,
  defender,
  setLog,
  effect
) {
  // APPLY STAT CHANGE IMMEDIATELY
  setDefender(e => ({
    ...e,
    attackStage: Math.max(e.attackStage - 1, -2)
  }));

  // DELAY MESSAGE (so it doesn't clash with attack text)
  setTimeout(() => {
    (effect === "ATTACK_DOWN")
      ? setLog(`${defender.name}'s Attack fell!`)
      : setLog(`${attacker.name}'s Defence rose!`);
  }, 1000);
}
