function capitalizeFirstLetter(string){
    string = string.charAt(0).toUpperCase() + string.slice(1)
    return string
}


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
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        return `Congratulations, you won the round! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        return `Sorry, you lost the round! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`
    } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors"){
        return "Try again, you both chose " + playerSelection
    }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log(capitalizeFirstLetter(playerSelection));