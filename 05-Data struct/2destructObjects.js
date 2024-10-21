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

  //i param di qst funzione hanno gli stessi nomi della funzione sotto restaurant.orderDelivery, qui assegno valori di base ne lcaso no nfossero messi, xo qst funzione lavora con i dati inseriti sotto xke hanno gli stessi nomi - in qst funzione si passa 1 solo object con 4 dati dentro (e tutto nelle {})
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
};

//se i name dell'object messi come param nella funzione chiamata sono UGUALI a quelli definiti nei param della dichiarazione della funzione si esegue il destructuring, e si assegnano come i parametri corrispondnti indifferentemente dell'ordine di dichiarazione
restaurant.orderDelivery({
  time: `22:30`,
  address: `via pino 1`,
  mainIndex: 2,
  starterIndex: 2,
});
//qui usa le defaultvalue segnate nella dichiarazione del metodo
restaurant.orderDelivery({
  address: `via ugo `,
});

//seleziona gli elementi con i nomi corrispondenti, devo mettere nella variabile nomi corrispondenti a proprieta che sono nell'object dopo l' =
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); //Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//destructuro e gli do un nuovo nome alla variabile - l'obj resta invariato
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Default Values

//qui assegno un valore predefinito in caso prendessi 1 item che non esiste, nel primo caso prendo 1 inesistente, nel secondo faccio come il caso subito sopra ma metto 1 valore di default nel caso non trovasse nulla
//menu=[] cerca la proprieta menu se non c'e da un aray vuoto
//starterMenu: starters = [] prende starterMenu lo destructura e lo nomina starters

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
//assegno variabili a valori di 1 obj

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//va wrappato in tonde x assegnare variabili ad elementi di 1 OBJECT////////////////////////////////
({ a, b } = obj);
console.log(a, b);

//Nested Objects
//la graffa dopo const {} fa capire che deve prendere qualcosa dentro 1 obj, entra nel suo scope, se non ci fosse la {} prenderebbe tutto l'openingHours
//poi creo 2 variabili (open e close) in cui METTO DENTRO il valore di restaurant.openingHours.fri.open e close (i nomi devono essere UGUALI per farglieli prendere)
//qui sto mettendo nelle variabili open e close i due valore di openingHours
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//faccio la stessa cosa ma gli do nuovi nomi - l'object resta invariato

const {
  openingHours: {
    fri: { open: fridayOpen, close: fridayClose },
  },
} = restaurant;

console.log(fridayOpen, fridayClose);
