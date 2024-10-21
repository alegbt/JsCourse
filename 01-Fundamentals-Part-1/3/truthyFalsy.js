





//FALSY - value che non sono ancora false ma che lo diventano se convertite in boolean 
//falsy value sono: 0, '' (empty string), undefined, null, Nan


console.log(Boolean(0))         //0 -         false
console.log(Boolean(undefined)) //undefined - false
console.log(Boolean(``))        //empty str - false

console.log(Boolean(`ale`))     //non-empty string - true
console.log(Boolean({}))        //empty object - true


//With coercion

const money =11;
if(money){                                      //se money e' definito/non0 e' true quindi fa il primo
    console.log(`you have money ${money}`)      //se e' true (se hai money >0)
}else{
    console.log(`you have no money ${money}`)  //se money e' 0 lo considera come falsy e va qui
}

let height;

if(height){
    console.log(`heigh is defined`)         //e' true se ha qualcosa assegnato (di diverso da 0 o empty str)
}else{
    console.log(`heigh is undefined`)       //se nn ha null aassegnato e' falsy
}