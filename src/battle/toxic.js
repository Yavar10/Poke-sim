export function toxic(setDefender,defender,setLog)
{
 setDefender(e => ({
      ...e,
      status: "poisoned"
    }));

    setTimeout(() => {
      setLog(`${defender.name} was badly poisoned`);
    }, 1000);
}
export function poison(setDefender,defender,setLog)
{
 setDefender(e => ({
      ...e,
      hp:Math.floor(Math.max(e.hp-(e.maxHp*18)/100,0))
    }));

    setTimeout(() => {
      setLog(`${defender.name} lost some Hp due to poison`);
    }, 1000);
}
