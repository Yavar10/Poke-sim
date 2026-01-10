import { useEffect, useState } from "react";

//AUDIOOOOOOOOOO
const hitSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
);
const faintSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2585/2585-preview.mp3"
);

//BUFFSS DEBUFFFSSS
const stageMultiplier = {
  "-2": 0.67,
  "-1": 0.8,
  "0": 1,
  "1": 1.5,
  "2": 2
};

//Moves DB
const MOVES = {
TACKLE: { name: "Tackle", damage: 15, pp: 10, type: "normal" },
STRUGGLE: { name: "Struggle", damage: 15, pp: 10, type: "normal" },
SCRATCH: { name: "Scratch", damage: 15, pp: 10, type: "normal" },
VINE_WHIP: { name: "Vine Whip", damage: 18, pp: 8, type: "grass" },
EMBER: { name: "Ember", damage: 18, pp: 8, type: "fire" },
WATER_GUN: { name: "Water Gun", damage: 18, pp: 8, type: "water" },
GROWL: { name: "Growl", damage: 0, pp: 5, effect: "ATTACK_DOWN" },
LEER: { name: "Leer", damage: 0, pp: 5, effect: "DEFENSE_DOWN" },
LEECH_SEED: { name: "Leech Seed", damage: 0, pp: 1, type: "grass", effect: "DRAIN" },
};

/* =========================================================
   POKEMON DATABASE
   ========================================================= */
const POKEMON = {
  BULBASAUR: {
    name: "Bulbasaur",
    type: "grass",
    maxHp: 53,
    attack: 29,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif"
    },
    moves: ["TACKLE","VINE_WHIP","LEER","LEECH_SEED"],
    drain:false
  },
  SQUIRTLE: {
    name: "Squirtle",
    type: "water",
    maxHp: 58,
    attack: 24,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif"
    },
    moves: ["TACKLE", "WATER_GUN", "GROWL", "LEER"],
    drain:false
  },
  CHARMANDER: {
    name: "Charmander",
    type: "fire",
    maxHp: 44,
    attack: 28,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif"
    },
    moves: ["SCRATCH", "EMBER", "GROWL", "LEER"],
    drain:false
  }
};

/* =========================================================
   TYPE EFFECTIVENESS
   ========================================================= */
const effectiveness = (moveType, defenderType) => {
  if (moveType === "fire" && defenderType === "grass") return 2;
  if (moveType === "water" && defenderType === "fire") return 2;
  if (moveType === "grass" && defenderType === "water") return 2;
  if (moveType === "water" && defenderType === "grass") return 0.5;
  if (moveType === "grass" && defenderType === "fire") return 0.5;
  if (moveType === "fire" && defenderType === "water") return 0.5;
  return 1;
};

/* =========================================================
   BUILD BATTLE-READY POKEMON
   ========================================================= */
const buildPokemon = (base, side) => ({
  ...base,
  hp: base.maxHp,
  attackStage: 0,
  sprite: side === "player" ? base.sprites.back : base.sprites.front,
  moves: base.moves.map((m) => ({ ...MOVES[m] }))
});

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
      if (player.drain === true) {
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

      if (enemy.drain === true) {
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

    setTimeout(() => {
      if (newHp === 0) {
        faintSound.play();
        setLog(`${player.name} fainted!`);
        setGameOver(true);
      } else {
        setLog(`What will ${player.name} do?`);
        setLocked(false);
      }
    }, 1200);
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
      setGameOver(true);
    }, 1600);
    return;
  }

  // abhi ke liye no speed imp
  setTimeout(() => {
        (enemy.moves[0].pp+
        enemy.moves[2].pp+
        enemy.moves[3].pp+
        enemy.moves[1].pp)==0
        ?
        strge()
        :
    enemyTurn();
  }, 1200);
};


//enemy turnnnnnnnnn
const enemyTurn = () => {
  setTimeout(() => {
    let choice=0;
    let move=enemy.moves[0];
    do{choice= Math.floor((Math.random() * 100) / 25);
        move= enemy.moves[choice];
        console.log(enemy.moves[choice].pp)}
    while(enemy.moves[choice].pp<=0);

    setEnemy((e) => ({
      ...e,
      moves: e.moves.map((m) =>
        m.name === move.name ? { ...m, pp: m.pp - 1 } : m
      )
    }));

    if (move.effect === "ATTACK_DOWN") {
      setPlayer((p) => ({
        ...p,
        attackStage: Math.max(p.attackStage - 1, -2)
      }));
      setLog(`${player.name}'s Attack fell!`);
      setLocked(false);
      return;
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

    // Drain resolution text
    setTimeout(() => {
      if (player.drain === true) {
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

      if (enemy.drain === true) {
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

    setTimeout(() => {
      if (newHp === 0) {
        faintSound.play();
        setLog(`${player.name} fainted!`);
        setGameOver(true);
      } else {
        setLog(`What will ${player.name} do?`);
        setLocked(false);
      }
    }, 1200);
  }, 800);
};




  return (
    <div style={styles.container}>
            <h1 className="font-mono text-3xl text-center tracking-widest uppercase">
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
                <div style={styles.moves}>
                {player.moves.map((m) => (
                  <button
                    key={m.name}
                    disabled={m.pp === 0}
                    onClick={() => attack(m)}
                    style={styles.button}
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
function Selection({ title, onSelect }) {
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

/* =========================================================
   BATTLE UI COMPONENTS
   ========================================================= */
function BattleRow({ pokemon, hit, reverse }) {
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

function HpBar({ hp, maxHp }) {
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

/* =========================================================
   STYLES
   ========================================================= */
const styles = {
  container: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  height: "100vh",
  fontFamily: `"Courier New", Courier, monospace`,
  letterSpacing: "0.15em"
},
screen: {
    width: 400,
    border: "4px solid #000",
    padding: 12,
    fontFamily: "monospace",
    transition: "opacity 1s"
  },

  row: { display: "flex", justifyContent: "space-between", marginBottom: 20 },
  sprite: { width: 100, imageRendering: "pixelated" },
  info: { width: "60%" },

  hpOuter: { height: 10, border: "2px solid #000", background: "#ccc" },
  hpInner: { height: "100%", background: "#4caf50", transition: "width 0.3s" },

  textBox: { border: "3px solid #000", padding: 10, minHeight: 50, marginBottom: 10 },
  moves: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 },
  button: { padding: 8, border: "2px solid #000", cursor: "pointer" },

  selectionWrapper: { textAlign: "center" },
  selectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12,
    justifyItems: "center"
  },
  selectCard: {
    width: 120,
    height: 120,
    border: "2px solid #000",
    background: "#f5f5f5",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8
  },
  selectSprite: {
    maxHeight: 80,
    maxWidth: "100%",
    imageRendering: "pixelated"
  },
  selectName: { fontWeight: "bold", fontSize: 14 },

  flicker: { animation: "flicker 0.3s linear 3" }
};

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