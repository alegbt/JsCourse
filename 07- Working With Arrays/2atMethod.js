'use strict';

const arr = [23, 11,64];

//funziona come il modo x accedere all'index
console.log(arr[1]);    //11
console.log(arr.at(1)); //11

//prendere ultimo elemento
console.log(arr[arr.length-2]);  //11
console.log(arr.slice(-2)[0]);  //11
//con il metodo .at e' + conciso
console.log(arr.at(-2));        //11


//funziona anche con le str
console.log(`pino`.at(2));
console.log(`pino`.at(-1));


