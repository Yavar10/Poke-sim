
export function enemymove(enemy){
 let choice=0;
    let move=enemy.moves[0];
    const num=enemy.moves.length;
    do{choice= Math.floor((Math.random() * 100) / (100/num));
        move= enemy.moves[choice];
     }
    while(enemy.moves[choice].pp<=0);

    return move
}