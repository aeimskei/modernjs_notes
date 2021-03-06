# Book List - Built in ES5

Gonna use Object Oriented Programming in ES5 Syntax, everything will happen in the UI, no database for this project. 

* Can add book to list
* Recieve an alert for submission
* A book will be added to your list below
* Alert error if field is empty
* Can also delete book from list

Simple application, but will show you how to build something with Object Oriented Programming with Vanilla JavaScript.

## Setup UI

* HTML and Skeleton CDN
* Font Awesome
* Google Fonts

Creating the form section in HTML file:

```
<body>
  <div class="container">
    <h1>Add Book</h1>
    <form id="book-form">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" class="u-full-width">
      </div>
      <div>
        <label for="author">Author</label>
        <input type="text" id="author" class="u-full-width">
      </div>
      <div>
        <label for="isbn">ISBN</label>
        <input type="text" id="isbn" class="u-full-width">
      </div>
      <div>
        <input type="submit" value="Submit" class="u-full-width button-primary">
      </div>
    </form>
...
```

* ```class="u-full-width"``` is a Skeleton class that'll make it a block-level input, takes up whole width.

Create the table section for the list of books in HTML file:

```
...
    <table class="u-full-width">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <!-- empty bc the delete link will go here -->
          <th></th>
        </tr>
      </thead>
      <!-- blank bc we'll dynamically insert rows  -->
      <tbody id="book-list"></tbody>
    </table>
  </div>

  <script src="booklist.js"></script>
</body>
```

<kbd>![alt text](img/booklistui.png "screenshot")</kbd>

Add classes for alerts in CSS file:

```
.success, error {
  color: #ffffff;
  padding: 5px;
  margin: 5px 0 15px 0;
}

.success {
  background: green;
}

.error {
  background: red;
}
```

## JS File Time! Use ES5 Object Oriented Programming~

* Constructors
* Prototype Methods

**Book Constructor**
Handles creating the actual book object.

```
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
```

**UI Constructor**
Will be a set of prototype methods to do things like add book to the list, delete book, show alert - things that have to do with the UI.

It's gonna be very simple bc we won't be passing anything in. It'll just be an empty function. Everything else is going to go inside the prototype.

```
function UI() {}
```

**Event Listeners**

* get the ```form``` id
* get Form input values

```
// Set Variables
const form = document.querySelector('#book-form');

// Assign Event Listeners
form.addEventListener('submit', submitBook)

// Helper Function for Submit
function submitBook(e) {
  // Set variables to grab #ids
  let title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      isbn = document.querySelector('#isbn')

  // Get Form values
  title = title.value;
  author = author.value;
  isbn = isbn.value;
  // console.log(title, author, isbn); // test log

  e.preventDefault();
}
```

<kbd>![alt text](img/getinputvalues.png "screenshot")</kbd>

## When ```submit``` Instatiate Book Constructor**

Once we submit these values, we want to Instantiate the Book Constructor, the Book object.

```
function submitBook(e) {
  // Set variables to grab #ids
  let title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      isbn = document.querySelector('#isbn')

  // Get Form values
  title = title.value;
  author = author.value;
  isbn = isbn.value;
  // console.log(title, author, isbn); // test log

  // Instatiate Book Constructor/object when submit value
  const book = new Book(title, author, isbn);
  console.log(book); // test log

  e.preventDefault();
}
```

<kbd>![alt text](img/constructbook.png "screenshot")</kbd>

## Dynamically Add Book to Table Below, UI Constructor**

Next, we need to instaiate a UI object from our UI Constructor in order to add to the table section.

We need to create a prototype method to ```addBookToList()``` under the UI constructor function. This function is going to take in that ```book``` object. When testing with ```console.log``` you'll see that it's logging the ```Book```, so it's calling the prototype.

```
UI.prototype.addBookToList = function(book) {
  console.log(book); // test log
}
```

Instantiate a UI object ```const UI = new UI(book);```. Then ```ui.addBookToList(book);``` and then we need to pass in that ```book``` object that was instantiate on submit.

When you test ```console.log(ui)```, when you look in the prototype, you'll see it has ```addBookToList()```, so it's now part of the UI object's prototype.

Test the ```ui``` log:

