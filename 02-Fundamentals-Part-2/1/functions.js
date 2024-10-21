'use strict';


function logger(){
    console.log(`my name is ale`)
}

logger();



function fruitProcessor(apples, oranges){ //non serve mettere il type
    //console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice; //ritorno la riga sopra
}

const appleJuice = fruitProcessor(5, 1); //funziona anke con string ecc. come param   
console.log(appleJuice) //juice with 5 apples and 0 oranges.
console.log(fruitProcessor(5, 1)) //juice with 5 apples and 0 oranges.

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);