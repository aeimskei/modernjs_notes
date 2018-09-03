// Variables for Game Values
let min = 1;
let max = 20;
let winningNumber = 19;
let guessesLeft = 3;

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
  }

  // Check if it's the correct winning number
  if (guess === winningNumber) {
    // disable the input
    guessInput.disabled = true;
    // change border color when win
    guessInput.style.borderColor = 'green';
    // set message to let the player know they won
    setMessage(`Your guess ${winningNumber} is correct! You Win!`, 'green');
  }
}

// Function for setMessage
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}