import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let start = await userInput.question('Met welk getal beginnen we ? ');
let end = await userInput.question('Met welk getal eindigen we ? ');
let deler1 = await userInput.question('welke eerste getal kunnen  we testen ? ');
let deler2 = await userInput.question('Welke tweede getal kunnen we testen ? ');

let deelbaar1 = await userInput.question(' kan het getal deelbaar zijn door deler1 (true/false)? ');
let deelbaar2 = await userInput.question('kan het getal deelbaar zijn door deler2 (true/false)? ');

start = start * 1;
end = end * 1;
deler1 = deler1 * 1;
deler2 = deler2 * 1;

deelbaar1 = deelbaar1 === 'true';
deelbaar2 = deelbaar2 === 'true';

if (start == 0 || end == 0 || deler1 == 0 || deler2 == 0) {
  console.log("Voer getallen in.");
} else {
  console.log("Getallen tussen " + start + " en " + end + " die voldoen aan de deel kunnen zijn:");

  for (let i = start; i <= end; i++) {
    let mogelijk1 = deelbaar1 ? i % deler1 === 0 : i % deler1 !== 0;
    let mogelijk2 = deelbaar2 ? i % deler2 === 0 : i % deler2 !== 0;

    if (mogelijk1 && mogelijk2) {
      console.log(i); 
    }
  }
}

process.exit();
