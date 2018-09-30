const posts = [
  {title: 'First Post', body: 'This is my first post!'},
  {title: 'Second Post', body: 'This is my second post!'}
];

// =================================================
// Synchronous Version
// =================================================
/*
// create two functions

// create post
// mimic the server response time with setTimeout()
// pass in 'post' in the parameter to add to array of 'posts'
// a new post gets added after 2 seconds

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

// get post
// and display inside out browser
// mimic the server response time with setTimeout(), set 1 second
// create a variable inside setTimeout's callback function
// iterate through 'posts' with forEach, which takes in a callback
// append output on <li> with 'post.title'
// output into the browser with document.body

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// call createPost
// it'll take in an object with title and body
createPost({title: 'Third Post', body: 'This is the third body.'});

// call getPost
getPosts();
*/

// =================================================
// Asynchronous Version
// =================================================

// in createPost, the callback is the 2nd parameter in which we will call the getPosts function

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Third Post', body: 'This is the third body.'}, getPosts);