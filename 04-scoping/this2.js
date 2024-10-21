"use strict";

var firstName = `ale`;

const jonas = {
  firstName: `jonas`,
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greetArw: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },

  greetFnc: function () {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

jonas.greetArw();   //arrow function "va allo scope sopra" qui sale sopra e va nel global quindi da:
                    //Window
                    //hey ale (ale solo se e' 1 var xke estende il suo scope, se e' let da undefined)



jonas.greetFnc();   //function normale ha lo scope
                    //richiama l'obj jonas
                    //hey jonas
