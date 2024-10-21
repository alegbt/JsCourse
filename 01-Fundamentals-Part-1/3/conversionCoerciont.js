

//                                              Type conversion and Coercion

//Type conversion: manually convert from one type to another

const inputYear = `1991`;

console.log(inputYear+18);         //199118


//parsing the string to number
console.log(Number(inputYear)+18); //2009

console.log(typeof inputYear)      //inputYEar resta String

console.log(Number(`ciao`))        //NaN - le operazioni non convertibili danno NaN


//-----------------------------------------------------------------------------------------------------------


//Type coercion: when Javascript converts "behind the scene"

const strIntStr =`i am `+28+` years old`;
console.log(typeof strIntStr);      //alla riga sopra viene fatta la coercion e il 28 diventa una string

console.log(`23`+`10`+3);        //23103 - il piu converte a STRING
console.log(`23`-`10`-3);        //10 - il meno converte a NUMBER
console.log(`23`*`2`);           //46 - il per converte a NUMBER
console.log(`23`/`2`);           //11.5 - il diviso converte a NUMBER


let n = `1`+1;  //`11`
n = n-1;        //10
console.log(n);  //10

console.log(2+3+4+`5`); //95 - perche: (2+3+4)+`5` >> 9+`5` >> `95` (e di tipo stringa)

console.log(`10`-`4`-`3`-2+`5`); //15 - stessa logica sopra