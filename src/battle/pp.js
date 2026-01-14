export function pp(setPlayer, move) {
  if (!move) return;

  setPlayer(p => ({
    ...p,
    moves: p.moves.map(m =>
      m.name === move.name
        ? { ...m, pp: m.pp - 1 }
        : m
    )
  }));
}
