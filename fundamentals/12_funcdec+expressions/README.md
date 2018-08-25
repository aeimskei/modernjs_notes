# Function Declarations and Expressions

One of the most important controlling structures in any programming language, that's functions! Functions are block of codes that can be defined and then called in a later time, or sometimes in cases, defined and called at the same time. 

There are a few different types of functions, different ways of writing functions in JavaScript.

* Function Declarations
* Function Expressions
* IIFEs - an immediately invokable function expression
* Property Methods

# Function Declarations or Statements
Start off with ```function``` and then name it, then ```()``` and ```{}```. Anything inside ```{}``` is the function scope. This first part is just declaring the function. If you check the console, you won't see anything yet.

```
function greet() {
  console.log('Hello');
}
```

We actually have to call it by writing the name, ```greet()```

```
greet();                  // Logs Hello
```

Usually, you'd want to return something from a function. Then wrap the actual function call in ```console.log```

```
function greet() {
  return 'Hello';
}

console.log(greet());
```

**Function Declaration with Parameters**

With functions, declarations, expressions, etc. all types of functions, they can take in parameters, also called arguments.

So let's say we want a parameter of ```firstName```. Then, inside the ```{}```, we can do whatever that we want with it, like, return ```'Hello ' + firstName```. Next, down in the function call, you can pass in a value, let's say ```May```. 

```
function greet(firstName) {
  return 'Hello ' + firstName;
}

console.log(greet('May'));      // Logs Hello May
```

You can also have multiple parameters.

```
function greet(firstName, lastName) {
  // return 'Hello ' + firstName + ' ' + lastName;

  // template literal version
  return `Hello ${firstName} ${lastName}`
}

console.log(greet('May', 'Miller'));         // Logs Hello May Miller
```

**Default Values for Function Parameters**

What if we took away ```'May', 'Miller'``` strings inside the function call? It'll log ```Hello undefined undefined```. There are a couple ways to have default values for your parameters.

* Before ES6

```
function greet(firstName, lastName) {
  if (typeof firstName === 'undefined') {firstName = 'John'}    // default
  if (typeof lastName === 'undefined') {lastName = 'Smith'}     // default
  // template literal version
  return `Hello ${firstName} ${lastName}`
}

console.log(greet());       // Logs Hello John Smith
```

* With ES6, you can define defaults inside the parentheses

```
function greet(firstName = 'John', lastName = 'Smith') {
  // template literal version
  return `Hello ${firstName} ${lastName}`
}

console.log(greet());                 // Logs Hello John Smith
console.log(greet('May', 'Miller'));  // Logs Hello May Miller
```

# Function Expressions

It is basically, putting a function as a variable assignment. 

For instance, ```const square``` and set it to a function that can be named or anonymous. Make sure to put a ```;``` semicolon at the end bc it's a value to a variable. Usually, they're anonymous if the expression looks something like this:

```
const square = function(x) {
  return x * x;
};

console.log(square(8));           // Logs 64
````

But you could name it like:

```
const square = function square() {

};
```

Just like declaration, if you want it default:

```
const square = function(x = 3) {
  return x * x;
};

console.log(square(8));           // Logs 64
console.log(square());            // Logs 9
```

/*
In a lot of cases, using an expression or declaration isn't gonna make much of a difference, but there are times when expression have benefits to them when it comes to hoisting, closures and some more advanced stuff.
*/

# Immediately Invokable Function Expressions - IIFEs

IIFEs are a function that you declare and run at the same time. To do this, we need to make an expression by defining an anonymous function inside the parentheses.

```
(function(){
  console.log('IIFE ran...');
})
```

With just this block of code, it's not going to run bc it's not complete. When we call or run functions, they end with parentheses - whether its a declaration or an expression. So, add ```()``` at the end - looks funny, bu that's how these are constructed.

```
(function(){
  console.log('IIFE ran...');           // Logs IIFE ran...
})()
```

These can also take in parameters.

```
(function(name){
  console.log(`Hello ${name}`);           // Logs Hello Amy
})('Amy')
```

# Property Methods

We can put functions inside of objects as well, as opposed as just the global scope. When a function is put inside an object, it's called a method. 

* Let's set a variable ```todo``` to an object. 
* We want an ```add``` and set it to a function, and have it do something. 
* Now include ```edit``` and set a function, an edit usually takes in an ```id``` to do something to what you're editing.

```
const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}

// call the add method of todo obj
todo.add();                     // Logs Add todo...
// call the edit method of todo obj
todo.edit(23);                  // Logs Edit todo 23
````

You can also defined functions outside of this.

```
const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() {
  console.log('Delete todo...')
}

// call the delete method of todo obj
todo.delete();
```

## Notes
These are just some examples different ways of writing. Will go over better design patterns later.