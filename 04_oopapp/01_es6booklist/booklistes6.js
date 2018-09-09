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
    const list = document.querySelector('#book-list');
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
    list.appendChild(row);
  }

  showAlert(message) {

  }

  deleteBook(target) {

  }

  clearFields() {

  }
}