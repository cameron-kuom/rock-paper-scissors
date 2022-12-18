const btnContainer = document.querySelector(".btn-container");
const buttons = document.querySelectorAll("#btn");
const roundResultContainer = document.querySelector(".roundResult-container");
const roundResult = document.createElement("h2");
const pScore = document.querySelector("#pScore")
const cScore = document.querySelector("#cScore");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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
    if (playerSelection == "rock" && computerSelection == "scissors" || 
    playerSelection == "paper" && computerSelection == "rock" || 
    playerSelection == "scissors" && computerSelection == "paper"){
        return `Winner! You chose ${playerSelection} and the computer chose ${computerSelection}!`;
    } else if (playerSelection == "rock" && computerSelection == "paper" || 
    playerSelection == "paper" && computerSelection == "scissors" || 
    playerSelection == "scissors" && computerSelection == "rock"){
        return `Whoops! The computer chose ${computerSelection} and you chose ${playerSelection}.`;
    } else if (playerSelection == computerSelection){
        return `Try again. You both chose ${playerSelection}.`;
    } else {
        return `This is not an option. Try again.`;
    }
}

buttons.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    roundResult.textContent = playRound(playerSelection, computerSelection);
    roundResultContainer.appendChild(roundResult);

    if (roundResult.textContent == `Winner! You chose ${playerSelection} and the computer chose ${computerSelection}!`){
        playerScore++
    } else if (roundResult.textContent == `Whoops! The computer chose ${computerSelection} and you chose ${playerSelection}.`){
        computerScore++
    }
    
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;
}));