

const calAge = function(birtYear){
    return 2023-birtYear;
}



const yearUntilRetirement = function(birthYear){
    const yourAge = calAge(birthYear);
    const retirement = 65-yourAge;


if(retirement>0){
    return retirement;
 }else{
    return -1;
 }
}


console.log(yearUntilRetirement(1994))