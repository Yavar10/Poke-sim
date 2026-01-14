export function heal(setTarget,target,setLog){
 setTarget(e => ({
      ...e,
      hp: Math.min(e.hp+e.maxHp/2 , e.maxHp)
    }));

    setTimeout(() => {
      setLog(`${target.name} healed 50% of its health!`);
    }, 1000);
}