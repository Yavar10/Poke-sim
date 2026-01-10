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

//Moves DB----------------------------------------------------------------------------
const MOVES = {
  TACKLE: { name: "Tackle", damage: 15, pp: 10, type: "normal" },
  STRUGGLE: { name: "Struggle", damage: 15, pp: 10, type: "normal" },
  SCRATCH: { name: "Scratch", damage: 15, pp: 10, type: "normal" },
  SLASH: { name: "Slash", damage: 22, pp: 5, type: "normal" },
  BITE: { name: "Bite", damage: 18, pp: 8, type: "normal" },
  BODY_SLAM: { name: "Body Slam", damage: 25, pp: 5, type: "normal" },

  VINE_WHIP: { name: "Vine Whip", damage: 18, pp: 8, type: "grass" },
  RAZOR_LEAF: { name: "Razor Leaf", damage: 22, pp: 6, type: "grass" },
  SOLAR_BEAM: { name: "Solar Beam", damage: 35, pp: 3, type: "grass" },
  LEECH_SEED: { name: "Leech Seed", damage: 0, pp: 1, type: "grass", effect: "DRAIN" },

  EMBER: { name: "Ember", damage: 18, pp: 8, type: "fire" },
  FLAME_BURST: { name: "Flame Burst", damage: 24, pp: 6, type: "fire" },
  FLAMETHROWER: { name: "Flamethrower", damage: 30, pp: 5, type: "fire" },
  FIRE_BLAST: { name: "Fire Blast", damage: 40, pp: 3, type: "fire" },

  WATER_GUN: { name: "Water Gun", damage: 18, pp: 8, type: "water" },
  BUBBLE: { name: "Bubble", damage: 14, pp: 10, type: "water" },
  SURF: { name: "Surf", damage: 30, pp: 5, type: "water" },
  HYDRO_PUMP: { name: "Hydro Pump", damage: 40, pp: 3, type: "water" },

  GROWL: { name: "Growl", damage: 0, pp: 5, effect: "ATTACK_DOWN" },
  LEER: { name: "Leer", damage: 0, pp: 5, effect: "DEFENSE_DOWN" },
  GROWTH: { name: "Growth", damage: 0, pp: 5, effect: "ATTACK_UP" },
  SMOKESCREEN: { name: "Smokescreen", damage: 0, pp: 5, effect: "ACCURACY_DOWN" },
  WITHDRAW: { name: "Withdraw", damage: 0, pp: 5, effect: "DEFENSE_UP" },
  WORK_UP: { name: "Work Up", damage: 0, pp: 5, effect: "ATTACK_UP" },

THUNDERSHOCK: { name: "Thunder Shock", damage: 18, pp: 8, type: "electric" },
THUNDERBOLT: { name: "Thunderbolt", damage: 30, pp: 5, type: "electric" },
THUNDER: { name: "Thunder", damage: 40, pp: 3, type: "electric" },
THUNDER_WAVE: { name: "Thunder Wave", damage: 0, pp: 5, type: "electric", effect: "PARALYZE" },
QUICK_ATTACK: { name: "Quick Attack", damage: 18, pp: 10, type: "normal" },
TAIL_WHIP: { name: "Tail Whip", damage: 0, pp: 5, effect: "DEFENSE_DOWN" },

};


