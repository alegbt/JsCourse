"use strict";

// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

//1

//solo eventi
//const eventSet = [...new Set(gameEvents.values())];
//console.log(eventSet);

//eventi + key
let count = new Set();
let events = [];
for (const [key, value] of gameEvents) {
  if (!count.has(value)) {
    count.add(value);
    events.push([key, value]);
  }
}

//2

events.splice(2, 1);
gameEvents.delete(64);

//3

const time = [...gameEvents.keys()].pop(); //trasformo le gameevents key i n1 arr e prendo l'ultimo elemento
console.log(time);
console.log(`event hapening on avg every ${time/gameEvents.size} mins`);

//4

for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`first half - ${key} : ${value}`);
  } else {
    console.log(`second half - ${key} : ${value}`);
  }
}
