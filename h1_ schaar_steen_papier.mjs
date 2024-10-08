import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});






let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
 




process.exit