


const arr = [
    `ale`,
    `gob`,
    10-1,
    [`boh`, `boh2`, 123]
]




let i=0
while(arr[i] !== undefined){
    console.log(arr[i])
    i++
}


// prima parte: (Math.random()*10) crea 1 numero da 0 a 9.99
//seconda parte: fa includere il numero che hai scritto con +1
//(Math.random()*10)+1

//Math.trunc leva i decimali

let rand = Math.trunc(Math.random()*6)+1
console.log(rand)

while(rand!==6){
    console.log(rand);
    rand = Math.trunc(Math.random()*6)+1
    if(rand===6)console.log(`rolled 6! ${rand}`)
}