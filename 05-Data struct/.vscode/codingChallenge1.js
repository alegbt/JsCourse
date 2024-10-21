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

//players 1 e' il primo elemento di game.players, players2 il 2 elemento
let [players1, players2] = game.players;

let [gk, ...fieldPlayers] = players1;

//let allPlayers = [...game.players[0], ...game.players[1]]
let allPlayers = game.players.flat();

let sub = ["Thiago", "Coutinho", `Perisic`];
let players1Final = [...allPlayers, ...sub];

//assegno in 3 variabili separate team1, draw e team2 ai valori di team.odds
let {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...names) {
  console.log(...names, names.length);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

printGoals(...game.scored);


//se true non va oltre il &&, se false va avanti (&& fa short circuit su false)
team1 > team2 && console.log(`team 1 ${team1} is bigger than team2 ${team2}`);
team1 < team2 && console.log(`team 2 ${team2} is bigger than team1 ${team1}`);
team1 == team2 && console.log(`${team1} is equal to ${team2}`);
