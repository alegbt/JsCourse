/* Write your code below. Good luck! 🙂 */



const calcAverage = (par1, par2, par3) => (par1+par2+par3)/3;

let scoreDolphins = calcAverage(44, 23, 71);

let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins>= 2*avgKoalas){
        console.log(`Dolphin won ${avgDolphins} vs. ${avgKoalas}`)
    }else if (2*avgDolphins<=avgKoalas){
        console.log(`Koala won ${avgDolphins} vs. ${avgKoalas}`)
    }else{
        console.log(`No team wins...`)
    }
}
    
    checkWinner(scoreDolphins, scoreKoalas)
    
    scoreDolphins = calcAverage(85,54,41);
    scoreKoalas = calcAverage(85,54,41);
    
    checkWinner(scoreDolphins, scoreKoalas)
    
    

