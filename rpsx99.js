let
playerOneMoveOneType,
playerOneMoveOneValue,

playerOneMoveTwoType,
playerOneMoveTwoValue,

playerOneMoveThreeType,
playerOneMoveThreeValue,

playerTwoMoveOneType,
playerTwoMoveOneValue,

playerTwoMoveTwoType,
playerTwoMoveTwoValue,

playerTwoMoveThreeType,
playerTwoMoveThreeValue;

function setPlayerMoves(Player,moveOneType,
moveOneValue,moveTwoType,moveTwoValue,moveThreeType,moveThreeValue) {

  if (!moveOneType||!moveOneValue || !moveTwoType ||!moveTwoValue ||
    !moveThreeType || !moveThreeValue){
      return null;
    }

  if (!isValidMoveType(moveOneType)||!isValidMoveType(moveTwoType)
    ||!isValidMoveType(moveThreeType)){
    return;}

  if (!isValidMoveValue(moveOneValue)||!isValidMoveValue(moveTwoValue)
    ||!isValidMoveValue(moveThreeValue)){
    return;}

  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99){
    return;
    }

  if (Player === 'Player One'){

    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  }
  else if (Player === 'Player Two'){

//  CODE FOR CREATING MANUAL PLAYS FOR PLAYER 2
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;


  }
}


function setComputerMoves(){
  for (roundNumber = 1; roundNumber <=3; roundNumber++){

  switch (roundNumber){
    case 1:
    playerTwoMoveOneType = randomMoveType();
    playerTwoMoveOneValue = Math.ceil(Math.random()*96);
    break;

    case 2:
    playerTwoMoveTwoType = randomMoveType();
    playerTwoMoveTwoValue = Math.ceil(Math.random()*(98 - playerTwoMoveOneValue));
    break;

    default:
    playerTwoMoveThreeType = randomMoveType();
    playerTwoMoveThreeValue = 99 - playerTwoMoveTwoValue;
    break;
    }
  }

  playerTwoMoveOneType = randomMoveType();
  playerTwoMoveOneValue = Math.floor(Math.random()*97)+1;
  playerTwoMoveTwoType = randomMoveType();
  playerTwoMoveTwoValue = Math.floor(Math.random()*(97 - playerTwoMoveOneValue))+1;
  playerTwoMoveThreeType = randomMoveType();
  playerTwoMoveThreeValue = 99 - playerTwoMoveTwoValue - playerTwoMoveOneValue;
}


function randomMoveType(){
  //creates a random number, 1 or 2
  let randomNumber = Math.ceil(Math.random()*2);

  switch(randomNumber){
    case 1:
    return 'rock'
    break;

    case 2:
    return 'paper'
    break;

    default:
    return 'scissors'
    break;
  }
}

function isValidMoveType (moveType) {
  return (moveType === 'rock')||(moveType === 'paper')||
  (moveType === 'scissors');
  }

function isValidMoveValue(moveValue){
    return (moveValue >= 1) && (moveValue <= 99);
}

function getMoveWinner(
  playerOneMoveType,
  playerOneMoveValue,
  playerTwoMoveType,
  playerTwoMoveValue) {
      if (!playerOneMoveType ||
          !playerOneMoveValue ||
          !playerTwoMoveType ||
          !playerTwoMoveValue) {
          return null;}

      if (playerOneMoveType === playerTwoMoveType){
      //players pick same move and value
        if (playerOneMoveValue === playerTwoMoveValue){
            return 'Tie';
     //players pick same move, but player 1 picks higher value
        }   else if(playerOneMoveValue > playerTwoMoveValue){
            return 'Player One';
        }   else {
            return 'Player Two';
          }
        }

    //player 1 pics ROCK
    if (playerOneMoveType === 'rock'){
        if (playerTwoMoveType === 'scissors'){
          return 'Player One';
     //player2 picks PAPER
        } else {
            return 'Player Two';}
                                           }
     //player 1 picks PAPER
     else if (playerOneMoveType === 'paper'){
        if (playerTwoMoveType === 'scissors'){
          return 'Player Two';}
    //player2 picks ROCK
          else {return 'Player One';}
        }
  else {//player 1 picks scissors
    if (playerTwoMoveType === 'rock'){
     return 'Player Two';}
    //player2 picks paper
    else {return 'Player One';}
    }
  }


  function getRoundWinner(roundNumber) {

        switch(roundNumber){
        case 1:
          return getMoveWinner(playerOneMoveOneType,playerOneMoveOneValue,
          playerTwoMoveOneType,playerTwoMoveOneValue);
          break;

        case 2:
          return getMoveWinner(playerOneMoveTwoType,playerOneMoveTwoValue,
          playerTwoMoveTwoType,playerTwoMoveTwoValue);
          break;

        case 3:
          return getMoveWinner(playerOneMoveThreeType,playerOneMoveThreeValue,
          playerTwoMoveThreeType,playerTwoMoveThreeValue);
        break;

        default:
            return null;
    }
  }

  function getGameWinner(){
    let playerOneWinCount=0;
    let playerTwoWinCount=0;

    if(inputsSet()){

      for (roundNumber = 1; roundNumber <=3; roundNumber++){
        let winner = getRoundWinner(roundNumber);

        if (winner ==='Player One'){
          playerOneWinCount+=1;
        }
        else if (winner ==='Player Two'){
          playerTwoWinCount+=1;
        }
        /* it's a tie*/
      }

      if (playerOneWinCount > playerTwoWinCount){
        return 'Player One';
      }
      else if (playerOneWinCount < playerTwoWinCount){
        return 'Player Two';
      }
      return 'Tie';
    }
    return null;
  }

function inputsSet(){
  return playerOneMoveOneType&&
  playerOneMoveOneValue&&

  playerOneMoveTwoType&&
  playerOneMoveTwoValue&&

  playerOneMoveThreeType&&
  playerOneMoveThreeValue&&

  playerTwoMoveOneType&&
  playerTwoMoveOneValue&&

  playerTwoMoveTwoType&&
  playerTwoMoveTwoValue&&

  playerTwoMoveThreeType&&
  playerTwoMoveThreeValue;
}
