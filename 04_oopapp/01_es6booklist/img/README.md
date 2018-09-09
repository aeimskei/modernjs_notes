# Book List - Built in ES6 Classes

When we look at our ES5 version, we have two Constructors:

* Book Constructor
* UI Constructor

With ES6, we're gonna take those and turn them into Classes. The UI Class is where we're gonna put in all our methods to deal with user interface. It's going to be the exact same methods like what we used in the ES5 version

**Book Class**
```
class Book {
  constructor(title, author, isbn) {
    this.title = title,
    this.author = author,
    this.isbn = isbn
  }
}
```

**UI Class**
```
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
    // create <div>
    const div = document.createElement('div');
    // add class to that div
    div.className = `alert ${className}`;
    // add text inside that alert <div>
    div.appendChild(document.createTextNode(message));
    // grab parent
    const container = document.querySelector('.container');
    // grab form
    const form = document.querySelector('#book-form');
    // insert alert location
    container.insertBefore(div, form);
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
```

It resembles like a React application.

