

//literal syntax

const friends = [`ale`,`pino`,`ugo`]; 
console.log(friends);


//creare array con funzione

const years = new Array(1991, 1984, 2008, 2020);


console.log(friends[0]); //ale  (zero based - parte da 0)

console.log(friends.length)//3 numero di elementi (non zero-based)

console.log(friends[friends.length-1]) //ultimo elemento


friends[2] = `newName`;         //puoi cambiare gli elementi dentro anche se l'array e' const
console.log(friends); 


const alessandroG = [`Ale`, `Gob`, new Date().getFullYear()-1994, `programmer`, friends]   //puoi mettere diversi types in 1 array
console.log(alessandroG)