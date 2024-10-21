"use strict";

// Map = Key-VALUE pair

const rest = new Map();

rest.set(`name`, `la salsiccia`);
rest.set(1, `firenze,italy`);

console.log(rest.set(2, `lisbona, portogallo`)); //set non solo aggiorna la map ma la ritorna anche - {size: 3, name => la salsiccia, 1 => firenze,italy, 2 => lisbona, portogallo}

//posso chainare diversi set
rest
  .set(`categories`, [`ita`, `pizzeria`, `vegetariano`])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `we are open`)
  .set(false, `we are closed`);

console.log(rest.get(`name`)); //la salsiccia
console.log(rest.get(false)); //we are closed
console.log(rest.get(1)); //firenze,italy

const time = 21;

const res = rest.get(time > rest.get(`open`) && time < rest.get(`close`));
console.log(res);

console.log(rest.has(`categories`)); //cerco l'elemento in base alla key
console.log(rest);
rest.delete(2); //delete l'elemento in base alla key
console.log(rest);

console.log(rest.size); //7

//      obj/array come map KEYS

//cosi NON FUNZIONA per fare la get, xke nella heap se lo scrivi explicito non si riferira allo stesso ma a 2 diversi
rest.set([1, 2], `test`);
console.log(rest.get([1, 2])); //undefined

//  COSI FUNZIONA
const arr = [1, 2];
rest.set(arr, `test2`);
console.log(rest.get(arr)); //test2

//qst seleziona elementi stessi della paggina html
//rest.set(document.querySelector('h1'), 'Heading');

// CREAZIONE DI MAP CON PIU ELEMENTI (senza fare .set x ogni elemento)

const question = new Map([
  [`question`, `what programming language`],
  [1, `C`],
  [2, `java`],
  [3, `javaS`],
  [`correct`, 3],
  [true, `Correct!`],
  [false, `try again`],
]);
console.log(question);

// Converting objects to Map

const hours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap); //Map(3) {size: 3, thu => {open: 12, cl…}, fri => {open: 11, cl…}, sat => {…}}

// for loop with maps

for (const [key, value] of question) {
  console.log(key, value);
}
/*
1 C
2 java
3 javaS
correct 3
true Correct!
false try again
*/

//formattato x 1 quiz:
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}
const answer = 3; //Number(prompt(`your answer`))
/*
Answer 1: C
Answer 2: java
Answer 3: javaS
*/

question.get(`correct`) === answer
  ? console.log(`correct answer`)
  : console.log(`wrong answer`);

console.log(question.get(question.get(`correct`) === answer)); //usa l'output della map x dirti giusto sbaglaito

//converting map to array

console.log(...question); //(2) ['question', 'what programming language'] (2) [1, 'C'] (2) [2, 'java'] (2) [3, 'javaS'] (2) ['correct', 3] (2) [true, 'Correct!'] (2) [false, 'try again']



// prendere gli elementi con altri metodi
console.log(...question.keys()); //question 1 2 3 correct true false
console.log(...question.values()); //what programming language C java javaS 3 Correct! try again
