import { useEffect, useState } from "react";
import { POKEMON } from "./data/pokemon";
import { TYPE_BG_DARK } from "./data/typeColors";
import { stageMultiplier } from "./data/stageMultiplier";
import { effectiveness } from "./utils/effectiveness";
import { buildPokemon } from "./utils/buildPokemon";
import { hitSound, faintSound } from "./audio/sounds";
import Selection from "./components/Selection";
import BattleRow from "./components/BattleRow";
import { styles } from "./styles/styles";


//AUDIOOOOOOOOOO

//BUFFSS DEBUFFFSSS


//Moves DB----------------------------------------------------------------------------



//------------POKEMONNSSS DBBBBB-------------------------------------------------




//TYPE MATCHUPS



/* =========================================================
   BUILD BATTLE-READY POKEMON
   ========================================================= */


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

  let didPlayerFaint=false;
  let didEnemyFaint=false;
  /* ================= PLAYER ATTACK ================= */
const strg=()=>{
        const sdmg = Math.floor(player.maxHp/5);
        const dmg = Math.floor(4*player.attack/50.0);
        setEnemy((e) => ({
          ...e,
          hp: Math.max(e.hp - dmg, 0)
        }));
        setPlayer((e) => ({
          ...e,
          hp: Math.max(e.hp - sdmg, 0)
        }));
        setLog(`${player.name} has no moves left!`);
        setLog(`${player.name} used Struggle`);
        enemyTurn();
      }
const strge=()=>{
        const dmg = Math.floor(enemy.maxHp/5);
        const sdmg = Math.floor(4*enemy.attack/50.0);
        setEnemy((e) => ({
          ...e,
          hp: Math.max(e.hp - dmg, 0)
        }));
        setPlayer((e) => ({
          ...e,
          hp: Math.max(e.hp - sdmg, 0)
        }));
        setLog(`${enemy.name} has no moves left!`);
        setLog(`${enemy.name} used Struggle`);

 setTimeout(() => {
      if (newHp === 0) {
        faintSound.play();
        setLog(`${player.name} fainted!`);
        setGameOver(true);
        didPlayerFaint=true
        return
      } else {
        setLog(`What will ${player.name} do?`);
        setLocked(false);
      }
    }, 1200);

    if(newHp==0)
      return;
        setTimeout(() => {
      if (player.drain === true&&!didPlayerFaint) {
        const heal = Math.floor(player.hp * 0.125);
        setEnemy((e) => ({
          ...e,
          hp: Math.min(e.hp + heal, e.maxHp)
        }));
        setPlayer((e) => ({
          ...e,
          hp: Math.max(e.hp - heal, 0)
        }));
        setLog(`${enemy.name} regained health!`);
      }

      if (enemy.drain === true&&!didEnemyFaint) {
        const heal = Math.floor(enemy.hp * 0.125);
        setPlayer((e) => ({
          ...e,
          hp: Math.min(e.hp + heal, e.maxHp)
        }));
        setEnemy((e) => ({
          ...e,
          hp: Math.max(e.hp - heal, 0)
        }));
        setLog(`${player.name} regained health!`);
      }
    }, 1100);

   
      }
const attack = (move) => {

  if (locked || gameOver || move.pp <= 0) return;
  setLocked(true);

  // Reduce PP
  setPlayer((p) => ({
    ...p,
    moves: p.moves.map((m) =>
      m.name === move.name ? { ...m, pp: m.pp - 1 } : m
    )
  }));

  // Status move
  if (move.effect === "ATTACK_DOWN") {
    setEnemy((e) => ({
      ...e,
      attackStage: Math.max(e.attackStage - 1, -2)
    }));
    setLog(`${enemy.name}'s Attack fell!`);
    return enemyTurn();
  }
  if (move.effect === "ATTACK_UP") {
    setPlayer((e) => ({
      ...e,
      attackStage: Math.min(e.attackStage + 1, 2)
    }));
    setLog(`${player.name}'s Attack rose!`);
    return enemyTurn();
  }
  if (move.effect === "DEFENCE_DOWN") {
    setPlayer((e) => ({
      ...e,
      attackStage: Math.min(e.attackStage + 1, 2)
    }));
    setLog(`${enemy.name}'s Defence fell!`);
    return enemyTurn();
  }
  
  if (move.effect === "DEFENCE_UP") {
    setEnemy((e) => ({
      ...e,
      attackStage: Math.max(e.attackStage - 1, -2)
    }));
    setLog(`${player.name}'s Defence rose!`);
    return enemyTurn();
  }
  const mult =
    stageMultiplier[player.attackStage] *
    effectiveness(move.type, enemy.type);

  const dmg = Math.floor(
    move.damage * mult * (player.attack / 50.0)
  );

  const newHp = Math.max(enemy.hp - dmg, 0);

  hitSound.play();
  setEnemyHit(true);
  //setEnemy({ ...enemy, hp: newHp });
  setEnemy((e) => ({ ...e, hp: newHp }));

  let text = `${player.name} used ${move.name}!`;
  setLog(text);

  // Drain message (delayed so it doesn't overwrite)
  if (move.effect === "DRAIN") {
    setTimeout(() => {
      setEnemy((p) => ({ ...p, drain: true }));
      setLog(`${enemy.name} has been seeded!`);
    }, 600);
  }

  // Effectiveness message
  setTimeout(() => {
    let effText = `${player.name} used ${move.name}!`;
    if (mult > 1) effText += " It's super effective!";
    if (mult < 1) effText += " It's not very effective...";
    setLog(effText);
  }, 600);

  setTimeout(() => setEnemyHit(false), 300);

  if (newHp === 0) {
    setTimeout(() => {
      faintSound.play();
      setLog(`${enemy.name} fainted!`);
      didEnemyFaint=true;
      setGameOver(true);
      return
    }, 1600);
    return;
  }

  // abhi ke liye no speed imp
  setTimeout(() => {
        (enemy.moves.reduce((sum, move) => sum + move.pp)==0)
        ?
        strge()
        :
    enemyTurn();
  }, 1200);
};


