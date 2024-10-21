

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []
const totals = []

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i=0; i<bills.length; i++){
    tips[i]=calcTip(bills[i]);
    totals[i]=tips[i]+bills[i]
}

console.log(`tips:  `+tips)
console.log(`totals  `+totals)


function calcAverage(arr){
    let sum=0
    for(let z=0; z<arr.length; z++){
        sum += arr[z];
    }
    return sum/arr.length
}

console.log(calcAverage(bills))