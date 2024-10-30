'use strict'

const budget = Object.freeze([ //freeza solo il top level se faccio budget[0].value = 123 funziona ma se faccio budget[9] = 'asd' non funziona xke metto 1 top level
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);


const spendingLimits = Object.freeze({ //Object.freeze blocca l'object,  non e' piu cambiabile
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

//pure function - non modifica elementi ma ritorna 1 cosa nuova
const addExpense = function (state, limit, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limit, cleanUser) ?  [...state, { value: -value, description, user:cleanUser }] : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
// console.log(newBudget1);
// console.log(newBudget2);

//se l'entry e' sopra il limit dell'user aggiungo il campo flag:limit a quella entry altrimenti ritorno l'entry cosi com'e andando avanti
const checkExpenses =  (state, limits) =>
   state.map(entry => entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state.filter(entry => entry.value <= -bigLimit)
  .map(entry => entry.description.slice(-2)).join(' / ')
  //.reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '') //versione semplificata ma + complessa
  console.log(bigExpenses);
};


logBigExpenses(newBudget3, 500);
