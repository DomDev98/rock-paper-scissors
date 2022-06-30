let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let computerSelection = Math.floor(Math.random()* choices.length);
    let randomChoice = choices[computerSelection];

    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt();
    computerSelection = computerPlay();

    checkWinner(playerSelection, computerSelection);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        console.log("It's a tie!");
    }
    else if (choiceP === "rock" && choiceC === "scissors" ||
        choiceP === "paper" && choiceC === "rock" ||
        choiceP === "scissors" && choiceC === "paper") {
            console.log("You win! " + choiceP + " beats " + choiceC);
        }
    else {
        console.log("You lose! " + choiceC + " beats " + choiceP);
    }
}

playRound();