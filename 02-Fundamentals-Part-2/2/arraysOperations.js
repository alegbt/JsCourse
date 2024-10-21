

//NONM SSERVE ATTRIBUIRE 1 VARIABILE ALLE OPERAZIONI SUGLIO ARRAY, PUOI PERO' FARLO X STORARE ELEMENTI SU CUI FAI OPERAZIONI
// e.g. - const shiuftato = friends.shift();  - INVECE DI - friends.shift();



//friends.push()
const friends = [`ale`, `ugo`,`pino`];
const newLength = friends.push(`boh`);  //aggiunge all'ultimo
//friends[4]=`ss`   //.push equivale a questo (credo)
console.log(friends)    //aggiunge boh
console.log(newLength); //4  .push prende la lunghezza del nuovo array


//friends.unshift()
const idk = friends.unshift(`john`) //stessa cosa del push (ritorna il numero di elementi) ma mette l;elemento al posto [0]
console.log(friends)
console.log(idk) //ritorna anche questo il numero di elementi


//friends.pop()
const popped = friends.pop() //rimuove l'ultimo
console.log(friends)
console.log(popped) //boh, esce l'elemento poppato


//friends.shift();
const shiuftato = friends.shift(); //toglie il 1
console.log(friends)
console.log(shiuftato); //john


//friends.indexOf()
console.log(friends.indexOf(`pino`)) //2 ['ale', 'ugo', 'pino']
console.log(friends.indexOf(`asdadas`)) //-1 se non esiste


//friends.includes()
console.log(friends.includes(`ale`)) //true
console.log(friends.includes(`asdasdasd`)) //false
friends.push(23)
console.log(friends.includes(`23`)) //false - fa strict comparison ===
console.log(friends.includes(23)) //true    - fa strict comparison ===


if(friends.includes(`ale`)){
    console.log(`you have a friend called ale`)
}else{
    console.log(`you don't have a friend with that name`)
}