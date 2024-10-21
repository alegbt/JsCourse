
// il triple queal === non fa la coercion, restituisce true solo se le 2 value sono esattamente le stesse (value e type)

//i il double equal fa la coercion 




const age = 18;

if(age===18) console.log(`you became adult`); //true

if(18==`18`) console.log(`18 as number is == to 18 as string`)  //true

if(18===`18`) console.log(`18 as number is NOT === to 18 as string`)    //false


const favNum = Number(prompt("what's your fav number"));
console.log(favNum);
console.log(typeof favNum);

if(favNum===23){
    console.log(`23 is your number`)
}else if(favNum===7){
    console.log(`7 is your number`)
}else if(Object.is(NaN,favNum)){        //puoi usare qst o favNum!=NaN
    console.log(`wrong input`)
}else{
    console.log(`your number is ${favNum}`)
}


if(favNum!==23) console.log(`y not 23 tho`)