function getComputerChoice(){
    let randomResult = Math.ceil(Math.random()*9)
    if (randomResult <= 3){
        return "rock";
    } else if (randomResult <= 6){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        return computerSelection == "scissors" ? "You win!" : computerSelection == "paper" ? "You lose!" : "You tied!"
    } else if (playerSelection == "paper"){
        return computerSelection == "rock" ? "You win!" : computerSelection == "scissors" ? "You lose!" : "You tied!"
    } else if (playerSelection == "scissors"){
        return computerSelection == "paper" ? "You win!" : computerSelection == "rock" ? "You lose!" : "You tied!"
    } else {
        return "That is not an option, try again."
    }
}

let playerSelection = window.prompt("Rock, paper, or scissors?").toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));