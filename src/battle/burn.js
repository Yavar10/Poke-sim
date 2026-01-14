export function burn(setDefender,defender,setLog)
{
 setDefender(e => ({
      ...e,
      status: "burnt",
      attack:e.attack/2,
    }));

    setTimeout(() => {
      setLog(`${defender.name} was burnt`);
    }, 1000);
}
export function burnt(setDefender,defender,setLog)
{
 setDefender(e => ({
      ...e,
      hp:Math.floor(Math.max(e.hp-(e.maxHp*6)/100,0))
    }));

    setTimeout(() => {
      setLog(`${defender.name} lost some Hp due to it's burn`);
    }, 1000);
}
