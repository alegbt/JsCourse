function idk() {
  let a = 1;
  var b = 2;

  if (2 > 1) {  //deve essere true x eseguirsi e instanziare var
    let a = 12;
    var c = 13; //anche se in 1 scope + basso sotto ci accedo
  }

  console.log(c); //accede a var xke var e' function scoped, quindi e' accessibile in tutta la FUNZIONE (slo nella funzione, non si applica nel global scope)
}

idk();  //13
