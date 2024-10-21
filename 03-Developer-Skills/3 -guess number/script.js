'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct Number!`
// console.log(document.querySelector(`.message`).textContent);

// //x settare

// document.querySelector(`.number`).textContent= 13;
// document.querySelector(`.score`).textContent = 10;

// //.guess e' 1 input e devi usare .value

// document.querySelector(`.guess`).value=23;
// console.log(document.querySelector(`.guess`).value);

//document.querySelector(`.number`).textContent = secretNumber;

let secretNumber = Math.trunc(Math.random() * 5) + 1;
//console.log(secretNumber)
let score = 5;
let end = true;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //When wrong input
  if (!guess || guess < 0 || guess > 20) {
    if (end) {
      // document.querySelector(`.message`).textContent = `Not a valid number`;

      displayMsg(`Not a valid number`);
    }
    //When player wins
  } else if (guess === secretNumber && end) {
    end = false;
    displayMsg(`Correct Number`);
    document.querySelector(`body`).style.backgroundColor = `#1beb60`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = score;
    }

    //When guess is wrong
  } else if (guess != secretNumber && end) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? `Number too high` : `Number too low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      end = false;
      displayMsg(`You lost`)
      document.querySelector(`.score`).textContent = 0;
    }
  }
  //When guess is too low
  // } else if (guess < secretNumber && end) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = ;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     end=false;
  //     document.querySelector(`.message`).textContent = `You lost`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }
});

//Again button
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 5) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing..`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  end = true;
});

//Highscore
