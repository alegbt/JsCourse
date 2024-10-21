"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4, 5];

//assegnare 1 alla volta
const a = arr[0];
const b = arr[1];
const c = arr[2];

//assegnare 1 alla volta in 1 linea con ARRAY ///////////////////////////////////////////////////
const [x, y, z, f] = arr;

console.log(`1--`, x, y, z, f); //2 3 4 5

// prendo elemento 1 e 3, saltando il 2
let [first, , third] = restaurant.categories;
console.log(`2--`, first, third); //Italian Vegetarian

//cambiare ordine tra 1 e 3 in maniera tradizionale
// const temp = first;
// first = third;
// third = temp;
// console.log(first, third);

//switchare variables con il destructuring
[first, third] = [third, first];
console.log(`3--`, first, third);

//assegnazione di variabili da una funzione
const [starter, main] = restaurant.order(2, 0); //assegno a starter e main il risultato della funzione order con index 2 e 0
console.log(`4--`, starter, main);  //Garlic Bread Pizza

//assegnazione con nested array
const nested = [2, 4, [5, 6]];
 const [lk, ,kl ] = nested;
 console.log(`4bis--`,lk, kl); //2 (2) [5, 6]

const [i, , [j, k]] = nested; //vado a prendere le value nestate singolarmente
console.log(`5--`, i, j, k); //2 5 6

//default values (utile se si prova ad assegnare + elementi di quanti ne contenga l'array xke non viene undefined)

const [p = 1, q = 1, r = 1] = [8, 9]; //assegno 1 a tutte le value x far si che r non dia undefined ma 1, si usa quando non sai la lenght dell'arr
console.log(`6--`, p, q, r);  //8 9 1
