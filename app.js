const choices= ['rock', 'paper', 'scissors']

function game() {
    // play the game
    //play 5 rounds
    //console based
}

function playRound() {
    const playerSelection= playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

function playerChoice() {
    // gets input from player
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper or Scissors. Spelling needs to be exact but capitalisation doesn't matter. "
        );
        while (input == null) {
            input = prompt("Type Rock, Paper or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
}

function computerChoice() {
    //gets random input from cpu
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Draw!';
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'paper' && choiceC === 'rock') ||
        (choiceP === 'scissors' && choiceC === 'paper') 
    ) {
        return 'Player Wins!'
    } else {
        return 'Computer Wins!'
    }
}


