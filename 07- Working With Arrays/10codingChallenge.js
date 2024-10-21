'use strict';

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]



let agesD = [5, 2, 4, 1, 15, 8, 3];
let agesC = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages => 
 ages
    .map(value => (value <= 2 ? value * 2 : 16 + value * 4))
    .filter(val => val >= 18)
    .reduce((acc, val, i, arr) => acc+ val/arr.length, 0);
//nel reduce ottengo la media facendo: acc+ (val/arr.length) dividendo quindi ogni
//elemento singolo x la lunghezza dell'array prima di aggiungerlo all'accumulator, 
//che e' uguale a sommare tutti i numeri e poi dividere la somma totale per il numero di elementi

console.log(calcAverageHumanAge(agesD));
console.log(calcAverageHumanAge(agesC));