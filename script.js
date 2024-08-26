function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    let result = '';

    if(human === computer) {
        result = `It's a tie! You both chose ${human}.`;
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock") 
    ) {
        result = 'You win!';
        humanScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;

    checkForWinner();
}

function handleClick(e) {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function checkForWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        alert(`${winner} won the game!`);
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('result').textContent = "Game reset. Let's play again!";
}

document.getElementById('rock').addEventListener('click', handleClick);
document.getElementById('paper').addEventListener('click', handleClick);
document.getElementById('scissors').addEventListener('click', handleClick);