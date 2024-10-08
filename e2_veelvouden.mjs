import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let start = await userInput.question('Met welk getal beginnen we ? ');
let end = await userInput.question('Met welk getal eindigen we ? ');
let deler1 = await userInput.question('Wat is het eerste getal waarop we delen? ');
let deler2 = await userInput.question('Wat is het tweede getal waarop we delen? ');

start = start * 1;
end = end * 1;
deler1 = deler1 * 1;
deler2 = deler2 * 1;

if (start == 0 || end == 0 || deler1 == 0 || deler2 == 0) {
  console.log("Voer geldige getallen in.");
} else {
  console.log("Getallen tussen " + start + " en " + end + " die deelbaar zijn door " + deler1 + " en " + deler2 + ":");
  
  for (let i = start; i <= end; i++) {
    
    if (i % deler1 === 0 && i % deler2 === 0) {
      console.log(i); 
    }
  }
}

userInput.close();