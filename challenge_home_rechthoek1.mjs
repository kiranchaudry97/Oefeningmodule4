import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseInt(await userInput.question('Geef de hoogte van de rechthoek: '), 10);
let breedte = parseInt(await userInput.question('Geef de breedte van de rechthoek: '), 10);

function tekenRechthoek(hoogte, breedte) {
    console.log('*'(breedte));
    
    for (let i = 1; i < hoogte - 1; i++) {
        console.log('*' + ' '(breedte - 2) + '*');
    }

    if (hoogte > 1) {
        console.log('*'(breedte));
    }
}

tekenRechthoek(hoogte, breedte);

process.exit();
