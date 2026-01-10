import { styles } from "../styles/styles";

export default function HpBar({ hp, maxHp }) {
  const pct = (hp / maxHp) * 100;
  return (
    <>
      <div style={styles.hpOuter}>
        <div style={{ ...styles.hpInner, width: `${pct}%` }} />
      </div>
      <small>{hp} / {maxHp}</small>
    </>
  );
}
