# Arrow Functions

Also known as **fat-arrow functions**, this is a really important and cool part of ES6!

There's a lot of benefits from it like writing less code and also looking neater. It's also useful with **lexical** ```.this```

## ES5 Version of Function

```
const helloThere = function() {
  console.log('Just saying hello there!')
}

helloThere();
```

## ES6 Version of Arrow Function

```
const helloThere = () => {
  console.log('Just saying hello there!')
}

helloThere();
```

You can also do it in one line, no need for curly braces:

```
const helloThere = () => console.log('Just saying hello there!')

helloThere();
```

Same thing with return, you don't even have to write out ```return```:
```
const helloThere = () => 'Just saying hello there!';

console.log(helloThere());
```

<kbd>![alt text](img/sayhello.png "screenshot")</kbd>

It's much simpler and shorter when writing out a function.

However, you can run into trouble when you're returning an **Object literal**. You're gonna get ```undefined``` bc it's looking at ```{message: 'Just saying hello there!'}``` as the function body instead of an Object literal.

```
const helloThere = () => {message: 'Just saying hello there!'};

console.log(helloThere());
```

<kbd>![alt text](img/undefined.png "screenshot")</kbd>

To fix this, wrap the Object literal in parantheses:

```
const helloThere = () => ({message: 'Just saying hello there!'});

console.log(helloThere());
```

<kbd>![alt text](img/objliterals.png "screenshot")</kbd>

What if we have parameters? If it's a single parameter, you don't need parantheses.

```
const helloThere = name => console.log(`Hello ${name}!`);

helloThere('Rider');
```

<kbd>![alt text](img/withparams.png "screenshot")</kbd>

If we have more than one parameter, use parantheses:
```
const helloThere = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}!`);

helloThere('Rider', 'McKenna');
```

<kbd>![alt text](img/withmoreparams.png "screenshot")</kbd>

You can also use arrow functions as **callback functions**

**ES5 version**
```
const names = ['Rider', 'Kai', 'Benjamin'];

const nameLengths = names.map(function(name) {
  return name.length;
});

console.log(nameLengths);
```

**ES6 version - shorter version**
```
const names = ['Rider', 'Kai', 'Benjamin'];

const nameLengths = names.map((name) => {
  return name.length;
});

console.log(nameLengths);
```

**ES6 version - shortest version**
```
const names = ['Rider', 'Kai', 'Benjamin'];

const nameLengths = names.map(name => name.length);

console.log(nameLengths);
```

<kbd>![alt text](img/names.png "screenshot")</kbd>

## The Fetch API example with Arrow Functions

Here, we're gonna switch out the Fetch API example to using arrow functions, notice how there's less code and is also a lot neater.

**Fetch Text File example**
```
// grab button ids from HTML
const button1 = document.querySelector('#button1');

// add event listeners on click
button1.addEventListener('click', getText);

// create getText function - use fetch
function getText() {
  fetch('text.txt')
    .then(response => response.text())
    .then(data => {
      document.querySelector('#output').innerHTML = data;
    })
    .catch(error => console.log(error));
}
```

**Fetch JSON file example**
```
// grab button2 from HTML
const button2 = document.querySelector('#button2');

// add event listener to click
button2.addEventListener('click', getJson);

// create getJson function - use fetch
function getJson() {
  fetch('posts.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function(post) {
        output += `
          <li>${post.title}</li>
        `
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(error => console.log(error));
}
```

**Fetch External Data**
```
// grab button id from HTML
button3 = document.querySelector('#button3');

// add event listener on click
button3.addEventListener('click', getExternalApi);

// create getExternalApi
function getExternalApi() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function(user) {
        output += `
          <li>${user.login}</li>
        `
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(error => console.log(error));
}
```