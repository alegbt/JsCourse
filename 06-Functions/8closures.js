'use strict';

const secureBooking = function(){

    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    }
}

const booker = secureBooking();
//da qui in poi la funzione secureBooking non e' piu chiamata e quindi e' out of scope, viene tolta dal CALL STACK, come fa quindi booker ad avere accesso al suo contenuto ed incrementare passengerCount se passengerCount non e' piu accessibile?

//CLOSURES: concetto che esprime il fatto che:
// le funzioni hanno sempre accesso all'enviroment dell'execution context nella quale funzione e' stata creata, anche quando quell'execution context non esiste piu:
//nel caso di booker, essa e' stata creata nell'execution context di secureBooking, quindi ha accesso alla variabile passengerCount
//la closures e' sostanzialmente l'enviroment collegato all'execution context in cui e' stata creata la funzione

//js controlla come PRIMA cosa l'enviroment del closures, quindi, anke se esiste una global variable con lo stesso nome(qui sotto) la ignora e cerca quella che era presente nella funzione
let passengerCount=10
booker();   //1
booker();   //2
booker();   //3


console.dir(booker)