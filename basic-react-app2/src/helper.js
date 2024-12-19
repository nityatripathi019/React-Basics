
function genRandomNo(n){
 let arr = new Array(n);
 for(let i=0;i<n;i++){
    arr[i]=Math.floor(Math.random()*10);
 }
 return arr;
}

function sum(ticket){
return ticket.reduce((acc,digit)=> acc + digit ,0)
}
export {genRandomNo,sum}