// Set Variables
const button = document.querySelector('#button');

// Add Event Listeners
button.addEventListener('click', loadData);

// Function for loadData()
function loadData() {
  // console.log(1); // test to see if being called when button is clicked

  // create XHR object and instantiate
  const xhr = new XMLHttpRequest();

  // ==============================
  // XHR properties and methods
  // ==============================

  // Open - specifiy type of request and url/file, true = async
  xhr.open('GET', 'data.txt', true);

  // console.log('readyState: ', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    // console.log('readyState: ', xhr.readyState);
  }

  // Call and do whatever we want to do with the data we're getting
  xhr.onload = function() {
    // console.log('readyState: ', xhr.readyState);

    // check to see if status is equal to 200, means everything is OK
    // 'this' refer to the xhr object w/ property of status
    if (this.status === 200) {
      //  console.log(this.responseText);

      // =====================================
      // show the data from textfile on the UI
      // =====================================

      // grab #output from html
      const output = document.querySelector('#output');

      // display responseText from .txt file
      output.innerHTML = `
        <h1>${this.responseText}</h1>
      `;
      
    }
  }

  // ==============================
  // readyState version, older
  // ==============================

  /*
  xhr.onreadystatechange = function() {
    console.log('readyState: ', xhr.readyState);

    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  }
  */

  // Error - in case something goes wrong
  xhr.onerror = function() {
    console.log('Request errorr...');
  }

  // have to call send() to run
  xhr.send();
}