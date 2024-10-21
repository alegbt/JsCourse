'use strict';

const runOnce = function(){
    console.log(`this will run every time its called`);
}

//questo runna 1 volta ma puo essere re-runnato dopo se lo si richiama
runOnce();


//IMEDIATELY INVOKED FUNCTIN EXPRESSION
//questa funzione runna ora e non puo essere richiamata xke non ha riferimenti
(function(){
    console.log(`this will run only once in the whole file`);
    var isPrivateScope = 33;
})();

//lo scope delle espressioni e' PRIVATE, il var non e' portato fuori nelle espressioni
//console.log(isPrivateScope); //errore


//con arrow function
(() => console.log(`this also will run only once ` ))();

//non si ha accesso allol scope delle function, la data dentro le function e' difinita PRIVATE ed INCAPSULATA


//cosi incapsuliamo i dati let e const, ma non VAR, i var vanno fuori dallo scope fatto in qst modo

{
    const isPrivate2 = 55;
    var notPrivate = 11;
}


//console.log(isPrivate2); //errore
console.log(notPrivate); //11



