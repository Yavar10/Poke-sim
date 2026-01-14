export function struggle(
  attacker,
  defender,
  setAttacker,
  setDefender,
  setLog
) {
  const recoil = Math.floor(attacker.maxHp / 5);
  const damage = Math.floor((4 * attacker.attack) / 50);

  // APPLY DAMAGE IMMEDIATELY
  setDefender(d => ({
    ...d,
    hp: Math.max(d.hp - damage, 0)
  }));

  // APPLY RECOIL IMMEDIATELY
  setAttacker(a => ({
    ...a,
    hp: Math.max(a.hp - recoil, 0)
  }));

  // DELAY MESSAGE
  setTimeout(() => {
    setLog(`${attacker.name} used Struggle!`);
  }, 600);
}
