

//array
const anArray = [
    `one`,
    `two`,
     10-2,
     [`ale`, `idk`, `boh`]  //array in array
]

const anObj = {
    firstName: `ale`,   //firstName = nome dei dati si chiama property
    lastName: `gob`,
    age: new Date().getFullYear()-1994,
    job: `developer`,
    friends: [`mario`, `ugo`, `idk`]
}

console.log(anObj)
console.log(anObj.lastName)  //si puo retreivare la property con il nome
console.log(anObj[`lastName`]) //anke con le bracket notation, si prestano alle manipulation

const nameKey = `Name`;
console.log(anObj[`first`+nameKey]) //ale
console.log(anObj[`last`+nameKey])  //gob


//adda properties all'obj

anObj.location = `italy`
anObj[`twitter`]= `@bohhTwitter`



const interest = prompt(`wich info between: firstName, lastName, age, job, friends`)


//anObj[interest] ritorna undefined se [interest] non e' 1 property di anObj, essendo undefined a falsy possiamo usarlo in un if() in modo che se ritorna qualcosa (di diverso da 1 value false/falsy) l'output e' truthy ed esce il primo output


if(anObj[interest]){    
    console.log(anObj[interest])
}else{
    console.log(`not correct input`)
}

//ale has 3 and his best friend is ugo
console.log(`${anObj.firstName} has ${anObj.friends.length} and his best friend is ${anObj.friends[1]}`)
