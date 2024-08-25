function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.floor(Math.random() * choices.length)

    return choices[randomIndex];
}


function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];

    let userInput = prompt('Please enter rock, paper or scissors!').toLowerCase();

    if(!validChoices.includes(userInput)) {

        alert('Invalid choice! Please try again.');
        return getHumanChoice();
    }

    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if(human === computer) {
        console.log(`It's a tie! You both chose ${human}.`);
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock") 
    ) {
        console.log('You win!');
        humanScore++;
    } else {
        console.log('You lose!');
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (humanScore < computerScore) {
        console.log('Oh no! You lost to the Computer! >:)');
    } else {
        console.log('You and Computer both tied!');
    }
}

playGame();