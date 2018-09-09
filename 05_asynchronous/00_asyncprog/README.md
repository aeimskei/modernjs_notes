# What is Asynchronous Programming?

Used to make HTTP requests to files API and services, whether its your own or some external REST API.

## Techonologies:

* AJAX / XML HTTP Request Object - old tech
* Fetch API - newer standard

In our project, we'll build a simple custom HTTP library that uses both AJAX/XML HTTP Request Object and Fetch API.

Learn how to make all types of requests, while as the same time using things like ```callbacks``` and ```promises```.

## First, What's Synchronous Programming?

Here's an example, we have a variable set to a function called ```loadPostsSync()```. Let's say this function fetches ```posts``` from server somewhere, we don't know how long it might take to get these ```posts```, it could be very slow due to network, in this way of writing code, we have to wait until the posts are fetched and then do something with the posts. Only after all of that is done, then we can do the next thing, like ```doTheNextThing()``` function.

```
posts = loadPostsSync();
// ...wait until posts are fetched
// ...do something with posts

doTheNextThing(); // has to wait until posts load
```

This is blocking code, meaning its gonna block until it's done fetching, which obiviously slows things down.

## Asynchronous Programming

In this case, instead of just pulling the post out of synchronous function, we're passing in a ```callback``` function which is one method for handling asynchronous code. This callback will run and fetch the post and allows us to do something with the post, but the ```doTheNextThing()``` function does not have to wait for the posts to be fetched and loaded.

```
loadPostsAsync(function() {
  // ...wait until posts are fetched
  // ...do something with posts
});

doTheNextThing(); // doesn't to wait until posts load
```

So, the program isn't blocked, and it just keeps going, even if it takes awhile for the posts to be fetched, it's not gonna stop the ```doTheNextThing()``` function from running.

Therefore, asynchronous programming is much faster.

## Async Technologies

Most Async code you work with will be a part of an API or library.

These are all Async technologies, where they have to handle the response in a certain way.

* XMLHttpRequest (XHR) Object & Fetch API
* jQuery Ajax, Axios, other HTTP libraries
* Node.js fs (filesystem) module

## How to handle Async

There are a few ways to work with Asycn code:

* Callbacks - the oldes, uses a callback function
* Promises - newer method, ES6 promises
* Async/Await - the newest method, allows us to write Async code/operations and make them look like simple synchronous code