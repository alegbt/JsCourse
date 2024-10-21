'use strict';
//m0stra errori nella console di chrome
//riserva alcuni nomi (e.g. interface)



let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;

if(hasDriverLicense) console.log(`i can drive`);

//Uncaught SyntaxError: Unexpected strict mode reserved word
// const interface = 'abc'; 
// const private = 1;