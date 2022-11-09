let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const parts = ['wheels', 'wipers', 'horn', 'driver']
const sounds = ['round and round', 'swish-swish-swish', 'beep-beep-beep', 'Move on back']

//how to reset the nums in the next round (song compiling stays the same in future rounds)???? Maybe currentSongPick - in Game, and just 'songPick' (aka nums) here, like in 'humnaScored'???
const generateRandomNums =() => {
    let randomNum1 = Math.floor(Math.random()*4);
    let randomNum2 = Math.floor(Math.random()*4);
    return [randomNum1, randomNum2];
}

const generateCompAnswer = () => {
    let randomYN1 = Math.random() < 0.5;
    return randomYN1===true ? "Yes" : "No";
}

//Who gets the score?
//targetGuess here vs target in Game.js, || humanGuess here vs currentHumanGuess in Game.js- I guess because the guesses gets renewd each round, we need a default formula here with some defaultly named variables, and a set of differently named variables in Game.js to indicate a choice each time.  
  const humanScored = (humanGuess, targetGuess) => {
      return humanGuess === targetGuess ? true : false;
    }

    const computerScored = (computerGuess, targetGuess) => {
      return computerGuess === targetGuess ? true : false;
    }

const advanceRound = () => currentRoundNumber++;

  