```
// Helper Function for Submit
function submitBook(e) {
  // Set variables to grab #ids
  let title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      isbn = document.querySelector('#isbn')

  // Get Form values
  title = title.value;
  author = author.value;
  isbn = isbn.value;
  // console.log(title, author, isbn); // test log

  // ====================================================
  // Instatiate Book Constructor/object when submit value
  // ====================================================
  const book = new Book(title, author, isbn);
  // console.log(book); // test log

  // ====================================================
  // Instatiate UI Constructor/object to add to Book List
  // ====================================================
  const ui = new UI();
  console.log(ui); // test log

  // Add new Book to List
  ui.addBookToList(book);


  e.preventDefault();
}
```
<kbd>![alt text](img/uiconstructor.png "screenshot")</kbd>

Inside the ```UI.prototype.addBookToList = function(book){...}```, create a variable ```const list``` and set to the ```#book-list``` on HTML in the ```<tbody>``` tag. We're gonna build out the ```<tr>``` dynamically.

```
function UI() {}

// addBookToList Prototype Method
UI.prototype.addBookToList = function(book) {
  // console.log(book); // test log book object

  // create <tr> element, grab the variable bookList
  const row = document.createElement('tr');
  // console.log(row); // test log row

  // insert columns, values from new book
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete"><i class="fa fa-remove"></i></a></td>
  `;

  // append row to the '#book-list' <tr>
  bookList.appendChild(row);
}
```

<kbd>![alt text](img/appendbook.png "screenshot")</kbd>

Clear input fields after submitting, that'll be a part of the UI prototype as well. 

```
UI.prototype.clearFields = function() {
  title.value = '';
  author.value = '';
  isbn.value = '';
}
```

Call it after we've added the book.

```
  const ui = new UI();
  // console.log(ui); // test log

  // Add new Book to List
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();

  e.preventDefault();
```

<kbd>![alt text](img/uiprotos.png "screenshot")</kbd>

## Form Validation and Show Alert

We need to create another UI Prototype Method called ```showAlert```. Inside it, create the element. 

**```showAlert``` UI Prototype Method**

```
UI.prototype.showAlert = function(message, className) {
  // create <div>
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // grab parent
  const container = document.querySelector('.container');
  // grab form bc we want the alert before the form
  const formTag = document.querySelector('#book-form');

  // insert to DOM
  container.insertBefore(div, formTag);
  // dissappear after 3 seconds, grab class of alert and remove
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 4000);
}
```

**Error Alert**

```
const ui = new UI();
// console.log(ui); // test log

// Form validation
if (title === '' || author === '' || isbn === '') {
  // console.log('Do not leave empty input fields'); // test log

  // Error alert, calling the error class in CSS
  // UI Prototype Method to showAlert
  ui.showAlert('Please fill in all input fields.', 'error');

  ...
```

<kbd>![alt text](img/error.png "screenshot")</kbd>

**Success Alert**

```
...
  } else {
    // UI Prototype Method to addBookToList
    ui.addBookToList(book);

    // Success alert, calling the success class in cSS
    // // UI Prototype Method to showAlert
    ui.showAlert('Book added! Have fun reading it.', 'success');
```

<kbd>![alt text](img/success.png "screenshot")</kbd>

## Delete Book from List

Remember event delegation, if we have something that's gonna show up more than once with the same class, or something that appears dynamically added, we're gonna have to use event delegation.

* Create event listener for parent, ```#book-list```
* Create another UI Prototype Method

In deleteBook UI Prototype Method, we're gonna pass in ```target``` and we need to make sure we go up to the ```parentElement``` to target the ```<tr>```, this is basic DOM traversing, and then we want to remove it from the DOM.

```
// get the parent
const parent = document.querySelector('#book-list');

// add event listener
parent.addEventListener('click', function(e) {
  // console.log('test delete'); // test log, logs a lot!

  // instatiate the UI
  const ui = new UI();

  // UI Prototype Method to deleteBook
  ui.deleteBook(e.target);

  // show an alert message
  ui.showAlert('Book removed!', 'remove');

  e.preventDefault();
});
```

UI Prototype Method to deleteBook
```
UI.prototype.deleteBook = function(target) {
  if (target.parentElement.classList.contains('delete')) {
    target.parentElement.parentElement.parentElement.remove();
  }
}
```

<kbd>![alt text](img/deletebook.png "screenshot")</kbd>

When you ```console.log(ui);``` after instantiating, you'll see that all the Prototype Methods for UI is listed:

<kbd>![alt text](img/uiprotometh.png "screenshot")</kbd>