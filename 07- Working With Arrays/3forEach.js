const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//for of
// for(const movement of movements){




//.entries restituisce un array che contiene altri array, i quali sono pair di key-value, in qst caso:
//[ [0, 200], [1, 450], [2, -400] ...]
//funzione simile al for i nel senso che si ha pair loop(n) - value
   for(const [i, movement] of movements.entries()){
    if(movement>0){
        console.log(`Movement ${i+1}: u deposited ${movement}`);
    }else{
        console.log(`Movement ${i+1}: u withdrew ${movement}`);
    }
} 

console.log(`----------------------------------------`);

//                      FOR EACH
//fa un foreach su ogni elemento dell'array, il param nella callback function (quella dentro) e' l'istanza dell'oggetto dell'array x ogni loop, fa la stessa cosa del for of
movements.forEach(function(x){
    if(x>0){
        console.log(`u deposited ${x}`);
    }else{
        console.log(`you withdrew ${Math.abs(x)}`);
    }
})

console.log(`-------------------`);

//se usi il .forEach con una callback function essa prende fino a 3 parameters, questi si riferiranno automaticamente a:
//il 1 alla value dell'elemento nella corrente iterazione
//il 2 all'index dell'elemento nella corrente iterazione
//il 3 all'array stesso, stessa cosa in qst caso di movements movements === array

movements.forEach(function(value, index, array){
    if(value>0){
        console.log(`Movement ${index+1}: u deposited ${value}`);
    }else{
        console.log(`Movement ${index+1}: u withdrew ${value}`);
    }
})