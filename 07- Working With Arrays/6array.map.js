'use strict';

//              Map
//returns a new array containing the result of applying an operation on all original array elements

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//con il map non serve instanziare un arr vuoto prima
//inoltre e' functional programing, dove tutto e' assegnato in funzioni e riusabile
//non ha "side effects" cioe fa tutta l'operazione insieme nella funzione, non ne fa 1 x volta come un for each
const movementsUSD = movements.map(function (value) {
  return value * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

// .map con la arrow function
const movementsUSDarrow = movements.map(value => value * eurToUsd);

console.log(movementsUSDarrow);

//con il for dobbiamo fare prima 1 arr vuoto
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

console.log(`--------------------------`);


//anche qui puoi usare value - key - arr come parametri
const movementDescriptions = movements.map((value, index, arr) => {
  return `Movement ${index + 1}: you ${value > 0 ? `deposited` : `withdrew`} ${Math.abs(value)}`;
});

console.log(movementDescriptions);

//              Filter
//returns a new array that passed a specific test condition

//              Reduce
// "riduce" tutti gli elementi di 1 array in 1 single value (tipo addarli tutti)
