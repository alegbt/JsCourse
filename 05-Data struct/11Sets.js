"use strict";

// SETS (collection of unique values - no duplicate)
//The new Set(iterable) constructor creates a new set object from an iterable object

const orderSet = new Set([
  `pasta`,
  `pizza`,
  `pizza`,
  `risotto`,
  `pasta`,
  `pizza`,
]);

console.log(orderSet); // {size: 3, pasta, pizza, risotto}
console.log(orderSet.size); //3

console.log(new Set(`ale`)); //{size: 3, a, l, e}

console.log(orderSet.has(`pizza`)); //true
console.log(orderSet.has(`pizzaasd`)); //false

orderSet.add(`suppli`);
orderSet.add(`suppli`);
console.log(orderSet); //{size: 4, pasta, pizza, risotto, suppli}

orderSet.delete(`suppli`);
console.log(orderSet); //{size: 3, pasta, pizza, risotto}

for (const x of orderSet) console.log(x); //pasta pizza risotto

//USE CASE DEI SET - rimuovere i duplicatiin 1 array

const staff = [`chef`, `waiter`, `manager`, `waiter`, `chef`];

const staffSingle = [...new Set(staff)]; //a dx ho creato 1 set, quindi ho tolto i duplicati, con lo spread operator (...) itero su di esso e lo assegno a staffSingle
console.log(staffSingle); //['chef', 'waiter', 'manager']

//puoi contare quanti elementi unici in 1 iterable
console.log(new Set(staff).size);   //3
console.log(new Set(`alessandro`).size); //8
