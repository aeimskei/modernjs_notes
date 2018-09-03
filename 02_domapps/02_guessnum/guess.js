// Variables for Game Values
let min = 1;
let max = 20;
let winningNumber = getRandomNumber(min, max);
// console.log(winningNumber); // test to see in console
let guessLeft = 3;

// Variables for UI Elements
const game = document.querySelector('#game');
const minNumber = document.querySelector('.min-number');
const maxNumber = document.querySelector('.max-number'); 
const guessButton = document.querySelector('#guess-button');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max to show dynamically, so remove hard code html
minNumber.textContent = min;
maxNumber.textContent = max;

// Play Again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Create event listener for button to listen for click
guessButton.addEventListener('click', submitGuess);

// Function action when button is clicked
function submitGuess() {
  let guess = parseInt(guessInput.value);
  // console.log(guess);
  // console.log(typeof guess);

  // Validate input check to make it's not blank, not less than min or above max and is a number
  if (isNaN(guess) || guess < min || guess > max) {
    // change border color when incorrect
    guessInput.style.borderColor = 'red';
    // if any of the above is true, alert a message
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
  } else {

    // Check if it's the correct winning number
    if (guess === winningNumber) {
      // end game for winning case
      endGame(true, `Your guess ${winningNumber} is correct! You Win!`);
    } else {
      // lose case, wrong number
      guessLeft -= 1;

      // check to see if there are any guesses left
      if (guessLeft === 0) {
        // disable the input when guess limit is done, game over
        endGame(false, `Game over, you lost. The correct number was ${winningNumber}.`);
      } else {
        // change border color when incorrect
        guessInput.style.borderColor = 'red';
        // clear input
        guessInput.value = '';
        // game continues, answer is wrong bu under max limit
        setMessage(`${guess} is not correct. You have ${guessLeft}.`, 'red')
      }
    }
  }
}

// Function for Game Over
function endGame(won, msg) {
  let color;
  // use ternerary operator 
  // if ```won``` is equal to true then make color green else red
  won === true ? color = 'green' : color = 'red';

  // disable the input when guess is correct and won
  guessInput.disabled = true;
  // change border color when win
  guessInput.style.borderColor = color;
  // set text color
  message.style.color = color;
  // set message to let the player know they won
  setMessage(msg);

  // assign 'Play Again' to button
  guessButton.value = 'Play Again';
  // add class name to the button
  guessButton.className += 'play-again button-primary';
  // event listener to parent for event delegation, above line 20-24
}

// Function for getWinningNumber
function getRandomNumber(min, max) {
  // get random decimal number
  // console.log(Math.floor(Math.random() * (max - min + 1) + min));
  // return puts it into the ```winningNumber``` variable
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Function for setMessage
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}