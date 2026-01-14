import { MOVES } from "../data/moves";

export const buildPokemon = (base, side) => ({
  ...base,
  hp: base.maxHp,
  attackStage: 0,
  defenceStage:0,
  sprite: side === "player" ? base.sprites.back : base.sprites.front,
  moves: base.moves.map((m) => ({ ...MOVES[m] }))
});
