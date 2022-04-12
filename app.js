

var choices= ['rock', 'paper', 'scissors'];
var winners= [];




function game() {
    // play the game
    //play 5 rounds
    //console based
    for(let i = 0; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
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
    return input;
}

function computerChoice() {
    //gets random input from cpu
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'paper' && choiceC === 'rock') ||
        (choiceP === 'scissors' && choiceC === 'paper') 
    ) {
        return 'Player'
    } else {
        return 'Computer'
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results: ');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins: ', computerWins);
    console.log('Ties: ', ties);
}

function logRound() {
    console.log('Round: ', round)
    console.log('Player Chose: ', playerChoice)
    console.log('Computer Chose: ', computerChoice)
    console.log(winner, 'Won the Round')
    console.log('--------------------------------');
}

game();

