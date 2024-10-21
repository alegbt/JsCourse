//exporting module
console.log('Exporting module');

//blocking code - il code con await fetch in un exporting module viene eseguito prima di quello in script.js (che e' l'importing module)
//qui x esempio i print sono 'exporting module' , 'start fetching users' , 'finish fetching users' , e poi il print ad inizio script.js 'importing module'
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetching users');


const shippinCost = 10;
export const cart = [];

//export deve accadere in top level code, se fosse in un if(){ export const addToCart.. } non funzionerebbe
export const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`);
}


//////////////////////////////////////////////////////
//export con altro nome
//////////////////////////////////////////////////////

const totalPrice = 237;
const totalQuantity = 23;
export {totalPrice, totalQuantity as tq};


//////////////////////////////////////////////////////
//default import
//////////////////////////////////////////////////////

export default function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`);
}



//////////////////////////////////////////////////////
// example of using an Immediately Invoked Function Expression (IIFE) to create a module-like pattern
//In modern JavaScript, the concept of modules refers to files acting as self-contained units of code that can export/import specific parts.

//questo agisce come un modulo (un file js esterno che viene importato e utilizzato) i module servono x avere dei valori e logica circoscritti al loro interno (tipo 1 classe) questo qui sotto e' come si faceva prima, con delle iife invece di avere 1 file esterno x ogni modulo 
//////////////////////////////////////////////////////

// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;
 
//     const addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(
//             `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//         );
//     };
 
//     const orderStock = function (product, quantity) {
//         console.log(`${quantity} ${product} ordered from supplier`);
//     };
 
//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity,
//     };
//  })();
//  ShoppingCart2.addToCart('apple', 4);
//  ShoppingCart2.addToCart('pizza', 2);
//  console.log(ShoppingCart2);
//  console.log(ShoppingCart2.shippinCost);
 




