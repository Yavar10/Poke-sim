export const effectiveness = (moveType, defenderType) => {
  if (moveType === "fire" && defenderType === "grass") return 2;
  if (moveType === "water" && defenderType === "fire") return 2;
  if (moveType === "grass" && defenderType === "water") return 2;
  if (moveType === "water" && defenderType === "grass") return 0.5;
  if (moveType === "grass" && defenderType === "fire") return 0.5;
  if (moveType === "fire" && defenderType === "water") return 0.5;

  if (moveType === "electric" && defenderType === "water") return 2;
  if (moveType === "electric" && defenderType === "grass") return 0.5;
  if (moveType === "electric" && defenderType === "electric") return 0.5;

  return 1;
};
