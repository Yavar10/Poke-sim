import HpBar from "./HpBar";
import { styles } from "../styles/styles";
import para from "../assets/para.png"
import  burnt  from "../assets/burn.png";
import  poison  from "../assets/poison.png";
import seed from "../assets/seed.png"

export default function BattleRow({ pokemon, hit, reverse }) {
  return (
    <div style={{ ...styles.row, flexDirection: reverse ? "row-reverse" : "row" }}>
      
      <div style={styles.info}>
        <strong>{pokemon.name}</strong>
        {(pokemon.status==="paralyzed")? <img style={{gap:"2px",marginBottom:"1px"}} height={20} width={50} src={para} />:""}
        {(pokemon.status==="poisoned")? <img style={{gap:"2px",marginBottom:"1px"}} height={20} width={50} src={poison} />:""}
        {(pokemon.status==="burnt")? <img style={{gap:"2px",marginBottom:"1px"}} height={20} width={50} src={burnt} />:""}
        {(pokemon.drain===true)? <img style={{gap:"2px",marginBottom:"1px"}} height={25} width={80} src={seed} />:""}
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
