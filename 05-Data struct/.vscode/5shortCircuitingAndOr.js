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

// #################                shortcircuit OR operator
// return first truthy value

console.log(`OR---------------------------`);
//si puo usare l'OR anche con data type non boolean

//l'OR fa short circuit alla prima truthy value, restituendo quella, se sono tutte falsy restituisce l'ultima
console.log(3 || `abc`); //3
console.log("" || `boh`); //boh
console.log(true || `boh`); //true
console.log(false || `boh`); //boh
console.log(undefined || `boh`); //boh
console.log(false || null); //null anche se null e' falsy
console.log(null || `boh`); //boh

console.log(undefined || 0 || `` || `hello` || 23 || null); //hello, salta fino alla prima truthy

//restaurant.numGuests = 23;
//se restaurant.numGuest esiste (truthy) lo restituisce, altrimenti mette 10
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10

//se restaurant.numGuest esiste e non e' 0 (truthy) lo restituisce, altrimenti mette 11 - evita di fare un if
const guests2 = restaurant.numGuests || 11;
console.log(guests2); //11

//################         short circuit AND operator     ################
//return the first falsy value

console.log(`AND---------------------------`);

console.log(0 && `boh`); //funziona al contrario, short circuit alla prima falsy value
console.log(`boh` && 2); //2 entrambe truthy - restituisce l'ultima
console.log(`abc` && 23 && null && `idk`); //null

//tradizionale
if (restaurant.orderPizza) {
  //check se esiste
  restaurant.orderPizza(`mushroom`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushrom`, `spinach`);

// Nullish Coaleshing operator  ??
//restituisce la prima non Nullish value (null e undefined)

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 11;
console.log(guests2); //da 11 invece che 0 - ma io voglio che mi dia il primo risultato se e' definito, il 2 se invece restaurante.numGuest non e' definito

const correctGuest = restaurant.numGuests ?? 11;
console.log(correctGuest); //0

console.log(false ?? null); //false
console.log(null ?? 0); //0
