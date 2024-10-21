

const arr = [
    `ale`,
    `gob`,
    10-1,
    [`boh`, `boh2`, 123]
]

//reverse for loop
for(let i = arr.length-1; i>=0; i--){
    console.log(arr[i])
}



//loop in loop
for(let i =1; i<=4; i++){
    console.log(`starting exercise n. ${i}`)
    for(let n =1; n<=5; n++){
        console.log(`doing rep n. ${n} of ex. n. ${i}`)
    }
}