export const isItHappening=(allowed)=>{
const x=Math.random()*100;
if(x<=allowed)
    return true;
return false
}