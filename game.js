let target;

const roundNumberDisplay = document.getElementById('round-number');
const targetAnswerDisplay = document.getElementById('target-answer');
const partDisplays = document.getElementsByClassName('part');
const sound1Displays = document.getElementsByClassName('sound1');
const sound2Displays = document.getElementsByClassName('sound2');
const songResultLabel = document.getElementById("song-result-label");

const computerScoreDisplay = document.getElementById('computer-score');
const computerGuessDisplay = document.getElementById('computer-guess');
const computerWinsDisplay = document.getElementById('computer-wins');

const humanScoreDisplay = document.getElementById('human-score');
const humanGuessInput = document.getElementById('human-guess');
const guessField = document.getElementById('guess-field');
const humanWinsDisplay = document.getElementById('human-wins');

const runGameButton = document.getElementById('game-button');
const nextRoundButton = document.getElementById('next-round')

  //Display selected human guess in the guess-field:
 function populateGuessField () {
    guessField.value = humanGuessInput.elements["human-guess"].value;
    guessField.innerHTML = humanGuessInput.elements["human-guess"].value;
  };
  humanGuessInput.addEventListener('input', () => {
  populateGuessField ();
  })

//Clicking on 'Run the Game' Button:
runGameButton.addEventListener('click', () => {
   //Display the compiled song:
  songResultLabel.innerText = 'Does the 2nd line of the song match?';

  const nums = generateRandomNums();
  const part = parts[nums[0]];
  const sound1 = sounds[nums[0]];
  const sound2 = sounds[nums[1]];

  for(i=0; i<partDisplays.length; i++){
    partDisplays[i].innerHTML = part;
     };
  for(i=0; i<sound1Displays.length; i++){
    sound1Displays[i].innerHTML = sound1;
     };
  for(i=0; i<sound2Displays.length; i++){
    sound2Displays[i].innerHTML = sound2;
     };
  
   // Generate the random answers:
  target = sound1===sound2 ? 'Yes' : 'No'; //Function defined in Script.js.
    // Retrieve the player's guess
  const currentHumanGuess = humanGuessInput.elements["human-guess"].value;
    // Make a random 'computer guess'
  const computerGuess = generateCompAnswer() //Function defined in Script.js

    // Display the computer guess and the target:
  computerGuessDisplay.innerText = computerGuess;
  targetAnswerDisplay.innerText = target;

    // Determine who scores.
  const humanIsWinner = humanScored(currentHumanGuess, target);
  const computerIsWinner = computerScored(computerGuess, target);

    // Display the winners and add +1 to their scores:
  if (humanIsWinner) {
    humanWinsDisplay.innerText = 'You Score!';
    humanScore++;
  } 
  if (computerIsWinner) {
    computerWinsDisplay.innerText = 'Computer Scores!';
    computerScore++;
  }

    // Display the current scores:
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  
    // Set the correct disabled state for the buttons
  runGameButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
});


nextRoundButton.addEventListener('click', () => {
  // Increase the round number
  advanceRound();
  // Display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  runGameButton.removeAttribute('disabled');

  // Reset the guess input box and the target number display:
  targetAnswerDisplay.innerText = '';
  runGameButton.innerText = 'Run the Game';
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  humanWinsDisplay.innerText = '';
  guessField.value = '';
  guessField.innerHTML = '';
  document.getElementById("radioYes").checked = false;
  document.getElementById("radioNo").checked = false;
  for(i=0; i< partDisplays.length; i++){
    partDisplays[i].innerHTML = '______';
     };
  for(i=0; i< sound1Displays.length; i++){
    sound1Displays[i].innerHTML = '______';
     };
  for(i=0; i< sound2Displays.length; i++){
    sound2Displays[i].innerHTML = '______';
     };
  songResultLabel.innerText = '';
});


   