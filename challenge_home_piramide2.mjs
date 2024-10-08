import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseInt(await userInput.question('Geef de hoogte van de piramide: '), 10);
let omtrekInput = await userInput.question('Wil je alleen de omtrek zien (true/false)? ');

let omtrek = omtrekInput === 'true';

function maakHerhaling(karakter, aantal) {
    let resultaat = '';
    for (let i = 0; i < aantal; i++) {
        resultaat += karakter;
    }
    return resultaat;
}

function tekenPiramide(hoogte, omtrek) {
    for (let i = 1; i <= hoogte; i++) {
        let spaties = maakHerhaling(' ', hoogte - i);

        let sterren = '';
        if (omtrek) {
            if (i === 1) {
                sterren = '*'; 
            } else if (i === hoogte) {
                sterren = maakHerhaling('*', 2 * i - 1); 
            } else {
                sterren = '*' + maakHerhaling(' ', 2 * i - 3) + '*'; 
            }
        } else {
            sterren = maakHerhaling('*', 2 * i - 1);
        }

        console.log(spaties + sterren);
    }
}

tekenPiramide(hoogte, omtrek);

process.exit();
