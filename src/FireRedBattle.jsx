import { useEffect, useState } from "react";

//audio files
const hitSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
);
const faintSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2585/2585-preview.mp3"
);

//buffs debuffs
const stageMultiplier = {
  "-2": 0.67,
  "-1": 0.8,
  "0": 1,
  "1": 1.5,
  "2": 2
};

//move db
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

//pkmn database
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

//type matchups abhi sirf elemental 
const effectiveness = (moveType, defenderType) => {
  if (moveType === "fire" && defenderType === "grass") return 2;
  if (moveType === "water" && defenderType === "fire") return 2;
  if (moveType === "grass" && defenderType === "water") return 2;
  if (moveType === "water" && defenderType === "grass") return 0.5;
  if (moveType === "grass" && defenderType === "fire") return 0.5;
  if (moveType === "fire" && defenderType === "water") return 0.5;
  return 1;
};

// main code
const buildPokemon = (base, side) => ({
  ...base,
  hp: base.maxHp,
  attackStage: 0,
  sprite: side === "player" ? base.sprites.back : base.sprites.front,
  moves: base.moves.map((m) => ({ ...MOVES[m] }))
});

//main comp
export default function FireRedBattle() {
  const [player, setPlayer] = useState(null);
  const [enemy, setEnemy] = useState(null);

  const [phase, setPhase] = useState("INTRO"); // game flow control
  const [pendingPlayer, setPendingPlayer] = useState(null);

  const [log, setLog] = useState(""); // battle text box
  const [locked, setLocked] = useState(true); // input disable beech mai
  const [gameOver, setGameOver] = useState(false);
  const [intro, setIntro] = useState(true);

  const [playerHit, setPlayerHit] = useState(false);
  const [enemyHit, setEnemyHit] = useState(false);

  // intro fade + selection start 
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
      setPhase("PICK_PLAYER");
    }, 600);
  }, []);

  // battle start ka flow
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

  // struggle code karne mai dimag kharab ho gya
  const strg = () => {
    const sdmg = Math.floor(player.maxHp / 5);
    const dmg = Math.floor(4 * player.attack / 50.0);
    setEnemy((e) => ({ ...e, hp: Math.max(e.hp - dmg, 0) }));
    setPlayer((e) => ({ ...e, hp: Math.max(e.hp - sdmg, 0) }));
    setLog(`${player.name} used Struggle!`);
  };

  const strge = () => {
    const dmg = Math.floor(enemy.maxHp / 5);
    const sdmg = Math.floor(4 * enemy.attack / 50.0);
    setEnemy((e) => ({ ...e, hp: Math.max(e.hp - dmg, 0) }));
    setPlayer((e) => ({ ...e, hp: Math.max(e.hp - sdmg, 0) }));
    setLog(`${enemy.name} used Struggle!`);
  };

  //player turn
  const attack = (move) => {
    if (locked || gameOver || move.pp <= 0) return;
    setLocked(true);

    setPlayer((p) => ({
      ...p,
      moves: p.moves.map((m) =>
        m.name === move.name ? { ...m, pp: m.pp - 1 } : m
      )
    }));

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

    const dmg = Math.floor(move.damage * mult * (player.attack / 50.0));
    const newHp = Math.max(enemy.hp - dmg, 0);

    hitSound.play();
    setEnemyHit(true);
    setEnemy((e) => ({ ...e, hp: newHp }));

    setLog(`${player.name} used ${move.name}!`);

    if (move.effect === "DRAIN") {
      setTimeout(() => {
        setEnemy((p) => ({ ...p, drain: true }));
        setLog(`${enemy.name} has been seeded!`);
      }, 600);
    }

    setTimeout(() => {
      let eff = `${player.name} used ${move.name}!`;
      if (mult > 1) eff += " It's super effective!";
      if (mult < 1) eff += " It's not very effective...";
      setLog(eff);
    }, 600);

    if (newHp === 0) {
      setTimeout(() => {
        faintSound.play();
        setLog(`${enemy.name} fainted!`);
        setGameOver(true);
      }, 1600);
      return;
    }

    setTimeout(() => enemyTurn(), 1200);
  };

  //enemy turn
  const enemyTurn = () => {
    setTimeout(() => {
      let move;
      do {
        move = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
      } while (move.pp <= 0);

      setEnemy((e) => ({
        ...e,
        moves: e.moves.map((m) =>
          m.name === move.name ? { ...m, pp: m.pp - 1 } : m
        )
      }));

      const mult =
        stageMultiplier[enemy.attackStage] *
        effectiveness(move.type, player.type);

      const dmg = Math.floor(move.damage * mult * (enemy.attack / 50.0));
      const newHp = Math.max(player.hp - dmg, 0);

      hitSound.play();
      setPlayerHit(true);
      setPlayer((p) => ({ ...p, hp: newHp }));

      setLog(`${enemy.name} used ${move.name}!`);

      setTimeout(() => {
        let eff = `${enemy.name} used ${move.name}!`;
        if (mult > 1) eff += " It's super effective!";
        if (mult < 1) eff += " It's not very effective...";
        setLog(eff);
      }, 800);

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

  //main frontend
  return (
    <div style={styles.container}>
      <h1 className="font-mono text-3xl tracking-widest">POKE LINK</h1>

      <div style={{ ...styles.screen, opacity: intro ? 0 : 1 }}>
        {phase === "PICK_PLAYER" && (
          <Selection title="Choose your Pokémon" onSelect={(k) => {
            setPendingPlayer(k);
            setPhase("PICK_ENEMY");
          }} />
        )}

        {phase === "PICK_ENEMY" && (
          <Selection title="Choose enemy Pokémon" onSelect={(k) =>
            startBattle(pendingPlayer, k)
          } />
        )}

        {phase === "BATTLE" && (
          <>
            <BattleRow pokemon={enemy} hit={enemyHit} />
            <BattleRow pokemon={player} hit={playerHit} reverse />
            <div style={styles.textBox}>{log}</div>

            {!gameOver && (
              <div style={styles.moves}>
                {player.moves.some(m => m.pp > 0)
                  ? player.moves.map((m) => (
                      <button key={m.name} disabled={m.pp === 0}
                        onClick={() => attack(m)} style={styles.button}>
                        {m.name} ({m.pp})
                      </button>
                    ))
                  : <button onClick={strg} style={styles.button}>Struggle</button>
                }
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// selection page
function Selection({ title, onSelect }) {
  return (
    <div style={styles.selectionWrapper}>
      <h3>{title}</h3>
      <div style={styles.selectionGrid}>
        {Object.keys(POKEMON).map((key) => (
          <button key={key} style={styles.selectCard}
            onClick={() => onSelect(key)}>
            <img src={POKEMON[key].sprites.front}
              alt={POKEMON[key].name} style={styles.selectSprite} />
            <div style={styles.selectName}>{POKEMON[key].name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

//battle ki array/row kaesi render hogi
function BattleRow({ pokemon, hit, reverse }) {
  return (
    <div style={{ ...styles.row, flexDirection: reverse ? "row-reverse" : "row" }}>
      <div style={styles.info}>
        <strong>{pokemon.name}</strong>
        <HpBar hp={pokemon.hp} maxHp={pokemon.maxHp} />
      </div>
      <img src={pokemon.sprite}
        alt={pokemon.name}
        style={{ ...styles.sprite, ...(hit ? styles.flicker : {}) }} />
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

//CSS styles
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
    transition: "opacity 1s"
  },
  row: { display: "flex", justifyContent: "space-between", marginBottom: 20 },
  sprite: { width: 100, imageRendering: "pixelated" },
  info: { width: "60%" },

  hpOuter: { height: 10, border: "2px solid #000", background: "#ccc" },
  hpInner: { height: "100%", background: "#4caf50" },

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8
  },
  selectSprite: { maxHeight: 80, imageRendering: "pixelated" },
  selectName: { fontWeight: "bold", fontSize: 14 },

  flicker: { animation: "flicker 0.3s linear 3" }
};

// SPRITES KA   FLICKER ANIMATION 
document.styleSheets[0].insertRule(`
@keyframes flicker {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}
`, document.styleSheets[0].cssRules.length);
