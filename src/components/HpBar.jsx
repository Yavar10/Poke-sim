import { styles } from "../styles/styles";

export default function HpBar({ hp, maxHp }) {
  const pct = (hp / maxHp) * 100;
  const hpColor =
  pct > 50 ? "#4caf50" :
  pct > 20 ? "#ffc107" :
  "#f44336";
  return (
    <>
      <div style={styles.hpOuter}>
  <div
    style={{
      ...styles.hpInner,
      width: `${pct}%`,
      background: hpColor
    }}
  />
</div>

      <small>{hp} / {maxHp}</small>
    </>
  );
}
