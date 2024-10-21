







const anObj = {
    firstName: `ale`,   
    lastName: `gob`,
    birthYear: 1994,
    job: `developer`,
    friends: [`mario`, `ugo`, `idk`],
    hasDriverLicense: true,

    calcAge: function(birthYear){       //function in an object
        return new Date().getFullYear()-birthYear;
    },


    calcAge2: function(){    //il this. prende l'object stesso quindi this. birthyear prende il birthyear di qst obj
        return new Date().getFullYear()-this.birthYear;
    }
}

console.log(anObj.calcAge(anObj.birthYear));

console.log(anObj.calcAge2());

console.log(anObj[`calcAge2`]());




const anObj2 = {
    firstName: `ale`,   
    lastName: `gob`,
    birthYear: 1994,
    job: `developer`,
    friends: [`mario`, `ugo`, `idk`],
    hasDriverLicense: false,

//qui assegno la value con .this, cosi quando retreivo .age non devo assegnarla ogni volta
    calcAgeOptimized: function(){       
        this.age = 2023-this.birthYear;
        return this.age;
    },
}

console.log(anObj2.calcAgeOptimized());
console.log(anObj2.age)

function hasDriverLicense(driver){
    if(driver){
        return `has driver license`
    }else{
        return `does not have driver license`
    }
}


console.log(`ale is 29 yo and he ${hasDriverLicense(anObj2.hasDriverLicense)}`)

console.log(`ale is 29 and he ${anObj2.hasDriverLicense ? `does have` : `does not have`} a driver's license`)
