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

//spread - xke i ... a dx dell' =
const arr = [1, 2, ...[3, 4, 5]];

//REST - xke i ... a sx dell' =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others); //(3) [3, 4, 5]

//

const [p, , r, , k, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

//Pizza Risotto Bruschetta (2) ['Garlic Bread', 'Caprese Salad']
// il ...restaurant.mainMenu, prende tutti gli elementi, prendi il primo (p), iL terzo (r),  siccome mainMenu e' finito passa a starterMenu, salta il primo e prende il 2 elemento di starterMenu (k) poi otherFood prende tutto quello che c'e dopo
console.log(p, r, k, otherFood);

//con Objects
//sat ha lo stesso nome quindi lo prende per quello quindi ...weekdays prende solo il resto
const { sat, ...weekDays } = restaurant.openingHours;

console.log(sat, weekDays);

//Functions - rest parameters
const add = function (...nums) {
  let sum = 0;

  //il for si fa su una linea sola cosi
  //for (let i = 0; i < nums.length; i++) sum += nums[i];

  //for each
  nums.forEach((num) => {
    sum += num;
  });

  console.log(sum);
};

add(2, 3); //5
add(5, 3, 4, 5); //17

const x = [20, 5, 10];

add(...x); //35

//mushroom
//(3) ['onion', 'spinach', 'olives']
restaurant.orderPizza(`mushroom`, `onion`, `spinach`, `olives`);

//pomodoro
//(0) []
restaurant.orderPizza(`pomodoro`);
