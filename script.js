let playerScore = 0;
let computerScore = 0;
let round = 0;

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', playRound));

function playRound(e) {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();
    const emoji = {
        "rock": "🪨",
        "paper": "📄",
        "scissors": "✂️"
    }

    const result = evaluate(playerChoice, computerChoice);
    let status = `Your ${emoji[playerChoice]}`
    switch (result) {
        case "win": 
            status += " won against "
            playerScore += 1;
            document.querySelector("#player > .score-text").textContent = playerScore;
            break;
        case "loss":
            status += " lost to "
            computerScore += 1;
            document.querySelector("#computer > .score-text").textContent = computerScore;
            break;
        default:
            status += " tied with "
    }
    status += `the computer's ${emoji[computerChoice]}.`
    document.querySelector(".status > p").textContent = status;
    round += 1;
    document.querySelector("#round").textContent = `Round ${round}`;

    if (playerScore === 5) {
        endGame(true)
    } else if (computerScore === 5) {
        endGame(false)
    }
    return;
}

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*3)]
}

function evaluate(playerChoice, computerSelection) {
    // Ties
    if (playerChoice === computerSelection) {
        return "tie"
    }

    // Wins
    if (playerChoice === "rock" && computerSelection === "scissors"
    || playerChoice === "scissors" && computerSelection === "paper"
    || playerChoice === "paper" && computerSelection === "rock") {
        return "win"
    }

    // Losses
    return "loss"
}

function endGame(win) {
    buttons.forEach(button => button.toggleAttribute("disabled"))
    document.querySelector(`#${win ? "player" : "computer"}`).classList.toggle("winner")

    const gameOver = document.createElement('div');
    gameOver.classList.add("gameOver")

    const endText = document.createElement('b');
    endText.textContent = win ? "The winner is you! " : "You just lost the game. "
    gameOver.appendChild(endText)

    const playAgain = document.createElement('a');
    playAgain.setAttribute("href", "#")
    playAgain.setAttribute("onclick", "location.reload()")
    playAgain.textContent = "Play again?"
    gameOver.appendChild(playAgain)

    document.querySelector(".container").appendChild(gameOver);
}