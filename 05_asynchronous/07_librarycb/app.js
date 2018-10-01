// =====================================
// Instantiate http
// =====================================

const http = new libraryHTTP;


// =====================================
// GET posts
// =====================================

// Use the get prototype function on http
// pass in the url

http.get('https://jsonplaceholder.typicode.com/posts');