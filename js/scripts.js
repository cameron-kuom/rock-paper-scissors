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