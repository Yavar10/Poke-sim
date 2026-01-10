export const effectiveness = (moveType, defenderType) => {
  // NORMAL
  if (moveType === "normal" && defenderType === "rock") return 0.5;
  if (moveType === "normal" && defenderType === "ghost") return 0;

  // FIRE
  if (moveType === "fire" && defenderType === "grass") return 2;
  if (moveType === "fire" && defenderType === "ice") return 2;
  if (moveType === "fire" && defenderType === "bug") return 2;
  if (moveType === "fire" && defenderType === "fire") return 0.5;
  if (moveType === "fire" && defenderType === "water") return 0.5;
  if (moveType === "fire" && defenderType === "rock") return 0.5;
  if (moveType === "fire" && defenderType === "dragon") return 0.5;

  // WATER
  if (moveType === "water" && defenderType === "fire") return 2;
  if (moveType === "water" && defenderType === "rock") return 2;
  if (moveType === "water" && defenderType === "ground") return 2;
  if (moveType === "water" && defenderType === "water") return 0.5;
  if (moveType === "water" && defenderType === "grass") return 0.5;
  if (moveType === "water" && defenderType === "dragon") return 0.5;

  // ELECTRIC
  if (moveType === "electric" && defenderType === "water") return 2;
  if (moveType === "electric" && defenderType === "flying") return 2;
  if (moveType === "electric" && defenderType === "electric") return 0.5;
  if (moveType === "electric" && defenderType === "grass") return 0.5;
  if (moveType === "electric" && defenderType === "dragon") return 0.5;
  if (moveType === "electric" && defenderType === "ground") return 0;

  // GRASS
  if (moveType === "grass" && defenderType === "water") return 2;
  if (moveType === "grass" && defenderType === "rock") return 2;
  if (moveType === "grass" && defenderType === "ground") return 2;
  if (moveType === "grass" && defenderType === "fire") return 0.5;
  if (moveType === "grass" && defenderType === "grass") return 0.5;
  if (moveType === "grass" && defenderType === "poison") return 0.5;
  if (moveType === "grass" && defenderType === "flying") return 0.5;
  if (moveType === "grass" && defenderType === "bug") return 0.5;
  if (moveType === "grass" && defenderType === "dragon") return 0.5;

  // ICE
  if (moveType === "ice" && defenderType === "grass") return 2;
  if (moveType === "ice" && defenderType === "ground") return 2;
  if (moveType === "ice" && defenderType === "flying") return 2;
  if (moveType === "ice" && defenderType === "dragon") return 2;
  if (moveType === "ice" && defenderType === "fire") return 0.5;
  if (moveType === "ice" && defenderType === "water") return 0.5;
  if (moveType === "ice" && defenderType === "ice") return 0.5;

  // FIGHTING
  if (moveType === "fighting" && defenderType === "normal") return 2;
  if (moveType === "fighting" && defenderType === "rock") return 2;
  if (moveType === "fighting" && defenderType === "ice") return 2;
  if (moveType === "fighting" && defenderType === "poison") return 0.5;
  if (moveType === "fighting" && defenderType === "flying") return 0.5;
  if (moveType === "fighting" && defenderType === "psychic") return 0.5;
  if (moveType === "fighting" && defenderType === "bug") return 0.5;
  if (moveType === "fighting" && defenderType === "ghost") return 0;

  // POISON
  if (moveType === "poison" && defenderType === "grass") return 2;
  if (moveType === "poison" && defenderType === "bug") return 2;
  if (moveType === "poison" && defenderType === "poison") return 0.5;
  if (moveType === "poison" && defenderType === "ground") return 0.5;
  if (moveType === "poison" && defenderType === "rock") return 0.5;
  if (moveType === "poison" && defenderType === "ghost") return 0;

  // GROUND
  if (moveType === "ground" && defenderType === "fire") return 2;
  if (moveType === "ground" && defenderType === "electric") return 2;
  if (moveType === "ground" && defenderType === "poison") return 2;
  if (moveType === "ground" && defenderType === "rock") return 2;
  if (moveType === "ground" && defenderType === "bug") return 0.5;
  if (moveType === "ground" && defenderType === "grass") return 0.5;
  if (moveType === "ground" && defenderType === "flying") return 0;

  // FLYING
  if (moveType === "flying" && defenderType === "grass") return 2;
  if (moveType === "flying" && defenderType === "fighting") return 2;
  if (moveType === "flying" && defenderType === "bug") return 2;
  if (moveType === "flying" && defenderType === "electric") return 0.5;
  if (moveType === "flying" && defenderType === "rock") return 0.5;

  // PSYCHIC
  if (moveType === "psychic" && defenderType === "fighting") return 2;
  if (moveType === "psychic" && defenderType === "poison") return 2;
  if (moveType === "psychic" && defenderType === "psychic") return 0.5;

  // BUG
  if (moveType === "bug" && defenderType === "grass") return 2;
  if (moveType === "bug" && defenderType === "psychic") return 2;
  if (moveType === "bug" && defenderType === "fire") return 0.5;
  if (moveType === "bug" && defenderType === "fighting") return 0.5;
  if (moveType === "bug" && defenderType === "flying") return 0.5;
  if (moveType === "bug" && defenderType === "ghost") return 0.5;

  // ROCK
  if (moveType === "rock" && defenderType === "fire") return 2;
  if (moveType === "rock" && defenderType === "ice") return 2;
  if (moveType === "rock" && defenderType === "flying") return 2;
  if (moveType === "rock" && defenderType === "bug") return 2;
  if (moveType === "rock" && defenderType === "fighting") return 0.5;
  if (moveType === "rock" && defenderType === "ground") return 0.5;

  // GHOST
  if (moveType === "ghost" && defenderType === "ghost") return 2;
  if (moveType === "ghost" && defenderType === "psychic") return 0; // Gen-1 quirk

  // DRAGON
  if (moveType === "dragon" && defenderType === "dragon") return 2;

  return 1;
};
