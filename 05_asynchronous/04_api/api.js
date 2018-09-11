// set grab button from html
const button = document.querySelector('.get-jokes');

// add event listener to button
button.addEventListener('click', getJokess);

// helper function to load jokes

function getJokess(e) {
  // console.log('you clicked me!'); // test log

  // set grab number input value from html
  // const number = document.querySelector('input[type="number"]').value;
  const number = document.querySelector('#number').value;
  // console.log(number); // test log

  // set xhr to instantiate XMLHtttpRequest Object
  const xhr = new XMLHttpRequest();

  // use template literals and ${} for dynamic number
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  // what to do when we get the data
  xhr.onload = function() {
    // check if it's a 200 status
    if (this.status === 200) {
      const response = this.responseText;
      console.log(response); // test log
    }
  }

  // run the code
  xhr.send();

  e.preventDefault();
}