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
        return "tie"
    }

    // Wins
    if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "paper"
    || playerSelection === "paper" && computerSelection === "rock") {
        return "win"
    }

    // Losses
    return "lose"
}

function game(maxRounds = 5) {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome to 'Rock, Paper, Scissors', the game that separates the humans from the computers! Begin!")

    for (let round = 1; round <= maxRounds; round++) {
        let computerSelection = getComputerChoice();
        let playerSelection;

        do {
            playerSelection = prompt(`Round ${round}! Choose rock, paper, or scissors:`)
        } while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")

        let result = playRound(playerSelection, computerSelection);
        let resultStr;

        if (result === "tie") {
            resultStr = `You tied! ${titleCase(playerSelection)} ties ${computerSelection}.`
        }
        else if (result === "win") {
            playerScore += 1;
            resultStr = `You won! ${titleCase(playerSelection)} beats ${computerSelection}.`
        }
        else {
            computerScore += 1
            resultStr = `You lost! ${titleCase(computerSelection)} beats ${playerSelection}.`
        }

        console.log(`Round ${round} (${playerScore}-${computerScore}): ${resultStr}`)
    }

    let finalStr;
    if (playerScore == computerScore) {
        finalStr = "It's a tie!"
    }
    else if (playerScore > computerScore) {
        finalStr = "You win the game!"
    }
    else if (computerScore > playerScore) {
        finalStr = "You lost the game!"
    }
    finalStr += ` The final score was ${playerScore}-${computerScore}.`
    console.log(finalStr)
}

game();