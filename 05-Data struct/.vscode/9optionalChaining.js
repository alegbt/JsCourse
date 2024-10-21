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

if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);

//Optional chaining
//se metto ? dopo il nome di 1 item nel path se l'item e' undefined o null (non esiste) ritorna undefined
console.log(restaurant.hours?.mon?.open); //undefined

//Prendere un item con string literal in un object
//prendo in restaurant.hours.[quello scritto nelle quadre] il nome deve essere esattamente lo stesso e prendo quello con il nome corrispondente
console.log(restaurant.hours[`thu`]); //{open: 12, close: 22}
console.log(restaurant.hours[`fri`]); //{open: 11, close: 23}

const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

//Nullish Operator e Optional chaining
//si usano insime x fare in modo che se non c'e 1 item del path venga restituito undefined e quindi il nullish fa andare alla risposta successiva, e' fail proof nel caso l'item sia uno 0

for (const day of days) {
  //hours[day]?.open restituisce null se non c'e l'item, quindi restituisce quello dopo con il Nullish operator se l'item in questione non e' presente
  //sono utili insieme per far succedere la scelta dopo se l'object nel path non esiste
  const open = restaurant.hours[day]?.open ?? `CLOSED`;
  console.log(`on ${day}, the hours are: ${open}`);
}

//Methods
//check se 1 metodo esiste

console.log(restaurant.order?.(0, 1) ?? `method does not exist`); //(2) ['Focaccia', 'Pasta']
console.log(restaurant.orderWrong?.(0, 1) ?? `method does not exist`); //method does not exist

//Arrays

const users = [{ name: `ale`, mail: `boh@gmail` }];

console.log(users[0]?.name ?? `empty`); //ale
console.log(users[1]?.name ?? `empty`); //empty
