'use strict';
//Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4

let agesD = [5, 2, 4, 1, 15, 8, 3];
let agesC = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(ages) {
  let humanAge = ages
    .map(value => (value <= 2 ? value * 2 : 16 + value * 4))
    .filter(val => val >= 18)
    .reduce(
      (acc, val) => {
        acc.sum += val;
        acc.count += 1;
        return acc;
      },
      { sum: 0, count: 0 }
    );

  return humanAge.sum / humanAge.count;
}

console.log(calcAverageHumanAge(agesD));
console.log(calcAverageHumanAge(agesC));

// function calcAverageHumanAge(ages) {
//   let humanAges = ages
//     .map(value => (value <= 2 ? value * 2 : 16 + value * 4))
//     .filter(val => val > 19);

//   if (humanAges.length === 0) return 0; // Return 0 if there are no ages above 19

//   let totalHumanAge = humanAges.reduce((acc, val) => acc + val, 0);

//   return totalHumanAge / humanAges.length;
// }

// let agesD = [5, 2, 4, 1, 15, 8, 3];
// let agesC = [16, 6, 10, 5, 6, 1, 4];

// console.log(calcAverageHumanAge(agesD));
// console.log(calcAverageHumanAge(agesC));
