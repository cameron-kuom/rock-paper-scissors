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
        return "Congratulations, you won the round!"
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        return "Sorry, you lost the round!"
    } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors"){
        return "Try again, you both chose " + playerSelection
    } else {
        return "This is not an option, try again"
    }
}

let playerSelection;
let computerSelection;

function game(){
    console.log("Welcome to the game!");
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3){
        if (computerScore == 3) break;
        playerSelection = window.prompt("Rock, paper, or scissors?").toLowerCase();
        getComputerChoice();
        computerSelection = getComputerChoice();
        console.log(`The computer chose ${computerSelection}`);
        console.log(`You chose ${playerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) == "Congratulations, you won the round!"){
            playerScore++
        } else if (playRound(playerSelection, computerSelection) == "Sorry, you lost the round!"){
            computerScore++
        }
        console.log(`Computer: ${computerScore}, You: ${playerScore}`)
        console.log("(---------------------)")
    }
    if (playerScore > computerScore){
        console.log("Congratulations! You've beaten the computer!")
    } else if (computerScore > playerScore){
        console.log("Sorry! The computer has won the game!")
    } else {
        console.log("Game over! We have a tie!")
    }
}

game();