//------------POKEMONNSSS DBBBBB-------------------------------------------------
const POKEMON = {
  // ===== GEN 1 =====
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
    drain: false
  },
  IVYSAUR: {
    name: "Ivysaur",
    type: "grass",
    maxHp: 70,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ivysaur.gif"
    },
    moves: ["VINE_WHIP","RAZOR_LEAF","LEECH_SEED","GROWTH"],
    drain: false
  },
  VENUSAUR: {
    name: "Venusaur",
    type: "grass",
    maxHp: 90,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur.gif"
    },
    moves: ["RAZOR_LEAF","SOLAR_BEAM","LEECH_SEED","GROWTH"],
    drain: false
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
    moves: ["SCRATCH","EMBER","GROWL","LEER"],
    drain: false
  },
  CHARMELEON: {
    name: "Charmeleon",
    type: "fire",
    maxHp: 65,
    attack: 40,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmeleon.gif"
    },
    moves: ["EMBER","FLAME_BURST","SCRATCH","WORK_UP"],
    drain: false
  },
  CHARIZARD: {
    name: "Charizard",
    type: "fire",
    maxHp: 85,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif"
    },
    moves: ["FLAMETHROWER","FIRE_BLAST","SLASH","WORK_UP"],
    drain: false
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
    moves: ["TACKLE","WATER_GUN","GROWL","LEER"],
    drain: false
  },
  WARTORTLE: {
    name: "Wartortle",
    type: "water",
    maxHp: 72,
    attack: 38,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/wartortle.gif"
    },
    moves: ["WATER_GUN","BUBBLE","BITE","WITHDRAW"],
    drain: false
  },
  BLASTOISE: {
    name: "Blastoise",
    type: "water",
    maxHp: 92,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif"
    },
    moves: ["HYDRO_PUMP","SURF","BITE","WITHDRAW"],
    drain: false
  },

  PICHU: {
    name: "Pichu",
    type: "electric",
    maxHp: 40,
    attack: 22,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pichu.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pichu.gif"
    },
    moves: ["THUNDERSHOCK", "TAIL_WHIP", "GROWL"],
    drain: false
  },

  PIKACHU: {
    name: "Pikachu",
    type: "electric",
    maxHp: 55,
    attack: 38,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif"
    },
    moves: ["THUNDERSHOCK", "QUICK_ATTACK", "TAIL_WHIP", "THUNDER"],
    drain: false
  },

  RAICHU: {
    name: "Raichu",
    type: "electric",
    maxHp: 85,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/raichu.gif"
    },
    moves: ["THUNDERBOLT", "THUNDER", "QUICK_ATTACK", "TAIL_WHIP"],
    drain: false
  },

  // ===== GEN 2 =====
  CHIKORITA: {
    name: "Chikorita",
    type: "grass",
    maxHp: 55,
    attack: 26,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/chikorita.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/chikorita.gif"
    },
    moves: ["TACKLE","RAZOR_LEAF","GROWL","LEECH_SEED"],
    drain: false
  },
  BAYLEEF: {
    name: "Bayleef",
    type: "grass",
    maxHp: 70,
    attack: 38,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/bayleef.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bayleef.gif"
    },
    moves: ["RAZOR_LEAF","BODY_SLAM","GROWTH","LEECH_SEED"],
    drain: false
  },
  MEGANIUM: {
    name: "Meganium",
    type: "grass",
    maxHp: 90,
    attack: 55,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/meganium.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/meganium.gif"
    },
    moves: ["SOLAR_BEAM","BODY_SLAM","GROWTH","LEECH_SEED"],
    drain: false
  },

  CYNDAQUIL: {
    name: "Cyndaquil",
    type: "fire",
    maxHp: 50,
    attack: 30,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/cyndaquil.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/cyndaquil.gif"
    },
    moves: ["SCRATCH","EMBER","WORK_UP","LEER"],
    drain: false
  },
  QUILAVA: {
    name: "Quilava",
    type: "fire",
    maxHp: 65,
    attack: 42,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/quilava.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/quilava.gif"
    },
    moves: ["EMBER","FLAME_BURST","WORK_UP","SLASH"],
    drain: false
  },
  TYPHLOSION: {
    name: "Typhlosion",
    type: "fire",
    maxHp: 85,
    attack: 60,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/typhlosion.gif"
    },
    moves: ["FLAMETHROWER","FIRE_BLAST","SLASH","WORK_UP"],
    drain: false
  },

  TOTODILE: {
    name: "Totodile",
    type: "water",
    maxHp: 55,
    attack: 32,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/totodile.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/totodile.gif"
    },
    moves: ["SCRATCH","WATER_GUN","BITE","LEER"],
    drain: false
  },
  CROCONAW: {
    name: "Croconaw",
    type: "water",
    maxHp: 70,
    attack: 45,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/croconaw.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/croconaw.gif"
    },
    moves: ["WATER_GUN","BITE","SLASH","WITHDRAW"],
    drain: false
  },
  FERALIGATR: {
    name: "Feraligatr",
    type: "water",
    maxHp: 95,
    attack: 65,
    sprites: {
      front: "https://img.pokemondb.net/sprites/black-white/anim/normal/feraligatr.gif",
      back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/feraligatr.gif"
    },
    moves: ["HYDRO_PUMP","CRUNCH","SLASH","WITHDRAW"],
    drain: false
  }
};


