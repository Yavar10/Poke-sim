import { useEffect, useState } from "react";
import { POKEMON } from "./data/pokemon";
import { TYPE_BG_DARK } from "./data/typeColors";
//import { stageMultiplier } from "./data/stageMultiplier";
//import { effectiveness } from "./utils/effectiveness";
import { buildPokemon } from "./utils/buildPokemon";
//import { hitSound, faintSound } from "./audio/sounds";
import Selection from "./components/Selection";
import BattleRow from "./components/BattleRow";
import { styles } from "./styles/styles";

import { attack } from "./battle/attack";

import retry from "./assets/retry.svg"



/* =========================================================
MAIN COMPONENT
   ========================================================= */
export default function FireRedBattle() {
  const [player, setPlayer] = useState(null);
  const [enemy, setEnemy] = useState(null);

  const [phase, setPhase] = useState("INTRO"); // INTRO → PICK_PLAYER → PICK_ENEMY → BATTLE
  const [pendingPlayer, setPendingPlayer] = useState(null);

  const [log, setLog] = useState("");
  const [locked, setLocked] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [intro, setIntro] = useState(true);

  const [playerHit, setPlayerHit] = useState(false);
  const [enemyHit, setEnemyHit] = useState(false);

  /* ================= INTRO ================= */
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
      setPhase("PICK_PLAYER");
    }, 600);
  }, []);

  /* ================= START BATTLE ================= */
  const startBattle = (playerKey, enemyKey) => {
    setPlayer(buildPokemon(POKEMON[playerKey], "player"));
    setEnemy(buildPokemon(POKEMON[enemyKey], "enemy"));
    setPhase("BATTLE");

    setTimeout(() => setLog(`A wild ${POKEMON[enemyKey].name} appeared!`), 400);
    setTimeout(() => {
      setLog(`What will ${POKEMON[playerKey].name} do?`);
      setLocked(false);
    }, 1400);
  };



  return (
    <div style={styles.container}>
            <h1 className="font-mono text-3xl text-center items-center tracking-widest uppercase">
  POKE LINK
</h1>

      <div style={{ ...styles.screen, opacity: intro ? 0 : 1 }}>
        {phase === "PICK_PLAYER" && (
          <Selection
            title="Choose Your Pokémon"
            onSelect={(key) => {
              setPendingPlayer(key);
              setPhase("PICK_ENEMY");
            }}
          />
        )}

        {phase === "PICK_ENEMY" && (
          <Selection
            title="Choose Enemy Pokémon"
            onSelect={(enemyKey) => startBattle(pendingPlayer, enemyKey)}
          />
        )}

        {phase === "BATTLE" && (
          <>
            <BattleRow pokemon={enemy} hit={enemyHit}  />
            <BattleRow pokemon={player} hit={playerHit} reverse />
            <div style={styles.textBox}>{log}</div>

            {!gameOver && (
                  (player.moves[0].pp+
                  player.moves[1].pp+
                  player.moves[2].pp+
                  player.moves[3].pp)>0?
                <div style={{
    ...styles.moves,
    padding: 8,
    borderRadius: 6
  }}>
                {player.moves.map((m) => (
                  <button 
                    key={m.name}
                    disabled={m.pp === 0||locked}
                    onClick={() => attack(player,enemy,setPlayer,setEnemy,setLog,m,setPlayerHit,setEnemyHit,setGameOver,true,setLocked)}
                    style={{...styles.button,backgroundColor: TYPE_BG_DARK[m.type] || "#444"}}
                  >
                   <div className="info"> {m.name} (pp:{m.pp}|pow:{m.damage})</div>
                  </button>
                ))}
              </div>:
              <div style={styles.moves}>
                
                  <button
                    key="Struggle"
                    onClick={() => attack(player,enemy,setPlayer,setEnemy,setLog,"STRUGGLE",setPlayerHit,setEnemyHit,setGameOver,true,setLocked)}
                    style={styles.button}
                  >
                    Struggle
                  </button>
              </div>
            )}
            {gameOver && 
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><button style={{...styles.button,display:"flex",gap:"4px",justifyContent:"center",alignItems:"center"}} onClick={()=>{
              window.location.reload()
            }} ><div style={{color:"black"}}>Retry</div><img height={15} width={15} src={retry} alt="" /></button></div>
            }
          </>
        )}
      </div>
      <div style={{display:"flex", justifyItems:"center",alignItems:"center",gap:"10px"}}>
      <img  height={14} width={14} src={"https://archives.bulbagarden.net/media/upload/thumb/0/0b/Legends_Arceus_Pok%C3%A9_Ball.png/225px-Legends_Arceus_Pok%C3%A9_Ball.png"} alt="" />
  <h5>made by <a target="_blank" style={{textDecoration:"none"}} href="https://github.com/Yavar10">yavar</a></h5> 
      <img height={14} width={14} src={"https://archives.bulbagarden.net/media/upload/thumb/0/0b/Legends_Arceus_Pok%C3%A9_Ball.png/225px-Legends_Arceus_Pok%C3%A9_Ball.png"} alt="" />
      </div>
    </div>
  );
}

/* =========================================================
   KEYFRAMES
   ========================================================= */
document.styleSheets[0].insertRule(`
@keyframes flicker {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}
`, document.styleSheets[0].cssRules.length);