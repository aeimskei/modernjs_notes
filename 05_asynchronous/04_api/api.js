// set grab button from html
const button = document.querySelector('.get-jokes');

// add event listener to button
button.addEventListener('click', getJokes);

function getJokes(e) {
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
      // parse json
      const response = JSON.parse(this.responseText);
      // console.log(response); // test log

      // ================================
      // Dynamically show on UI
      // ================================

      // set initialize output data
      let output = '';
      let values = response.value;

      // make sure the response 'type' is 'success'
      if (response.type === 'success') {
        // loop through array from 'value'
        values.forEach(function(value) {
          output += `
            <li>${value.joke}</li>
            <hr>
          `;
        })

      } else {
        // set output to append with += template to display
        output += `
          <li>Error, something went wrong.</li>
        `;
      }

      // insert dynamically to html
      const display = document.querySelector('.jokes');
      display.innerHTML = output;
    }
  }

  // run the code
  xhr.send();

  e.preventDefault();
}