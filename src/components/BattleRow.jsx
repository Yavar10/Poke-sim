import HpBar from "./HpBar";
import { styles } from "../styles/styles";

export default function BattleRow({ pokemon, hit, reverse }) {
  return (
    <div style={{ ...styles.row, flexDirection: reverse ? "row-reverse" : "row" }}>
      <div style={styles.info}>
        <strong>{pokemon.name}</strong>
        <HpBar hp={pokemon.hp} maxHp={pokemon.maxHp} />
      </div>
      <img
        src={pokemon.sprite}
        alt={pokemon.name}
        style={{ ...styles.sprite, ...(hit ? styles.flicker : {}) }}
      />
    </div>
  );
}
