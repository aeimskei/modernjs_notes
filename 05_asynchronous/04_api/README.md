# AJAX: External API

How to fetch data from external API using AJAX, it's becoming more common these days.

In this example, we'll use a very simple external API that takes a GET request formatted as a certain url and then returns random Chuck Norris jokes. You can get a single joke or multiple jokes, you can limit the category.

## External API

http://www.icndb.com/api/

Every API is different, as in how it takes requests and how it responds, so read the documentation for these external APIs.

For our application, we'll have a form, so the user can set the number of jokes they want. It'll make the request and return that number of Chuck Norris jokes.

http://api.icndb.com/jokes/random
* Everytime you reload, it'll be a different joke.

<kbd>![alt text](img/apirandom.png "screenshot")</kbd>

* If you want more than one joke.

<kbd>![alt text](img/5random.png "screenshot")</kbd>

## Our Fetch External API Project

We'll use AJA to build this application that will get these jokes, return them, and then display them in the browser using DOM techniques.

<kbd>![alt text](img/layout.png "screenshot")</kbd>

**Initial test with json string coming in as response**

```
const button = document.querySelector('.get-jokes');

button.addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('#number').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      // coming in as json string
      const response = this.responseText;
      console.log(response); // test log
    }
  }

  xhr.send();

  e.preventDefault();
}
```

<kbd>![alt text](img/jsonstring.png "screenshot")</kbd>

**Parsed json data version so we can actually use it**

It's now in a different format, an actual Object. Everytime you submit the form, you get a different set of random jokes.

```
...
  xhr.onload = function() {
    if (this.status === 200) {
      // coming in as json string
      const response = JSON.parse(this.responseText);
      console.log(response); // test log
    }
  }
  ...

```

<kbd>![alt text](img/jsonparse.png "screenshot")</kbd>

## Dynamically Display data on UI

**Iterate/loop through array**

Iterate each joke inside the initialized output we want to append to it using +=.

```response``` is an Object, so we can't use ```forEach()```, rather, we want to loop through the ```value``` bc it's an Array. The ```response``` starts at ```success```, which is an Object. Again, every API setup is different, so the way to use or access data will be different, so read the documentation.

<kbd>![alt text](img/whereloop.png "screenshot")</kbd>

```
...
  // set initialize output data
  let output = '';
  let values = response.value;

  // make sure the response 'type' is 'success'
  if (response.type === 'success') {
    // loop through array from 'value'
    values.forEach(function(value) {
      output += `
        <li>${value.joke}</li>
        <hr>
      `;
    })

  } else {
    // set output to append with += template to display
    output += `
      <li>Error, something went wrong.</li>
    `;
  }

  // insert dynamically to html
  const display = document.querySelector('.jokes');
  display.innerHTML = output;
}
```

<kbd>![alt text](img/done.png "screenshot")</kbd>

**Notes:** This is a simple API example. A lot of the other APIs require you to register and have a special token in order to use their API data, sometime even some kind of OAuth, which OAuth is a bit complicated, but worth looking into and learning. Sometimes they'll limit you on the API requests too. Unless you register and get an API key then you may get more access. It all varies on the API.