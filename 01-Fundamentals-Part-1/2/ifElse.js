





const age = 17;


if(age>=18){
    console.log("old enough to drive")
}else{
    const yearsLeft = 18-age;
    console.log(`she'll be able to drive in ${yearsLeft} years`)
}


//se voglio riassegnare una variabile in un block non devo ridichiararla ma solo scriverla senza type

const birtYear = 1991;
let century;

if(birtYear<=2000){
    century = 20;
}else{
    century = 21;
}
console.log(century)  //20