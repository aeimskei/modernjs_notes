// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = authro;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Set Variables
const form = document.querySelector('#book-form');
let title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    isbn = document.querySelector('#isbn'),
    bookList = document.querySelector('#book-list')

// Assign Event Listeners
form.addEventListener('submit', submitBook)

// Helper Function for Submit
function submitBook(e) {
  // Values we want from Form
  title = title.value;
  author = author.value;
  isbn = isbn.value;
  console.log(title, author, isbn); // test log

  e.preventDefault();
}