"use strict";

let txt = `What is your favourite programming language?\n
0: JavaScript\n
1: Python\n
2: Rust\n
3: C++\n
(Write option number)`;

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  displayResults(type = 'array') {
    if (type === "string") {
      console.log(`Poll results are ${this.answers.join(`, `)}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },

  registerNewAnswer() {
    //get answer
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );

    //register answer
    //opera lo short circuiting, se tutte le condizioni sono rispettate vai avanti fino all'ultimo, il quale aumenta answers  di 1 corrispondente allo slot associato al numero di input
    typeof input === "number" &&
      input < this.answers.length &&
      this.answers[input]++;
    //versione classica (di qst sopra)
    // if(input===0){
    //     this.answers[0]++;
    // }else if(input===1){
    //     this.answers[1]++;
    // }else if(input===2){
    //     this.answers[2]++;
    // }else if(input===3){
    //     this.answers[3]++;
    // }else{
    //     console.log(`wrong input`);
    // }




    this.displayResults();
    this.displayResults('string');


},

};


document
.querySelector(".poll")
.addEventListener("click", poll.registerNewAnswer.bind(poll));



let arr1 = [5, 2, 3];
let arr2 = [1, 5, 3, 9, 6, 1];


//la funzione displayresults cerca this.answers quindi creo 1 obj con answers come property, metto come primo param string x fare nche l'altro output
poll.displayResults.call({answers:arr1})
poll.displayResults.call({answers:arr1}, 'string')
poll.displayResults.call({answers:arr2})
poll.displayResults.call({answers:arr2}, 'string')

