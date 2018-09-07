// ==========================================
// Book Constructor
// ==========================================
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// ==========================================
// UI Constructor
// ==========================================
function UI() {}

// addBookToList Prototype Method
UI.prototype.addBookToList = function(book) {
  // console.log(book); // test log
}


// ==========================================
// Set Variables Grab from UI
// ==========================================
const form = document.querySelector('#book-form');
let title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    isbn = document.querySelector('#isbn'),
    bookList = document.querySelector('#book-list')


// ==========================================   
// Event Listner on 'submit'
// ==========================================
form.addEventListener('submit', submitBook)

// Helper Function for Submit
function submitBook(e) {
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

  // Add new Book to List
  ui.addBookToList(book);


  e.preventDefault();
}