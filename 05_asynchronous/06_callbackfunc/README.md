# Callback Functions

A callback is a function that passed in as a parameter to another function and then it's ran inside the function's body.

## Examples of Callback Functions

Whenever we did a ```forEach()``` on an array, when we do ```array.forEach()``` and we pass in a function inside of it, that's actually a callback. However, this particular callback is not asynchronous, meaning that it doesn't stop anything else from happening until it's done. Remember, we have synchronous and asynchronous callbacks.

```setTimeout()``` also takes in a callback function, which is asynchronous. So, things can happen while this is running bc it's asynchronous.

## In this Section

We're going to mimic the actions for creating a blog post on a server or through an API/database with only a hard-coded array, but we're going to pretend that it's from a server and also getting those blog posts back.

In some cases, the server may return the post vbefore your new post is added and your new post won't be included. So, even if you create the post, you know you rune the createPost function before getPost, that could happen, we'll use setTimeout to show this situation - to mimic the server response and how that can mess things up. We will use a callback to fix that.

**Mimic a server database**

```
const posts = [
  {title: 'First Post', body: 'This is my first post!'},
  {title: 'Second Post', body: 'This is my second post!'}
];
```

## Synchronous Version

**Create two functions and mimic server response time with ```setTimeout()```**
* Create post
* Remember, ```setTimeout()``` takes in a callback
* Add on to our array of ```posts``` with ```.push```
* Pass in 'post' in the parameter to add to array of 'posts'
* A new post gets added after 2 seconds

```
function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}
```

* Get posts
* Mimic the server response time with setTimeout(), set 1 second
* Create a variable inside setTimeout's callback function
* Iterate through ```posts``` with forEach, which takes in a callback
* Append output on ```<li>``` with ```post.title```
* Output into the browser with ```document.body```

```
function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
```

We need to create the post and the call get posts after that.

```
// call createPost
// it'll take in an object with title and body
createPost({title: 'Third Post', body: 'This is the third body.'});

// call getPost
getPosts();
```

<kbd>![alt text](img/callback01.png "screenshot")</kbd>

Where is 'Third Post'? The way that it works, is that the server took 2 seconds to create the post and it took 1 second to get the post. So, it got post before the new 3rd post was created. This is an example of a syncrhonous way.

## Asynchrnous Version

Now, let's do it in an asynchrnous way using callbacks.

* In createPost, the callback is the 2nd parameter in which we will call the getPosts function
* It doesn't have to specifically be named ```callback```, sometimes people use ```cb```

```
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
```

<kbd>![alt text](img/callback02.png "screenshot")</kbd>

What happens is when createPost is called, it'll call getPosts as well on ```callback();``` inside createPost function, it gets called before the server actually ends, before the 2 seconds.

Callbacks may still be confusing even after this explanation, but we'll be learning about them when building the AJAX library project later on. You'll see how valuable they are in a real situation. Essentially, it's just a function that can be passed into anothe function and then called within that function.