import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let winnergebruiker = 0;
let winnercomputer = 0;

let keuzegebruiker = await userInput.question("kies je rock, paper of scissors");



let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
 

console.log(keuzegebruiker + " vs " + computerChoice);

if(keuzegebruiker == "scissors" && computerChoice == "paper"){
    console.log("De gebruiker heeft gewonnen")
    winnergebruiker++;
    
}else if ( keuzegebruiker == "paper" && computerChoice == "scissors"){
    console.log("De computer heeft gewonnen")
winnercomputer++;



if(keuzegebruiker ==  "paper" && computerChoice == "rock"){
    console.log("De gebruiker heeft gewonnen")
    winnergebruiker++;
}else if (keuzegebruiker == "rock" && computerChoice == "paper")
console.log("De computer heeft gewonnen")
winnercomputer++;

if(keuzegebruiker == "rock" && computerChoice == "scissors"){
    console.log("De gebruiker heeft gewonnen")
    winnergebruiker++;
}else if (keuzegebruiker == "scissors" && computerChoice == "rock")
console.log("De computer heeft gewonnen")
winnercomputer++;


// wie heeft gewonnen //

} if(keuzegebruiker == computerChoice){
    console.log("Gelijk spel")
}while (winnercomputer = 3)

while (keuzegebruiker > 3)
    console.log('keuzegebruiker wint')


while (computerChoice < 3){
    console.log('computer wint')

}

process.exit()