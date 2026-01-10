import { POKEMON } from "../data/pokemon";
import { styles } from "../styles/styles";

export default function Selection({ title, onSelect }) {
  return (
    <div style={styles.selectionWrapper}>
      <h3>{title}</h3>
      <div style={styles.selectionGrid}>
        {Object.keys(POKEMON).map((key) => (
          <button
            key={key}
            style={styles.selectCard}
            onClick={() => onSelect(key)}
          >
            <img
              src={POKEMON[key].sprites.front}
              alt={POKEMON[key].name}
              style={styles.selectSprite}
            />
            <div style={styles.selectName}>{POKEMON[key].name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
