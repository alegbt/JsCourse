// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calc = function () {
  let max = temperatures[0];
  let min = temperatures[0];

  for (let n = 0; n < temperatures.length; n++) {
    if (isNaN(temperatures[i])) {
      continue;
    }
    let c = temperatures[n];
    if (c > max) {
      max = c;
    }
    if (c < min) {
      min = c;
    }
  }

  let amplitude = max + min;
  console.log(amplitude, max, min);
  return amplitude;
};
calc();
