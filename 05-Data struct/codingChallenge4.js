/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
*/

var button = document.getElementById("myButton");
var textarea = document.getElementById("myText");

button.addEventListener("click", function () {
  var text = textarea.value;
  const words = text.split(`\n`);
  const arr = [];
  let n = 1;
  let checkMark = "\u2714";

  for (const x of words) {
    const parts = x.trim().split(`_`); //ricevo array di parole divise da _
    let camelWords = parts[0].toLowerCase(); //rendo la 1 lowercase

    for (let i = 1; i < parts.length; i++) {
      camelWords +=
        parts[i][0].toUpperCase() +
        parts[i].slice(1).toLowerCase() +
        checkMark.repeat(n);
    }
    n++;
    arr.push(camelWords);
  }

  arr.forEach(function (x) {
    console.log(x);
  });
});
