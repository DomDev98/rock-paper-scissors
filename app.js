let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerSelection = Math.floor(Math.random()* choices.length);
    let randomChoice = choices[computerSelection];

    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt();
    computerSelection = computerPlay();

    addPoint(playerSelection, computerSelection);
}

function addPoint(choiceP, choiceC) {
    if (choiceP === choiceC) {
        console.log("Draw");
    }
    else if (choiceP === "rock" && choiceC === "scissors" ||
        choiceP === "paper" && choiceC === "rock" ||
        choiceP === "scissors" && choiceC === "paper") {
            console.log(choiceP + " beats " + choiceC);
            playerScore++;
        }
    else {
        console.log(choiceC + " beats " + choiceP);
        computerScore++;
    }
}

function checkGameWinner() {
    if (playerScore == computerScore) {
        result = "It's a tie!";
    }
    else if (playerScore >= computerScore) {
        result = "Congratulations! You won!";
    }
    else {
        result = "Too bad, you lost!";
    }
    return result;
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(checkGameWinner());
}

game();