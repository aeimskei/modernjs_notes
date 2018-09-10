// Set Variables
const button = document.querySelector('#button');

// Add Event Listeners
button.addEventListener('click', loadData);

// Function for loadData()
function loadData() {
  // console.log(1); // test to see if being called when button is clicked

  // create XHR object and instantiate
  const xhr = new XMLHttpRequest();

  // properties and methods
  // ==============================

  // Open - specifiy type of request and url/file, true = async
  xhr.open('GET', 'data.txt', true);

  // Call and do whatever we want to do with the data we're getting
  xhr.onload = function() {
    // check to see if status is equal to 200, means everything is OK
    // 'this' refer to the xhr object w/ property of status
    if (this.status === 200) {
       console.log(this.responseText);
    }
  }

  // have to call send() to run
  xhr.send();
}