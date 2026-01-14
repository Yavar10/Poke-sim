/* import { calculateDamage } from "./damage";
import { hitSound, faintSound } from "../audio/sounds";

export function runEnemyTurn({
  enemy,
  player,
  setEnemy,
  setPlayer,
  setLog,
  setLocked,
  setPlayerHit,
  setGameOver
}) {
  const usableMoves = enemy.moves.filter(m => m.pp > 0);
  const move = usableMoves[Math.floor(Math.random() * usableMoves.length)];

  setEnemy(e => ({
    ...e,
    moves: e.moves.map(m =>
      m.name === move.name ? { ...m, pp: m.pp - 1 } : m
    )
  }));

  const { damage } = calculateDamage(move, enemy, player);
  const newHp = Math.max(player.hp - damage, 0);

  hitSound.play();
  setPlayerHit(true);
  setPlayer(p => ({ ...p, hp: newHp }));

  setLog(`${enemy.name} used ${move.name}!`);

  if (newHp === 0) {
    faintSound.play();
    setGameOver(true);
    return;
  }

  setTimeout(() => {
    setLog(`What will ${player.name} do?`);
    setLocked(false);
  }, 1000);
}
 */