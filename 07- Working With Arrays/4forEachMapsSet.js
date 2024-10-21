'use strict';

//MAP

//forEach nelle Map=
//value = 1  valore
//key = 2 valore
//map = obj map


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);



  currencies.forEach(function(value,key,map){
    console.log(`${key} - ${value}`);
  })
//USD - United States dollar


//SET
//solo key unique

//forEach nei Set:
//value, key = la stessa cosa, valore dell'item (key = trowhaway variable)
//set (3 valore) = obj Set

const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);

console.log(currenciesUnique); //{size: 3, USD, GBP, EUR}

currenciesUnique.forEach(function(value, key, set){
    console.log(`${key} - ${value}`);
})
USD - USD