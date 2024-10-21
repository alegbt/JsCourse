const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let strFinal = ``;

  for (let i = 0; i < arr.length; i++) {
    strFinal += `${arr[i]}C in ${i+1} days ... `;
  }

  return `... `+strFinal;
}

console.log(printForecast(arr1));
console.log(printForecast(arr2));