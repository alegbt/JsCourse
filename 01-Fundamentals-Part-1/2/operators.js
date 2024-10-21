





//Variables operations
const currentYear = 2023;
const ageA = currentYear - 1994;
const ageB = currentYear - 1998;
console.log(ageA, ageB)
console.log(ageA*2, ageB/2)



//Strings
const firstname = 'Ale';
const lastName = 'gob';
console.log(firstname+" "+lastName)



//Math operations
let x = 10+5;
x += 10;        //25
x *= 2;         //50
x++;            //51
x--;            //50
console.log(x)  



//Comparison operators
console.log(ageA>ageB)  //true
console.log(ageB>=18)   //true



//Operators order https://lia.disi.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html

x = y = 25-10-5;
console.log(x, y)  //10, 10  -- perche = ha priorita minore dei + e - , quindi x= y si fa dopo che si fanno le operazioni

const avgAge = (ageA+ageB)/2;
console.log(avgAge);