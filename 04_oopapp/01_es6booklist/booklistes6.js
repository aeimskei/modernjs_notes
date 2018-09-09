// ==========================================
// Book Class
// ==========================================
class Book {
  constructor(title, author, isbn) {
    this.title = title,
    this.author = author,
    this.isbn = isbn
  }
}

// ==========================================
// UI Class
// ==========================================
class UI {
  addBookToList(book) {
    const bookList = document.querySelector('#book-list');
    // create <tr> element
    const row = document.createElement('tr');
    // insert columns
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete"><i class="fa fa-remove"></i></a></td>
    `;
    // dyanmically add row to list
    bookList.appendChild(row);
  }

  showAlert(message, className) {
    // create <div>
    const div = document.createElement('div');
    // add class to that div
    div.className = `alert ${className}`;
    // add text inside that alert <div>
    div.appendChild(document.createTextNode(message));
    // grab parent
    const container = document.querySelector('.container');
    // grab form
    const formTag = document.querySelector('#book-form');
    // insert alert location
    container.insertBefore(div, formTag);
    // set timeout
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.parentElement.classList.contains('delete')) {
      target.parentElement.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    title.value = '';
    author.value = '';
    isbn.value = '';
  }
}

// ==========================================   
// Store Class - for Local Storage
// ==========================================

class Store {
  static getBooks() {
    // initialize a local variable
    let books;
    // check local storage
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      // use JSON.parse bc need it to be a JS object
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    // loop/iterate through books
    books.forEach(function(book) {
      // instantiate UI class
      const ui = new UI();

      // add book to UI with addBookToList and pass in book
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    // push on to 'books'
    books.push(book);

    // set Local Storage again with that new book, as 'books'
    // also set the books array, but run it through JSON.stringify
    // in order to store it in Local Storage
    localStorage.setItem('books', JSON.stringify(books));

  }

  static removeBook() {

  }
}

// ==========================================   
// DOM Load Event
// ==========================================
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// ==========================================   
// Event Listner on 'submit'
// ==========================================
const form = document.querySelector('#book-form');
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

  // ====================================================
  // Instatiate Book Constructor/object when submit value
  // ====================================================
  const book = new Book(title, author, isbn);
  // console.log(book); // test log

  // ====================================================
  // Instatiate UI Constructor/object to add to Book List
  // ====================================================
  const ui = new UI();
  // console.log(ui); // test log

  // Form validation
  if (title === '' || author === '' || isbn === '') {
    // console.log('Do not leave empty input fields'); // test log

    // Error alert, calling the error class in CSS
    // UI Prototype Method to showAlert
    ui.showAlert('Please fill in all input fields.', 'error');
  } else {
    // UI Prototype Method to addBookToList
    ui.addBookToList(book);

    // Add to Local Storage
    Store.addBook(book);

    // Success alert, calling the success class in cSS
    // // UI Prototype Method to showAlert
    ui.showAlert('Book added! Have fun reading it.', 'success');

    // UI Prototype Method to clearFields
    ui.clearFields();
  }

  e.preventDefault();
}

// ==========================================   
// Event Listner for 'delete'
// ==========================================
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