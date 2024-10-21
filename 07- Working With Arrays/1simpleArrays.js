'use strict';

let arr = ['a','b','c','d','e']





//                              .SLICE

console.log(arr.slice(2));  //Array(3) ['c', 'd', 'e'] parte dal numero indicato (compreso)

console.log(arr.slice(2,4));  //['c', 'd'] //prende dal 2 fino a quello prima di 4

console.log(arr.slice(-2)); //['d', 'e'] prendi gli ultimi 2 elementi

console.log(arr.slice(1, -2)); //['b', 'c'] prende da il 1 fino a -2 (non inclusi)





//                                .SPLICE
// tipo lo slice ma MODIFICA l'array originale TOGLIENDO la parte che prende

// console.log(arr.splice(2)); //['c', 'd', 'e']
// console.log(arr); //['a', 'b'] l'array originale ha perso la parte tagliata da arr.splice(2)

//togli l'ultimo elemento
arr.splice(-1);
console.log(arr); //['a', 'b', 'c', 'd']

arr.splice(1,2) //a partire dall'elemento 1 toglie 2 elementi
console.log(arr); //['a', 'd']





//                       REVERSE

let arr2 = ['z','f','h','r','b']


console.log(arr2.reverse());  //inverte l'array   ['b', 'r', 'h', 'f', 'z']
console.log(arr2);            //muta l'originale  ['b', 'r', 'h', 'f', 'z']





//                       CONCAT

//unisce 2 array - non muta gli array
const letters = arr2.concat(arr);
console.log(letters); //['b', 'r', 'h', 'f', 'z', 'a', 'd']

//stesso risultato con lo spread operator
const letters2 = [...arr, ...arr2]
console.log(letters2); //['a', 'd', 'b', 'r', 'h', 'f', 'z']




//                        JOIN

//crea stringa con tuti gli elementi dell'arr separati dall'elemento che metti
console.log(letters.join(` - `)); //b - r - h - f - z - a - d