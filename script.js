let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const parts = ['wheels', 'wipers', 'horn', 'driver']
const sounds = ['round and round', 'swish-swish-swish', 'beep-beep-beep', 'Move on back']

let randomNum1 = Math.floor(Math.random()*4);
let randomNum2 = Math.floor(Math.random()*4);
let part=parts[randomNum1];
let sound1=sounds[randomNum1];
let sound2=sounds[randomNum2];

const generateSongResult = () => {
    return sound1===sound2 ? 'Yes' : 'No';
}

const generatePart = () => {
    return part;
}
const generateSound1 = () => {
    return sound1;
}
const generateSound2 = () => {
    return sound2;
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

  


