let playerSelection;
let computerSelection;
let roundWinner;

const roundMessage = [
    "Congratulations, you won the round!",
    "Sorry, you lost the round!",
    "Try again, you both chose ",
    "This is not an option, try again."
];

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
        return roundMessage[0];
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
        return roundMessage[1];
    } else if (playerSelection == computerSelection){
        return roundMessage[2] + playerSelection + ".";
    } else {
        return roundMessage[3];
    }
}


function game(){
    // let playerScore = 0;
    // let computerScore = 0;


    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", () => {
        playerSelection = button.textContent
        getComputerChoice();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        roundWinner = playRound(playerSelection, computerSelection)

        let player = document.querySelector("#player");
        let computer = document.querySelector("#computer");
        let winner = document.querySelector("#winner");
        player.textContent = `Player: ${playerSelection}`;
        computer.textContent = `Computer: ${computerSelection}`;
        winner.textContent = roundWinner;


       
        
        if (playRound(playerSelection, computerSelection) == roundMessage[0]){
            // playerScore++
        } else if (playRound(playerSelection, computerSelection) == roundMessage[1]){
            // computerScore++
        }
        // console.log(`Computer: ${computerScore}, You: ${playerScore}`
    }));
};
    
    // if (playerScore > computerScore){
    //     console.log("Congratulations! You've beaten the computer!")
    // } else if (computerScore > playerScore){
    //     console.log("Sorry! The computer has won the game!")
    // } else {
    //     console.log("Game over! We have a tie!")
    // }

game();