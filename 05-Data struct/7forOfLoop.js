"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `The order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at the h ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for of simile al forEach di java, esegue il for su ogni elemento
for (const item of menu) {
  console.log(item);
}
//Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

console.log(`------------------------`);

for (const item of menu.entries()) {
  console.log(item);
}
// (2) [0, 'Focaccia']
// (2) [1, 'Bruschetta']
// ecc.

console.log([...menu.entries()]);

//menu.entries restituisce un array contenente  arrays che hanno come primo elemento la posizione dell'elemento originale e poi l'elemento
// 0:(2) [0, 'Focaccia']
// 1:(2) [1, 'Bruschetta']
// 2:(2) [2, 'Garlic Bread']
// 3:(2) [3, 'Caprese Salad']
// 4:(2) [4, 'Pizza']
// 5:(2) [5, 'Pasta']
// 6:(2) [6, 'Risotto']

console.log(`------------------------------aa`);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]} `);
}
//x renderlo migliore da vedere
//1: Focaccia
//2: Bruschetta
// ecc.

//Destructuring

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
}
//1: Focaccia
//2: Bruschetta
// ecc.
//stesso risultato ma con destructuring e' + semplice
