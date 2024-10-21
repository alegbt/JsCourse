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

const rest1 = {
  name: `capri`,
  numGuest: 0,
};

const rest2 = {
  name: `la salsisccia`,
  owner: `ugo`,
};

//              #######     OR assignement operator

//se rest.numGuest esiste (truthy) non fa nulla, altrimenti se nonesiste (falsy) lo assegno al secondo

//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;

//stessa cose della linea sopra ma + concisa
//rest1.numGuest ||=15
//rest2.numGuest ||=10

//console.log(rest1); //15 //stesso problema, se ho 0 numGuest diventa falsy e restituisce la 2
//console.log(rest2); //10

//       ##############  Nullish assignement operator

rest1.numGuest ??= 15;
rest2.numGuest ??= 10;

console.log(rest1); //0
console.log(rest2); //10

//      ##############  OR assignement operator

 rest1.owner = rest1.owner && "<Anonymous>";//undefined //short circuit a rest1.owner perche null (falsy)
 rest2.owner = rest2.owner && "<Anonymous>";// anonymous //sc all'ultimo valore perche entrambi truthy, assegna rest.owner a <Anonymous>

//scritto con sintassi piu recente
 //rest1.owner &&= "<Anonymous>"; //essendo + smart non mette null perche capisce che non c'e nulla (questa fa lo stesso di riga 84)
// rest2.owner &&= "<Anonymous>";  //sc all'ultimo valore perche entrambi truthy, assegna rest.owner a <Anonymous> (fa lo stesso di riga 85)

console.log(rest1); //undefined}
console.log(rest2); //'<Anonymous>
