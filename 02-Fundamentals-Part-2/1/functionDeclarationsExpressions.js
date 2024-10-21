

//function declaration


const age1 = calcAge1(1994) //PUO essere chiamata prima di quando e' definita

function calcAge1(birthYear){
    return 2023 - birthYear;
}



console.log(age1)



//function expression   - function without a name (anonymous function)

const calcAge2 = function(birthYear){
    return 2023 - birthYear
}

const age2 = calcAge2(1994) // NON PUO essere chiamata prima di quando e' definita


console.log(age2)