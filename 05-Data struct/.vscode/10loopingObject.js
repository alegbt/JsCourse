"use strict";

const weekDays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const hours = {
  thu: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //Enhanced object literal
  //invece di scrivere  hours: hours, mettendo solo hours  prende l'obj hours che sta fuori e lo assegna qui
  hours,

  //Le funzioni si possono scrivere anche cosi negli object (altro modo subito sotto)
  order(starterIndex, mainIndex) {
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

//Property keys

const properties = Object.keys(hours);
console.log(properties); //(3) ['thu', 'fri', 'sat']

let openStr = `we are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//Property values

const values = Object.values(hours);
console.log(values);
// 0:{open: 12, close: 22}
// 1:{open: 11, close: 23}
// 2:{open: 0, close: 24}

// Entries object

const entries = Object.entries(hours);
console.log(entries);
/*
restituisce 1 array che contiene array delle key-value
(3) [Array(2), Array(2), Array(2)]

0: Array(2)
0: "thu"
1: {open: 12, close: 22}

1: Array(2)
0: "fri"
1: {close: 23 open: 11}

2: Array(2)
0: "sat" 
1: {open: 0, close: 24}
*/

for(const [key,{open,close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}