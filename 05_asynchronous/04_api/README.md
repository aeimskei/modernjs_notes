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