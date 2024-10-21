


const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let strFinal = ``;
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    let str = `... ${arr[i]}C in ${count} `;
    count++;
    strFinal = strFinal + str;
  }
  return strFinal;
}

console.log(printForecast(arr1));
console.log(printForecast(arr2));






