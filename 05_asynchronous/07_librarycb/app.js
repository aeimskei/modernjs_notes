// =====================================
// Instantiate http
// =====================================

const http = new libraryHTTP;


// =====================================
// GET all posts
// =====================================

// Use the get prototype function on http
// Pass in the url
// In async version, use a callback function to get response
// Note: the parameter response can be changed to a different name too

// http.get('https://jsonplaceholder.typicode.com/posts1', function(error, response) {
//   // test for error
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// =====================================
// GET single post
// =====================================

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
//   // test for error
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// =====================================
// POST post
// =====================================

// create data
const data = {
  title: 'First Custom Post',
  body: 'Testing out our first custom post.'
};

/*
// create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, response) {
  // test for error
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
*/

// =====================================
// PUT request, update
// =====================================

/*
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
*/

// =====================================
// DELETE request
// =====================================

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
  // test for error
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});