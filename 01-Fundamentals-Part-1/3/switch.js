

const day = `sunday`;

switch(day){
    case 'monday':          //day === `monday`  - fa strict comparison
        console.log(`study js`);
        console.log(`other thing`)
        break;          //senza il break se entra in monday continua fino al prossimo break
    case 'tuesday':
        console.log(`search job`)
        break;
    case 'wednesay':
    case 'thursday':
        console.log(`study programming`)
        break;
    case 'friday':
        console.log(`go workout`)   
        break;
    case 'saturday':
    case `sunday`:
        console.log(`rest`)
        break;
    default:
        console.log(`not a valid day`)    

}