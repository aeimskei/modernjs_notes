// Variables for Game Values
let min = 1;
let max = 20;
let winningNum = 19;
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
    // if any of the above is true, alert a message
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
  }
}

// Function for setMessage
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}