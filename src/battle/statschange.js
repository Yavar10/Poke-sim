export function atkdn(attacker,defender,setAttacker,setDefender,setLog,target
) {
  // APPLY STAT CHANGE IMMEDIATELY
  if(target==="ENEMY")
    {
  setDefender(e => ({
    ...e,
    attackStage: Math.max(e.attackStage - 1, -2)
  }));

  // DELAY MESSAGE (so it doesn't clash with attack text)
  setTimeout(() => {
      setLog(`${defender.name}'s Attack fell!`)
  }, 1000);
}
else
   {
  setAttacker(e => ({
    ...e,
    attackStage: Math.max(e.attackStage - 1, -2)
  }));

  // DELAY MESSAGE (so it doesn't clash with attack text)
  setTimeout(() => {
       setLog(`${attacker.name}'s Attack fell!`)
  }, 1000);
}
}

export function atkup(
  attacker,
  defender,
  setAttacker,
  setDefender,
  setLog,
  target
) {
  if (target === "ENEMY") {
    setDefender(e => ({
      ...e,
      attackStage: Math.min(e.attackStage + 1, 2)
    }));

    setTimeout(() => {
      setLog(`${defender.name}'s Attack rose!`);
    }, 1000);
  } else {
    setAttacker(e => ({
      ...e,
      attackStage: Math.min(e.attackStage + 1, 2)
    }));

    setTimeout(() => {
      setLog(`${attacker.name}'s Attack rose!`);
    }, 1000);
  }
}
export function defdn(
  attacker,
  defender,
  setAttacker,
  setDefender,
  setLog,
  target
) {
  if (target === "ENEMY") {
    setDefender(e => ({
      ...e,
      defenceStage: Math.max(e.defenceStage - 1, -2)
    }));

    setTimeout(() => {
      setLog(`${defender.name}'s Defence fell!`);
    }, 1000);
  } else {
    setAttacker(e => ({
      ...e,
      defenceStage: Math.max(e.defenceStage - 1, -2)
    }));

    setTimeout(() => {
      setLog(`${attacker.name}'s Defence fell!`);
    }, 1000);
  }
}

export function defup(
  attacker,
  defender,
  setAttacker,
  setDefender,
  setLog,
  target
) {
  if (target === "ENEMY") {
    setDefender(e => ({
      ...e,
      defenceStage: Math.min(e.defenceStage + 1, 2)
    }));

    setTimeout(() => {
      setLog(`${defender.name}'s Defence rose!`);
    }, 1000);
  } else {
    setAttacker(e => ({
      ...e,
      defenceStage: Math.min(e.defenceStage + 1, 2)
    }));

    setTimeout(() => {
      setLog(`${attacker.name}'s Defence rose!`);
    }, 1000);
  }
}
