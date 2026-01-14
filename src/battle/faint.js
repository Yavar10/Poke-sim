import { faintSound } from "../audio/sounds";
export function faint(setLog,defender,setGameOver)
{
    setTimeout(() => {
      faintSound.play();
      setLog(`${defender.name} fainted!`);
      setGameOver(true);
    }, 1600);
}