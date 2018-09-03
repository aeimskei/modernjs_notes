// Variables for Game Values
let min = 1;
let max = 20;
let winningNumber = 19;
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
    // disable the input when guess is correct and won
    guessInput.disabled = true;
    // change border color when win
    guessInput.style.borderColor = 'green';
    // set message to let the player know they won
    setMessage(`Your guess ${winningNumber} is correct! You Win!`, 'green');
  } else {
    // lose case, wrong number
    guessLeft -= 1;

    // check to see if there are any guesses left
    if (guessLeft === 0) {
      // disable the input when guess limit is done, game over
      guessInput.disabled = true;
      // change border color when incorrect
      guessInput.style.borderColor = 'red';
      // setMessage you've lost
      setMessage(`Game over, you lost. The correct number was ${winningNumber}.`, 'red')
    } else {
      // game continues, answer is wrong bu under max limit
    }
  }
}

// Function for setMessage
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}