"use strict";

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};


g();
f();
console.dir(f)
//0: Closure (g) {a: 23}

//cambia la closures di f

h()
f()
console.dir(f)
//0: Closure (h) {b: 777}


//      Example 2

const boardPassengers = function(passengerNum, wait){

    const perGroup = passengerNum/3;
    
    setTimeout(function(){
        console.log(`we are boarding ${passengerNum} passenger`);
        console.log(`there are 3 groups each with ${perGroup} passenger`);
    }, wait*1000)
    console.log(`will board in ${wait} seconds`);
}

boardPassengers(180, 3) 