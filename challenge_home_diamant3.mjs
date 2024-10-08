import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseInt(await userInput.question('Geef de hoogte van de diamant (helft): '), 10);
let omtrekInput = await userInput.question('Wil je alleen de omtrek zien (true/false)? ');

let omtrek = omtrekInput === 'true';

function herhaling(karakter, aantal) {
    let resultaat = '';
    for (let i = 0; i < aantal; i++) {
        resultaat += karakter;
    }
    return resultaat;
}

function Diamant(hoogte, omtrek) {
    for (let i = 1; i <= hoogte; i++) {
        let breedte = herhaling(' ', hoogte - i);
        let sterren;

        if (omtrek) {
            if (i === 1) {
                sterren = '*'; 
            } else {
                sterren = '*' + herhaling(' ', 2 * i - 3) + '*'; 
            }
        } else {
            sterren = herhaling('*', 2 * i - 1); 
        }

        console.log(breedte + sterren);
    }

    for (let i = hoogte - 1; i >= 1; i--) {
        let breedte = herhaling(' ', hoogte - i);
        let sterren;

        if (omtrek) {
            if (i === 1) {
                sterren = '*'; 
            } else {
                sterren = '*' + herhaling(' ', 2 * i - 3) + '*'; 
            }
        } else {
            sterren = herhaling('*', 2 * i - 1); 
        }

        console.log(breedte + sterren);
    }
}

Diamant(hoogte, omtrek);

process.exit();
