const buttons = document.querySelectorAll("button");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomResult = Math.ceil(Math.random()*9)
    if (randomResult <= 3){
        return "Rock";
    } else if (randomResult <= 6){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper"){
        return `Winner! You chose ${playerSelection} and the computer chose ${computerSelection}!`;
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
        return `Whoops! THe computer chose ${computerSelection} and you chose ${playerSelection}.`;
    } else if (playerSelection == computerSelection){
        return `Try again. You both chose ${playerSelection}.`;
    } else {
        return `This is not an option. Try again.`;
    }
}