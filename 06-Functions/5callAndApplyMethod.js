"use strict";

const lufthansa = {
  airline: `Lufhtasa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `{this.iataCode}${flightNum}}`, name });
  },
};

lufthansa.book(239, `ale`);

const eurowings = {
    airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;

// non funziona, se copi la funzione nel modo sopra i this non funzionano
//book(23, `ale`)


//CALL METHOD


// con .call settiamo come 1 param il riferimento su cui .this dovra basarsi
book.call(eurowings, 23, `pino`)
book.call(lufthansa, 25, `mario`)
console.log(lufthansa);
console.log(eurowings);



const swiss = {
    airline:  `swiss air`,
    iataCode: `LX`,
    bookings: [],
}

book.call(swiss, 55, `lol`)
console.log(swiss.bookings);



//APPLY METHOD
// chiama lafunzione

const flightData = [543, `mariugo`];

book.apply(swiss, flightData) //mariugo booked a seat on swiss air flight LX543

//stesso risultato ma migliore
book.call(swiss, ...flightData)//mariugo booked a seat on swiss air flight LX543




//BIND METHOD
//crea 1 nuova funzione, con il this sempre settato sul parametro
//sintassi: .bind(oggetto a cui assegnare il .this - parametri)

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(99, `steve`);

// se metto altri param dopo a .bind vado ad assegnare i param della funzione
// cosi setto flightName di:  book(flightNum, name) 
const bookEW23 = book.bind(eurowings, 876543)
bookEW23(`ugonio`)  //ugonio booked a seat on Eurowings flight EW876543
bookEW23(`marienzo`)    //marienzo booked a seat on Eurowings flight EW876543


//With event listeners

lufthansa.planes = 300;

lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++
    console.log(this.planes);
}


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)



//Partial application
//se non c'e 1 oggetto a cui assegnare il this si puoi mettere null ( o qualsiasi altro valore) come primo param

const addTax = (rate, value) => value+value*rate;

console.log(addTax(0.1,200));

const addVAT = addTax.bind(null, 0.20)


console.log(addVAT(100));
console.log(addVAT3());



//stessa cosa sopra ma con inner function

const exFunct= function(rate){  
    return function(value){
        return value+value*rate;
    }
}

const addVAT2 = exFunct(0.1);

console.log(addVAT2(100));



