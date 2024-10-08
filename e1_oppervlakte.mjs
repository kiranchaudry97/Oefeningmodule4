import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let zijde1 = await userInput.question('Geef een lengte van zijde 1 in: ');
let zijde2 = await userInput.question('Geef een lengte van zijde 2 in: ');

zijde1 = zijde1;
zijde2 = zijde2;

let oppervlakte = zijde1 * zijde2;

console.log("De oppervlakte van de rechthoek is: " + oppervlakte + " vierkante eenheden");

process.exit()