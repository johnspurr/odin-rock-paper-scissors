function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}  

function titleCase(str) {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection, score) {
    playerSelection = playerSelection.toLowerCase();

    // Ties
    if (playerSelection === computerSelection) {
        return `You tied! ${titleCase(playerSelection)} ties ${computerSelection}.`
    }

    // Wins
    if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "paper"
    || playerSelection === "paper" && computerSelection === "rock") {
        return `You won! ${titleCase(playerSelection)} beats ${computerSelection}.`
    }

    // Losses
    return `You lost! ${titleCase(computerSelection)} beats ${playerSelection}.`
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));