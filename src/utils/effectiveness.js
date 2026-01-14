export const effectiveness = (moveType, defenderType) => {

  // ===== NORMAL =====
  if (moveType === "normal" && defenderType === "rock") return 0.5;
  if (moveType === "normal" && defenderType === "steel") return 0.5;
  if (moveType === "normal" && defenderType === "ghost") return 0;

  // ===== FIRE =====
  if (moveType === "fire" && ["grass","ice","bug","steel"].includes(defenderType)) return 2;
  if (moveType === "fire" && ["fire","water","rock","dragon"].includes(defenderType)) return 0.5;

  // ===== WATER =====
  if (moveType === "water" && ["fire","rock","ground"].includes(defenderType)) return 2;
  if (moveType === "water" && ["water","grass","dragon"].includes(defenderType)) return 0.5;

  // ===== ELECTRIC =====
  if (moveType === "electric" && ["water","flying"].includes(defenderType)) return 2;
  if (moveType === "electric" && ["electric","grass","dragon"].includes(defenderType)) return 0.5;
  if (moveType === "electric" && defenderType === "ground") return 0;

  // ===== GRASS =====
  if (moveType === "grass" && ["water","rock","ground"].includes(defenderType)) return 2;
  if (moveType === "grass" && ["fire","grass","poison","flying","bug","dragon","steel"].includes(defenderType)) return 0.5;

  // ===== ICE =====
  if (moveType === "ice" && ["grass","ground","flying","dragon"].includes(defenderType)) return 2;
  if (moveType === "ice" && ["fire","water","ice","steel"].includes(defenderType)) return 0.5;

  // ===== FIGHTING =====
  if (moveType === "fighting" && ["normal","rock","ice","dark","steel"].includes(defenderType)) return 2;
  if (moveType === "fighting" && ["poison","flying","psychic","bug","fairy"].includes(defenderType)) return 0.5;
  if (moveType === "fighting" && defenderType === "ghost") return 0;

  // ===== POISON =====
  if (moveType === "poison" && ["grass","fairy"].includes(defenderType)) return 2;
  if (moveType === "poison" && ["poison","ground","rock","ghost"].includes(defenderType)) return 0.5;
  if (moveType === "poison" && defenderType === "steel") return 0;

  // ===== GROUND =====
  if (moveType === "ground" && ["fire","electric","poison","rock","steel"].includes(defenderType)) return 2;
  if (moveType === "ground" && ["grass","bug"].includes(defenderType)) return 0.5;
  if (moveType === "ground" && defenderType === "flying") return 0;

  // ===== FLYING =====
  if (moveType === "flying" && ["grass","fighting","bug"].includes(defenderType)) return 2;
  if (moveType === "flying" && ["electric","rock","steel"].includes(defenderType)) return 0.5;

  // ===== PSYCHIC =====
  if (moveType === "psychic" && ["fighting","poison"].includes(defenderType)) return 2;
  if (moveType === "psychic" && ["psychic","steel"].includes(defenderType)) return 0.5;
  if (moveType === "psychic" && defenderType === "dark") return 0;

  // ===== BUG =====
  if (moveType === "bug" && ["grass","psychic","dark"].includes(defenderType)) return 2;
  if (moveType === "bug" && ["fire","fighting","poison","flying","ghost","steel","fairy"].includes(defenderType)) return 0.5;

  // ===== ROCK =====
  if (moveType === "rock" && ["fire","ice","flying","bug"].includes(defenderType)) return 2;
  if (moveType === "rock" && ["fighting","ground","steel"].includes(defenderType)) return 0.5;

  // ===== GHOST =====
  if (moveType === "ghost" && ["ghost","psychic"].includes(defenderType)) return 2;
  if (moveType === "ghost" && defenderType === "dark") return 0.5;
  if (moveType === "ghost" && defenderType === "normal") return 0;

  // ===== DRAGON =====
  if (moveType === "dragon" && defenderType === "dragon") return 2;
  if (moveType === "dragon" && defenderType === "steel") return 0.5;
  if (moveType === "dragon" && defenderType === "fairy") return 0;

  // ===== DARK =====
  if (moveType === "dark" && ["psychic","ghost"].includes(defenderType)) return 2;
  if (moveType === "dark" && ["fighting","dark","fairy"].includes(defenderType)) return 0.5;

  // ===== STEEL =====
  if (moveType === "steel" && ["ice","rock","fairy"].includes(defenderType)) return 2;
  if (moveType === "steel" && ["fire","water","electric","steel"].includes(defenderType)) return 0.5;

  // ===== FAIRY =====
  if (moveType === "fairy" && ["fighting","dragon","dark"].includes(defenderType)) return 2;
  if (moveType === "fairy" && ["fire","poison","steel"].includes(defenderType)) return 0.5;

  return 1;
};
