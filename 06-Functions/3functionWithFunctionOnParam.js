'use strict';

// rimuove gli spazi
const oneWord = function(str){
    return str.replace(/ /g, ``).toLowerCase();
}

//passo str che e' 1 frase con spazi
//str.split splitta tutti gli elementi ad ogni spazio crando 1 arr
//ritorno 1 string che consiste in tutti gli elementi spaziati tra loro con 1 spazio
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function(str, fn){
    console.log(`original string: ${str}`);
    // al parametro fn devo mettere 1 funzione x chiamare quella funzione con str passato come param
    console.log(`transformed string: ${fn(str)}`);
    // applico 1 metodo ad 1 funzione
    console.log(`transformed by: ${fn.name}`);
}

transformer(`Javascript is a language`, upperFirstWord)
transformer(`Javascript is a language`, oneWord)


const high5 = function(){
    console.log(`ciao`);
}

document.body.addEventListener('click', high5)
document.body.addEventListener('click', function(){
    console.log(`abcdefg`);
})



