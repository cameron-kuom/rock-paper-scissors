const btnContainer = document.querySelector(".btn-container");
const buttons = document.querySelectorAll(".btn");
const resultContainer = document.querySelector(".result-container");
const roundResult = document.querySelector(".roundResult");
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

function scoreTracker(){
    if (roundResult.textContent == `Winner! You chose ${playerSelection} and the computer chose ${computerSelection}!`){
        playerScore++
    } else if (roundResult.textContent == `Whoops! The computer chose ${computerSelection} and you chose ${playerSelection}.`){
        computerScore++
    }
}

function endGame(){
    if (playerScore == 3){
        roundResult.textContent = "CONGRATULATIONS! YOU'VE WON THE GAME!";
        roundResult.classList.add("font-change");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 3){
        roundResult.textContent = "SORRY! BETTER LUCK NEXT TIME!";
        roundResult.classList.add("font-change");
        playerScore = 0;
        computerScore = 0;
    }
}

function btnTransitionEnd(){
    buttons.forEach(button => button.classList.remove("btn-transition"));
}

function playGame(e){
    btnTransitionEnd();
    roundResult.classList.remove("font-change");
    e.target.classList.add("btn-transition");
    playerSelection = e.target.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    roundResult.textContent = playRound(playerSelection, computerSelection);
    resultContainer.appendChild(roundResult);

    scoreTracker();
    
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${computerScore}`;

    endGame();
}

buttons.forEach(button => button.addEventListener("click", playGame))
// buttons.forEach(button => button.addEventListener("click", btnTransitionEnd));