"use strict";

const jonas = {
  firstName: `jonas`,
  year: 1991,

  calcAge: function () {
    //console.log(2037 - this.year);

    //se usi function expression devi usare una variabile cn this assegnato
    const self = this;

    const isMilleanialExpression = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    //se usi function declaration devi usare una variabile cn this assegnato
    function isMilleanialDeclaration() {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    }

    //con le arroiw function si risolve il problema
    const isMilleanialArrow = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMilleanialExpression();
    console.log(`----`);
    isMilleanialDeclaration();
    console.log(`----`);
    isMilleanialArrow();
  },
};
jonas.calcAge();


console.log(`ARGUMENTS
            ---------------------------`);
//Arguments


const expr = function(a,b){
    console.log(arguments);
    console.log(a+b);
    return a+b;
}
expr(2,3)       //5
expr(2,3,4)     //5

var exprArrow = (a,b) => {
    console.log(arguments);
}

//exprArrow(2,3)  //Uncaught ReferenceError: arguments is not defined

//argument non funzioan con le arrow functions

