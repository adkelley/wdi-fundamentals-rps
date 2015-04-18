////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  return move || getInput();
}

function getComputerMove(move) {
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
  // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
  // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
  // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  if (computerMove != playerMove) {
    switch (playerMove) {
      case 'paper' :
        return (computerMove == 'scissors') ?  'computer' : 'player';
      case 'scissors' :
        return (computerMove == 'rock') ? 'computer' : 'player';
      case 'rock' :
        return (computerMove == 'paper') ? 'computer' : 'player';
      default:
        return 'computer'; // if Player enters invalid move then computer automatically wins; 
    }  
  } else return 'tie'; 
}

function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  var playerMove, computerMove, winner = '';
  while (playerWins < 5 && computerWins < 5) {
    playerMove = getComputerMove(); // change this to getPlayerMove() for interaction
    computerMove = getComputerMove();
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    winner = getWinner(playerMove, computerMove);
    if (winner != 'tie') {
      if (winner == 'computer') {
        computerWins++;
      } else if (winner == 'player') {
        playerWins++;
      }
    }
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  }
  console.log('The winner is ' + ((playerWins > computerWins) ? 'player' : 'computer')); 
  return [playerWins, computerWins];
}
