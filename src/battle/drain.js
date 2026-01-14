export function applyDrain(
  source,
  target,
  setSource,
  setTarget,
  setLog
) {
  const heal = Math.floor(source.hp * 0.125);

  setTimeout(() => {
    setSource(s => ({
      ...s,
      hp: Math.min(s.hp + heal, s.maxHp)
    }));

    setTarget(t => ({
      ...t,
      hp: Math.max(t.hp - heal, 0)
    }));

    setLog(`${source.name} regained health!`);
  }, 1000); // drain resolves after attack animation
}
