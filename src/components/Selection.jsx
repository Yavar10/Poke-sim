import { POKEMON } from "../data/pokemon";
import { styles } from "../styles/styles";

export default function Selection({ title, onSelect }) {
  return (
    <div style={styles.selectionWrapper}>
           <img height={48} width={48} src={"https://archives.bulbagarden.net/media/upload/thumb/0/0b/Legends_Arceus_Pok%C3%A9_Ball.png/225px-Legends_Arceus_Pok%C3%A9_Ball.png"} alt="" />
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
