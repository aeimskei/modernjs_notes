// =====================================
// Instantiate http
// =====================================

const http = new libraryHTTP;


// =====================================
// GET posts
// =====================================

// Use the get prototype function on http
// Pass in the url
// In async version, use a callback function to get response
// Note: the parameter response can be changed to a different name too

http.get('https://jsonplaceholder.typicode.com/posts', function(response) {
  console.log(response);
});