//enemy turnnnnnnnnn--------------------------------------------------------------
const enemyTurn = () => {
  setTimeout(() => {
    let choice=0;
    let move=enemy.moves[0];
    const num=enemy.moves.length;
    do{choice= Math.floor((Math.random() * 100) / (100/num));
        move= enemy.moves[choice];
        console.log(enemy.moves[choice].name)}
    while(enemy.moves[choice].pp<=0);

    setEnemy((e) => ({
      ...e,
      moves: e.moves.map((m) =>
        m.name === move.name ? { ...m, pp: m.pp - 1 } : m
      )
    }));

    if (move.effect === "ATTACK_DOWN") {
  setPlayer((e) => ({
    ...e,
    attackStage: Math.max(e.attackStage - 1, -2)
  }));
  setLog(`${player.name}'s Attack fell!`);
  return enemyTurn();
}

if (move.effect === "ATTACK_UP") {
  setEnemy((e) => ({
    ...e,
    attackStage: Math.min(e.attackStage + 1, 2)
  }));
  setLog(`${enemy.name}'s Attack rose!`);
  return enemyTurn();
}

if (move.effect === "DEFENCE_DOWN") {
  setEnemy((e) => ({
    ...e,
    attackStage: Math.min(e.attackStage + 1, 2)
  }));
  setLog(`${player.name}'s Defence fell!`);
  return enemyTurn();
}

if (move.effect === "DEFENCE_UP") {
  setPlayer((e) => ({
    ...e,
    attackStage: Math.max(e.attackStage - 1, -2)
  }));
  setLog(`${enemy.name}'s Defence rose!`);
  return enemyTurn();
}


    const mult =
      stageMultiplier[enemy.attackStage] *
      effectiveness(move.type, player.type);

    const dmg = Math.floor(
      move.damage * mult * (enemy.attack / 50.0)
    );

    const newHp = Math.max(player.hp - dmg, 0);

    hitSound.play();
    setPlayerHit(true);
    //setPlayer({ ...player, hp: newHp });
    setPlayer((p) => ({ ...p, hp: newHp }));
    
    let text = `${enemy.name} used ${move.name}!`;
    setLog(text);

    // Drain seed message
    if (move.effect === "DRAIN") {
      setTimeout(() => {
        setPlayer((p) => ({ ...p, drain: true }));
        setLog(`${player.name} has been seeded!`);
      }, 600);
    }

    // Effectiveness text
    setTimeout(() => {
      let effText = `${enemy.name} used ${move.name}!`;
      if (mult > 1) effText += " It's super effective!";
      if (mult < 1) effText += " It's not very effective...";
      setLog(effText);
    }, 1000);

    setTimeout(() => setPlayerHit(false), 300);

  setTimeout(() => {
      if (newHp === 0) {
        faintSound.play();
        setLog(`${player.name} fainted!`);
        setGameOver(true);
        didPlayerFaint=true
        return
      } else {
        setLog(`What will ${player.name} do?`);
        setLocked(false);
      }
    }, 1200);

if(newHp==0)
  return;
    // Drain resolution text
    setTimeout(() => {
      if (player.drain === true&&!didPlayerFaint) {
        const heal = Math.floor(player.hp * 0.125);
        setEnemy((e) => ({
          ...e,
          hp: Math.min(e.hp + heal, e.maxHp)
        }));
        setPlayer((e) => ({
          ...e,
          hp: Math.max(e.hp - heal, 0)
        }));
        setLog(`${enemy.name} regained health!`);
      }

      if (enemy.drain === true&&!didEnemyFaint) {
        const heal = Math.floor(enemy.hp * 0.125);
        setPlayer((e) => ({
          ...e,
          hp: Math.min(e.hp + heal, e.maxHp)
        }));
        setEnemy((e) => ({
          ...e,
          hp: Math.max(e.hp - heal, 0)
        }));
        setLog(`${player.name} regained health!`);
      }
    }, 1400);
  }, 800);
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
                  player.moves[0].pp+
                  player.moves[0].pp+
                  player.moves[0].pp)>0?
                <div style={{
    ...styles.moves,
    padding: 8,
    borderRadius: 6
  }}>
                {player.moves.map((m) => (
                  <button 
                    key={m.name}
                    disabled={m.pp === 0}
                    onClick={() => attack(m)}
                    style={{...styles.button,backgroundColor: TYPE_BG_DARK[m.type] || "#444"}}
                  >
                    {m.name} ({m.pp})
                  </button>
                ))}
              </div>:
              <div style={styles.moves}>
                
                  <button
                    key="Struggle"
                    onClick={() => strg()}
                    style={styles.button}
                  >
                    Struggle
                  </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   SELECTION UI (ALIGNED CARDS)
   ========================================================= */


/* =========================================================
   BATTLE UI COMPONENTS
   ========================================================= */


/* =========================================================
   STYLES
   ========================================================= */



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