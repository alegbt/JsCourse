
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

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);


const updateUI = function(acc){
   //display movements
   displayMovements(acc.movements);
   //display balance
   calcDisplayBalance(acc);
   //display summary
   calcDisplaySummary(acc);
}



const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  //set positive incomes
  const incomes = acc.movements
    .filter(value => value > 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumIn.textContent = `${incomes}€`;
  //set negative payments
  const payments = acc.movements
    .filter(value => value < 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumOut.textContent = `${Math.abs(payments)}€`;
  //set interests
  const interest = acc.movements
    .filter(val => val > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((value, i, arr) => {
      //only add interest over 1$
      return value >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}`;
};

//Event Handlers

let currentAccount;
//login check username and pin
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  //.find cerca 1 elemento che soddisfa la condizione in essa e lo ritorna, cerco in accounts il mio input ke deve coincidere con acc.username
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;

    //tolgo i dati nel login
    inputLoginUsername.value = inputLoginPin.value = '';

    updateUI(currentAccount)
   
  }
});

//money transfer

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  inputTransferAmount.value = inputTransferTo.value = ''

  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username != currentAccount.username
  ) {
    currentAccount.movements.push(-amount)
    receiveAcc.movements.push(amount)

    updateUI(currentAccount);
  }
});


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

//          FIND METHOD

//ritorna il primo elemento su cui la condizione è true
// const firstWithdraw = movements.find(value => value<0);
// console.log(firstWithdraw);
