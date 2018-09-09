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
  addBookToList() {

  }

  showAlert() {

  }

  deleteBook() {

  }

  clearFields() {
    
  }
}
```

It resembles like a React application.

