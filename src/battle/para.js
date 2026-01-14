export function paraz(setDefender,defender,setLog)
{
 setDefender(e => ({
      ...e,
      status: "paralyzed"
    }));

    setTimeout(() => {
      setLog(`${defender.name} was been paralysed`);
    }, 1000);
}