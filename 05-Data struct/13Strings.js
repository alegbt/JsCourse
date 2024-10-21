"use strict";

const airLine = `TAP Air portugal`;

const plane = `A320`;

console.log(plane[0]); //A
console.log(`ciao`[0]); //c

console.log(airLine.indexOf(`r`)); //6
console.log(airLine.lastIndexOf(`r`)); //10
console.log(airLine.indexOf(`portugal`)); //8

console.log(airLine.slice(4)); //Air portugal // taglia da 4 in poi e ritorna quello dopo
console.log(airLine.slice(0, 5)); //TAP A

console.log(airLine.slice(0, airLine.indexOf(` `))); //TAP

console.log(airLine.slice(airLine.indexOf(` `) + 1, airLine.indexOf(`r`) + 1)); //Air

console.log(airLine.slice(airLine.lastIndexOf(` `) + 1)); //portugal

//con valore negativo parte dalla fine

console.log(airLine.slice(-2)); //al

console.log(airLine.slice(1, -1)); //parte da 1 finisce a -1 //AP Air portuga

const checkMiddleSeat = function (seat) {
  let s = seat.slice(-1);

  if (s == `B` || s == `E`) {
    console.log(`${seat} is middle seat`);
  } else {
    console.log(`${seat} isnt middle seat`);
  }
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(typeof new String(`ciao`)); //object
console.log(typeof new String(`ciao`).slice(1)); //string

//le String sono object, quando fai su di esse 1 operazione (.slice()) li converte in string, su js non ci sono i char quindi e' il dato + primitivo

//uppercase - lowercase

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());
const passenger = `aLesSandro`;

//long way

const passLower = passenger.toLowerCase();
const passengerCorrect = passLower[0].toUpperCase() + passLower.slice(1);
console.log(passengerCorrect); //Alessandro

//short way

const correctShort =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect); //Alessandro

//comparing email - togli spazi (trim)

const loginEmail = `  Ciao@gmail.Com \n`;
const check = loginEmail.toLowerCase().trim(); //ciao@gmail.com

console.log(check);

//replacing

const priceEU = `288,97E`;
const priceUS = priceEU.replace(`E`, `$`);
console.log(priceUS); //288,97$

const announce = `Come to boarding door 23. boarding door 23`;
console.log(announce.replaceAll(`door`, `gate`)); //Come to boarding gate 23. boarding gate 23

//regex
//si usando mettendo la string in due / /
console.log(announce.replace(/door/g, `gate`)); //Come to boarding gate 23. boarding gate 23 (/g sta x global)

//booleans - includes, startswith
const planeName = `A320neo`;

console.log(planeName.includes(`0ne`)); //true
console.log(planeName.includes(`0nE`)); //false
console.log(planeName.startsWith(`A32`)); //true

const checkBaggage = function (items) {
  items.toLowerCase();
  if (items.includes(`gun`) || items.includes(`knife`)) {
    console.log(`u cannot board`);
  } else {
    console.log(`welcome abord`);
  }
};

checkBaggage(`laptop pen knife`);
checkBaggage(`socks pc hat`);
checkBaggage(`gunrighello`);

//divider string

console.log(`a+very+long+str`.split(`+`)); //(4) ['a', 'very', 'long', 'str']

console.log(`alessandro gob`.split(` `)); //(2) ['alessandro', 'gob']

const [firstName, lastName] = `ale gob`.split(` `);
console.log(firstName); //ale

const nameJoined = [`Mr.`, firstName, lastName.toUpperCase()].join(`--`); //join unisce + elementi con in mezzo l'elemento nel join
console.log(nameJoined); //Mr.--ale--GOB

//mettere maiuscola ad ogni parola

const capitalizeName = function (name) {
  const names = name.split(` `);
  const upper = [];
  for (const x of names) {
    upper.push(x[0].toUpperCase() + x.slice(1));
  }
  console.log(upper.join(` `));
};

capitalizeName(`ciao mario ugo pino`); //Ciao Mario Ugo Pino

//altro modo

const otherCapitilize = function (n) {
  const names = n.split(` `);
  const upper = [];
  for (const x of names) {
    upper.push(x.replace(x[0], x[0].toUpperCase()));
  }
  console.log(upper.join(` `));
};

otherCapitilize(`ciao mario ugo pino`); //Ciao Mario Ugo Pino

//PADDING
//il padding aggiunge 1 spazio in modo che l'elemento arrivi alla lunghezza desiderata e.g. :
//msg.padStart(25, `+`) mette tanti + quanti sono necessari x far arrivare la stringa msg a 25 caratteri

const msg = `go gate 23`;
console.log(msg.padStart(25, `+`).padEnd(35, `-`)); //+++++++++++++++go gate 23----------
console.log(msg.padStart(5, `+`).padEnd(7, `-`)); //go gate 23

//esempio pratico - carta di credito con numeri oscurati

const maskCreditCard = function (number) {
  const str = number + ``; //converto il numero in 1 str(senza alterarlo)
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};

console.log(maskCreditCard(23457856903294)); //**********3294
console.log(maskCreditCard(`349282948334`)); //********8334

//repeat method
//x ripetere 1 str

const msg2 = `|- bad wheater flight delayed -| `;
console.log(msg2.repeat(3));  
//|- bad wheater flight delayed -| |- bad wheater flight delayed -| |- bad wheater flight delayed -|


const cats = function (c) {
  console.log(` i have ${c} cats: ${`🐱`.repeat(c)}`);
};
cats(5);  // i have 5 cats: 🐱🐱🐱🐱🐱
