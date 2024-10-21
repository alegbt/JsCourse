'use strict';





const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}


const greeterHey = greet(`hey`)

//concetto di CLOSURES - 
//qui sto chiamando la funzione dentro (il param e' sostanzialmente name)
greeterHey(`ale`);  //hey ale
greeterHey(`pino`)  //hey pino

//posso fare funzioni di funzioni cosi
greet(`hello`)(`pinugo`) //hello pinugo



//con arrow function
//arrow function che ritorna 1 arrow function
const greet2 = greet2 => name2 => console.log(`${greet2} ${name2}`);

const greetHey2 = greet2(`hoy`)

greetHey2(`ugo`)
greet2(`ciao`)(`pinone`)