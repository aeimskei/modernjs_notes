# Async and Await

This is actually a part of ES7, ES 2016 standard, but it is fully implemented in Google Chrome.

To have it work on other browsers, you may have to compile it by using Webpack, which we'll learn later.

**A normal function**

```
function myFunction() {
  return 'Hello';
}

console.log(myFunction());
```

**With Async and Await**

What we do is add ```async``` to the beginning of the function and just doing that, makes this function return a Promise.

```
async function myFunction() {
  return 'Hello';
}

console.log(myFunction());
```

<kbd>![alt text](img/returnpromise.png "screenshot")</kbd>

```
async function myFunction() {
  return 'Hello';
}

myFunction()
  .then(response => console.log(response));
```

<kbd>![alt text](img/return.png "screenshot")</kbd>

It's a really nice feature, bc you don't have to wrap in ```return new Promise``` like before. Even just ```async``` withouth ```await```, it works great.

