//importing module

console.log('Importing module');

//////////////////////////////////////////////////////
//import singoli da 1 modulo
//////////////////////////////////////////////////////

// import {addToCart, totalPrice as price, tq} from './shoppingCart.js'
// addToCart('bread', 5)

// // si possono cqambiare i nomi delle variabili quando le si importa/esporta
// console.log(price, tq);

//////////////////////////////////////////////////////
//import di un intero modulo
//////////////////////////////////////////////////////

// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice);


//////////////////////////////////////////////////////
//default import - si usa x esportare 1 cosa sola(?)
//////////////////////////////////////////////////////

//import add importa quello con export default, qui ho anche aggiunto 1 import di cart, singolo
import add, {cart} from './shoppingCart.js'
add('pizza', 2)
add('bread', 3)
add('apple', 4)

//cart contiene i 3 valori inseriti con add, questo xke cart importato non e' una copia ma 1 reference
//quindi sto facendo .push dentro il cart in shoppingCart.js e qui mi sto riferendo ad esso
console.log(cart);


//////////////////////////////////////////////////////
// await outside async function - con es 22 si puo usare await anceh fuori da una funzione async
//////////////////////////////////////////////////////

// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data);


//////////////////////////////////////////////////////
// top level await 
//////////////////////////////////////////////////////

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost); //questo printa 1 promise invece che il risultato

// lastPost.then(last => console.log(last)); //questo printa l'object ma si puo usare await e semplificare

async function displayLastPost(){
     lastPost2 = await getLastPost(); 
     console.log(lastPost2);
}
displayLastPost();


//////////////////////////////////////////////////////
// Import di librerie esterne tramite npm install {nomeLibreria}
// ho installato lodash in ./17-Modern-JS.. e ora faccio import di uno dei suoi moduli
//////////////////////////////////////////////////////


import cloneDeep from 'lodash-es';
  
const state = {
    cart: [
      { product: 'bread', quantity: 5 },
      { product: 'pizza', quantity: 5 }
    ],
    user: { loggedIn: true },
  };
  
  const stateClone = Object.assign({}, state);
  const stateDeepClone = cloneDeep(state) //clonedeep e' la libreria importata che fa 1 deep copy

  state.user.loggedIn = false;

  console.log(stateClone); //ha user con false poiche object.assign fa 1 copia per reference di obj
  console.log(stateDeepClone); //ha user con true

//hotswap
if(module.hot){
    module.hot.accept()
}
 

//////////////////////////////////////////////////////
// Babel ha il suo transpiler (vedi teoria.txt) e crea dei file .js che transpilano i lcodice se attivata la funzione
//////////////////////////////////////////////////////




















  /*
  command list

npx parcel starter/index.html


*/