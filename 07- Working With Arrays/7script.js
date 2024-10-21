'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//creo 1 modifica al file html e lo inserisco
const displayMovements = function (movements) {
  //svuoto containerMovements
  containerMovements.innerHTML = ``;

  movements.forEach(function (mov, i) {
    //se mov e' positivo lo flaggo deposit se negativo withdrawal
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //modifico l'html con i valori dinamici di js
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>
    `;
    //.insertAdjacentHTML inserisce 1 elemento dopo o prima o in mezzo ad un file, in qst caso inserisco "html" subito dopo che inizia la classe containerMovements
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(value => value > 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumIn.textContent = `${incomes}€`;

  const payments = movements
    .filter(value => value < 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumOut.textContent = `${Math.abs(payments)}€`;

  const interest = movements
    .filter(val => val > 0)
    .map(deposit => (deposit * 1.2) / 100) //interesse dell'1.2%
    .filter((value,i,arr)=>{  //aggiungo agli interessi solo i numeri che superano 1 euro
      console.log(arr);
      return value>=1
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${interest}`;
};

calcDisplaySummary(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//                          MAP METHOD
//crea 1 nuovo array senza modificare l'originale, puoi inoltre chainare metodi

//prendo le prime 3 iniziali
//con funzione normale
// const createUserName = function(user){
// const username = user.toLowerCase().split(' ').map(function(name){
//   return name[0];
// }).join('')
// return username
// }

//con lambda
const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
};

console.log(createUsername(`Steven Thomas Williams`));

//                  USO DEL FOREACH
//modifica l'arr originale

//qui sto prendendo 1 array di Objects e gli sto aggiungendo 1 value acc.username, che e' fatta dalle iniziali di acc.owner, dato che sto modificando l'array non uso il .map che avrebbe creato 1 altro array, ma sto modificando 1 gia esistente, quindi uso il forEach
const createAccountsUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createAccountsUsername(accounts);
console.log(accounts);

//                FILTER METHOD
//restituisce 1 arr in base a 1 condizione
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//anke qst ha value index array
const deposits = movements.filter(function (value, index, array) {
  return value > 0;
});
console.log(deposits); //[200, 450, 3000, 70, 1300]\

const withdrawal = movements.filter(w => w < 0);
console.log(withdrawal);

//                REDUCE METHOD
//accumulator = valore ke accumula i valori
//value = value dell'iterazione
//il 0 finale e' la value iniziale dell'accumulator

//il reduce method loopa su 1 array, ad ogni loop il valore ritornato nel loop viene messo dentro l'accumulator, all'ultimo loop il valore dell'accumulator e' ritornato al di fuori della funzione

const balance = movements.reduce(function (accumulator, value, index, array) {
  return accumulator + value;
}, 0);

console.log(balance);

//con arrow
const balanceArw = movements.reduce((acc, val) => acc + val, 0);
console.log(balanceArw);

// con for loop - dobbiamo creare 1 arr vuoto prima
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//find Bigger value
//on each loop it checks if acc or val are bigger, and the one that is bigger is put inside the accumulator value, after the last loop the accumulator is returned from the function
const max = movements.reduce((acc, val) => {
  if (acc > val) return acc;
  else return val;
}, movements[0]);
console.log(max);
