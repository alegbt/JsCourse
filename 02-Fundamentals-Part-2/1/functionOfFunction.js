'use strict';

function cutFruitPieces(fruit){
    return fruit*4;
}



function fruitProcessor(apples, oranges){ 

const applepieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applepieces} apples and ${orangePieces} oranges.`
    return juice; 
}


console.log(fruitProcessor(2,3));