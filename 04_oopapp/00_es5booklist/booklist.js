// ==========================================
// Set varible grab from UI
// ==========================================
const form = document.querySelector('#book-form');

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

// ==========================================
// addBookToList Prototype Method
// ==========================================
UI.prototype.addBookToList = function(book) {
  // console.log(book); // test log book object

  // grab `#book-list` from UI
  const bookList = document.querySelector('#book-list');

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

// ==========================================
// showAlert UI Prototype Method
// ==========================================
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
  }, 3000);
}

// ==========================================
// clearFields UI Prototype Method
// ==========================================
UI.prototype.clearFields = function() {
  title.value = '';
  author.value = '';
  isbn.value = '';
}

// ==========================================   
// Event Listner on 'submit'
// ==========================================
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

    // UI Prototype Method to clearFields
    ui.clearFields();
  }

  e.preventDefault();
}