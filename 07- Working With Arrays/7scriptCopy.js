'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, m] of movements.entries()){
  if(m>0){
    console.log(`movement number: ${i+1} - you deposit ${m}`)
  }else if (m<0){
    console.log(`movement number: ${i+1} - you withdrew ${m}`)
  }
}

console.log("--------------")

movements.forEach(function(m, i, arr){
  if(m>0){
    console.log(`movement number: ${i+1} - you deposit ${m}`)
  }else if (m<0){
    console.log(`movement number: ${i+1} - you withdrew ${m}`)
  }
})

