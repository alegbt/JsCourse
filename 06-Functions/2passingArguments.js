'use strict';


const flight = `LH234`

const jonas = {
    name: `jonas coso`,
    passport: 234234234324
}


const checkIn = function(flightNum, passenger){
    flightNum= `LH999`;
    console.log(flightNum);
    passenger.name= `Mr. `+passenger.name;

    if(passenger.passport===234234234324){
        alert(`checked in`)
    }else{
        alert(`wrong passport`)
    }




}


checkIn(flight, jonas)

// quando assegniamo flight nel parametro di flightNum andiamoa creare 1 copia di flight, chiamata flightNum, modificandolo NON andiamo a modificare l'originale (flight resta uguale LH999 e' solo flightNum)
console.log(flight); //LH234

// quando andiamo a modificare 1 object andiamo a modificare l'object stesso, quindi cambia il valore di jonas
console.log(jonas); //{name: 'Mr. jonas coso', passport: 234234234324}


const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas);
checkIn(flight, jonas)