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
};






const arr = [7, 8, 9];

//creare 1 nuovo array con elementi di 1 altro array - maniera classica
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]

// ### Spread operator ###
//funziona con gli elementi iterabili: array, string, maps sets

//si fa con ...array mette multiple value in fila dell'array
const newArr = [1, 2, ...arr];
console.log(newArr); //[1, 2, 7, 8, 9]

console.log(...newArr); //1 2 7 8 9

const newMenu = [...restaurant.mainMenu, `gnocchi`];
console.log(newMenu); //(4) ['Pizza', 'Pasta', 'Risotto', 'gnocchi']
 
// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //(7) ['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
console.log(menu);

//Spread operator con Strings

const str = "jonas";
const letters = [...str, " ", `S.`];
console.log(letters); //(7) ['j', 'o', 'n', 'a', 's', ' ', 'S.']

console.log(...str); //j o n a s


//faccio fare 3 prompt e li metto in 1 arr
const ingredients = [
  // prompt("type ingredient 1"),
  // prompt("type ingredient 2"),
  // prompt("type ingredient 3"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients); //uso i 3 prompt x la funzione orderPasta (li printo)

//Objects

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: `pinugo`
};

//crea 1 obj che parte con foundedIn, poi ha l'object restaurant x intero e poi ha founder
console.log(newRestaurant);   



//se lo copio e modifico non si modifica l'originale
const restaurantCopy = {...restaurant};
restaurantCopy.name= `Ristorante pinugo`

console.log(restaurant.name, restaurantCopy.name); //Classico Italiano Ristorante pinugo