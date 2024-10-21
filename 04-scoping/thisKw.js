'use strict';




const obj1 = {
  name: `obj1`,
  obj2: {
    name: `obj2`,
    calcThis: function () {
      console.log(this);
    },
  },
};

obj1.obj2.calcThis();

console.log(`---------`);

function a() {
  console.log(this);
}

a();

console.log(`---------`);


const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037-this.year);
    }
}

jonas.calcAge();

const matilda = {
    year: 2017
}


//METHOD BORROWING, assegno il metodo ad 1 altro metodo e l'obj puo usarlo
matilda.calcAge = jonas.calcAge;
matilda.calcAge()