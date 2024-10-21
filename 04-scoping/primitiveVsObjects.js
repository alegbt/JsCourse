'use strict'



let age = 30;
let oldAge = age
age = 31
console.log(age);
console.log(oldAge);


const me = {
    name: `ale`,
    age: 29
}

const friend = me;

friend.age=20;

console.log(`friend`, friend);  //20
console.log(`me`, me);          //20
//puntano entrambe all'address, che punta alla stessa value e che modifica la value nella heap, modificando x tutte e 2