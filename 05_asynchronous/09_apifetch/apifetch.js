// ========================================
// Fetch API for Text File
// ========================================

// grab button ids from HTML
const button1 = document.querySelector('#button1');

// add event listeners on click
button1.addEventListener('click', getText);

// create getText function - use fetch
function getText() {
  fetch('text.txt')
    .then(function(response) {
      // console.log(response); // gets fetch
      return response.text(); // gets the Promise
    })
    .then(function(data) {
      // console.log(data); // content from text.txt file
      document.querySelector('#output').innerHTML = data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

// ========================================
// Fetch API for JSON File
// ========================================

// grab button2 from HTML
const button2 = document.querySelector('#button2');

// add event listener to click
button2.addEventListener('click', getJson);

// create getJson function - use fetch
function getJson() {
  fetch('posts.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `
          <li>${post.title}</li>
        `
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    })
}

