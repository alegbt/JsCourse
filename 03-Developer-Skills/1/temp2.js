const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calc = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (isNaN(temperatures[i])) {
      continue;
    } //funzionano entrambe qst 2, fanno la stssa cosa
    if (typeof temperatures[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max);
  console.log(min);
  return max - min;
};

calc([3, 4, 6]);
const amplitude = calc(temperatures);
console.log(amplitude);

console.log(
  `-----------------------------------------------------------------------------------------------`
);
//now with 2 arrays of temp

const temp2 = [1, 2, 3, 4, 5, 31];

const calc2 = function (t1, t2) {
  temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (isNaN(temperatures[i])) {
      continue;
    } //funzionano entrambe qst 2, fanno la stssa cosa
    if (typeof temperatures[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitude2 = calc2(temperatures, temp2);
console.log(amplitude2);
