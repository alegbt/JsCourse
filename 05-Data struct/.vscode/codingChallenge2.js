"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
//n e' il primo elemento (il num nell'arr di entries) e player il secondo (il player)
for (const [n, player] of game.scored.entries())
  console.log(`goal ${n + 1} : ${player}`);

//2
let values = Object.values(game.odds);
let avg = 0;
for (const n of values) avg += n;
avg /= values.length;
console.log(avg);

//3
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for (const [k, v] of Object.entries(game.odds)) {
  const str = k === `x` ? `draw: ` : `victory: ${game[k]} `;
  console.log(`Odd of ${str} ${v}`);
}



//4
//se scorers[player] e' true && non undefined (esiste nell'object)
//scorers[player]++ il ++si fa sulla value della key player
//se [player] e' false (non esiste nell'object)
//scorers[player] = 1 - popolo l'obj con la key player e gli assegno 1 come value



const scorers = {};
for (const player of game.scored) {
  scorers[player] && scorers[player] !== undefined ? scorers[player]++ : scorers[player] = 1
}



console.log(scorers);

const obj = {};

//si possono definire pair key-value cosi
obj[`first`] = `abc`;
obj[`second`] = `def`;
console.log(obj); //first: 'abc', second: 'def'}
