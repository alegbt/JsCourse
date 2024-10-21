'use strict'

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const firstName = `othername` 
    let output = ` you are ${age} yo, born is ${birthYear} name ${firstName} `;  //firstName prende pprima quello sopra che quello fuori dalla funzione
    console.log(output);

    if(true){
        function add(a,b){
            return a+b
        }

        output=`new output`
    }
    //console.log(add(2,3));  //con strict non funziona, senza si
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = `ale`;
calcAge(1994);
