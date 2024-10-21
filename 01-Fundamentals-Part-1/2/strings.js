




const firstName = "ale";
const year = 1994;
const lastName = 'gob';
const number = 100;

const concat = firstName+' '+lastName+" "+year;
console.log(concat)         //ale gob 1994


//puoi usare le variabili nelle String usando ` ` ("backticks - quelli a sx) e con ${} - i backticks vanno sempre bene al posto delle ""
const curly = `\nname: ${firstName}\nlastname: ${lastName}\nyear-100= ${year-number}`;
console.log(curly)

//Newline - con i backticks puoi andare a capo e va a capo anche la line
console.log(`
${firstName}
${lastName}
${year}`)

