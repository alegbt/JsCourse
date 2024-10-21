"use strict";

//copying primitives
let lastName = `williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName, oldLastName);

//wrong object copy
// const jessica = {
//   firstName: `jessica`,
//   lastName: `william`,
//   age: 23,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = `asad`;

// console.log(jessica);
// console.log(marriedJessica);




//correct object copy

const jessica2 = {
  firstName: `jessica`,
  lastName: `william`,
  age: 23,
  number:5,
  family: [`ugo`,`pino`]
};

//metodo x copiare 1 obj (shallow copy) non crea copie di obj dentro ma solo di quelli sopra
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `pino`;
console.log(jessicaCopy);
console.log(jessica2);
//un array e' un object
jessicaCopy.family.push(`mario`)

console.log(jessicaCopy); //['ugo', 'pino', 'mario']
console.log(jessica2);    //['ugo', 'pino', 'mario']
//ha modificato l'array di entrambi, (shallow copy)


//serve  1 deep clone
console.log(`
deep clone`);
const jessica2DeepClone = JSON.parse(JSON.stringify(jessica2));
jessica2DeepClone.family.push(`ELEMENTO ADDATO`)

console.log(jessica2DeepClone); //array modificato
console.log(jessica2);          //array di base

console.log(jessica2DeepClone.number+jessica2DeepClone.age);    //28 si sono addati