//TYPE MATCHUPS
const effectiveness = (moveType, defenderType) => {
  if (moveType === "fire" && defenderType === "grass") return 2;
  if (moveType === "water" && defenderType === "fire") return 2;
  if (moveType === "grass" && defenderType === "water") return 2;
  if (moveType === "water" && defenderType === "grass") return 0.5;
  if (moveType === "grass" && defenderType === "fire") return 0.5;
  if (moveType === "fire" && defenderType === "water") return 0.5;

  
  if (moveType === "electric" && defenderType === "water") return 2;
  if (moveType === "electric" && defenderType === "grass") return 0.5;
  if (moveType === "electric" && defenderType === "electric") return 0.5;

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
      setGameOver(true);
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


//enemy turnnnnnnnnn
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
  /* ===== ROOT CONTAINER ===== */
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",   // 🔥 critical fix
    paddingTop: 16,
    width: "100%",
    maxWidth: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    fontFamily: `"Courier New", Courier, monospace`,
    letterSpacing: "0.12em"
  },

  /* ===== MAIN GAME SCREEN ===== */
  screen: {
    width: "100%",
    maxWidth: 420,
    border: "4px solid #000",
    padding: 12,
    boxSizing: "border-box",
    fontFamily: "monospace",
    transition: "opacity 1s",
    overflowY: "auto"
  },

  /* ===== BATTLE ROW ===== */
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
    width: "100%"
  },

  sprite: {
    width: "100%",
    maxWidth: 100,
    maxHeight: 80,
    objectFit: "contain",
    imageRendering: "pixelated",
    flexShrink: 0
  },

  info: {
    width: "100%",
    flex: 1
  },

  /* ===== HP BAR ===== */
  hpOuter: {
    height: 10,
    border: "2px solid #000",
    background: "#ccc",
    width: "100%",
    boxSizing: "border-box"
  },

  hpInner: {
    height: "100%",
    background: "#4caf50",
    transition: "width 0.3s"
  },

  /* ===== TEXT BOX ===== */
  textBox: {
    border: "3px solid #000",
    padding: 10,
    minHeight: 50,
    marginBottom: 10,
    width: "100%",
    boxSizing: "border-box",
    wordBreak: "break-word",
    overflowWrap: "break-word"
  },

  /* ===== MOVES ===== */
  moves: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 8,
    width: "100%"
  },

  button: {
    padding: 8,
    border: "2px solid #000",
    cursor: "pointer",
    textAlign: "center",
    userSelect: "none"
  },

  /* ===== SELECTION SCREEN ===== */
  selectionWrapper: {
    textAlign: "center",
    width: "100%"
  },

  /* Header ABOVE grid (image + title) */
  selectionHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 16,
    width: "100%",
    flexShrink: 0
  },

  headerImage: {
    width: "100%",
    maxWidth: 180,
    height: "auto",
    imageRendering: "pixelated"
  },

  headerTitle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: "clamp(14px, 4vw, 20px)",
    textAlign: "center"
  },

  /* Grid adapts to screen width */
  selectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
    gap: 12,
    width: "100%",
    boxSizing: "border-box"
  },

  /* Selection card */
  selectCard: {
    width: "100%",
    aspectRatio: "1 / 1",
    border: "2px solid #000",
    background: "#f5f5f5",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    boxSizing: "border-box",
    overflow: "hidden"
  },

  selectSprite: {
    width: "100%",
    maxHeight: "60%",
    objectFit: "contain",
    imageRendering: "pixelated",
    flexShrink: 0
  },

  selectName: {
    fontWeight: "bold",
    fontSize: "clamp(10px, 3vw, 14px)",
    textAlign: "center",
    lineHeight: 1.1,
    maxWidth: "100%",
    wordBreak: "break-word",
    overflowWrap: "break-word"
  },

  /* ===== EFFECTS ===== */
  flicker: {
    animation: "flicker 0.3s linear 3"
  }
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