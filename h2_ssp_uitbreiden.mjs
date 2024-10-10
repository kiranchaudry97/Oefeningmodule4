import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let winnergebruiker = 0;
let winnercomputer = 0;

function winner(gebruikerkeuze, computerChoice) {
    if (gebruikerkeuze === computerChoice) {
        console.log("Gelijkspel!");
    } else if (
        (gebruikerkeuze === "rock" && computerChoice === "scissors") ||
        (gebruikerkeuze === "scissors" && computerChoice === "paper") ||
        (gebruikerkeuze === "paper" && computerChoice === "rock")
    ) {
        winnergebruiker++;
        console.log("De gebruiker heeft gewonnen!");
    } else {
        winnercomputer++;
        console.log("De computer heeft gewonnen!");
    }
}

while (winnergebruiker < 3 && winnercomputer < 3) {
    let gebruikerkeuze = await userInput.question("Kies je rock, paper of scissors: ");
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log("Gebruiker koos:" + gebruikerkeuze + "vs Computer koos: " + computerChoice);
    winner(gebruikerkeuze, computerChoice);

    console.log("Huidige stand: Gebruiker -" + winnergebruiker +" | Computer - " + winnergebruiker);
}

// de spel resultaat//
if (winnergebruiker === 3) {
    console.log(" De gebruiker heeft het spel gewonnen.");
} else {
    console.log(" De computer heeft het spel gewonnen.");
}

process.exit();
