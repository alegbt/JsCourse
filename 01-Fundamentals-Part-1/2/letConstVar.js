



//LET : puoi riassegnare la value

let age = 30;
age=31;
console.log(age) //31


//CONST : non puoi cambiare la value
const surname = 'gob';
//surname = 'asd';      //se uncommenti da errore
console.log(surname) 

//const name;       //non puoi non dichiarare il valore di una const, devi assegnarle qualcosa

//VAR : vecchio modo di dichiarare LET, e' meglio usate LET
//var e' function scoped: cioe che se dichiarata in una funzione e' accessibile SOLO nella funzione, se dichiarata al di fuori sara' global scoped

var job = 'programmer';
job='teacher';
console.log(job)    //teacher


//non declarative
//cosi viene dichiarata global-scoped, accessibile anche al di fuori delle funzioni se dichiarata dentro di esse o viceversa accessibili nelle funzioni se dichiarate al di fuori

lastName = 'white';
console.log(lastName)