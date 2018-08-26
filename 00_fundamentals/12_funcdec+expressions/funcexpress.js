// ================================================
// Function Expressions
// ================================================

// Anonymous Function Expression

// const square = function(x) {
//   return x * x;
// };

// console.log(square(8));           // Logs 64

// Just like declaration, if you want it default:

// const square = function(x = 3) {
//   return x * x;
// };

// console.log(square(8));           // Logs 64
// console.log(square());            // Logs 9

/*
In a lot of cases, using an expression or declaration isn't gonna make much of a difference, but there are times when expression have benefits to them when it comes to hoisting, closures and some more advanced stuff.
*/

// ===================================================
// Immediately Invokable Function Expressions - IIFEs
// ===================================================

/*
IIFEs are a function that you declare and run at the same time. To do this, we need to make an expression by defining an anonymous function inside the parentheses.
*/

// (function(){
//   console.log('IIFE ran...');
// })

/*
With just this block of code, it's not going to run bc it's not complete. When we call or run functions, they end with parentheses - whether its a declaration or an expression. So, add ```()``` at the end - looks funny, bu that's how these are constructed.
*/

// (function(){
//   console.log('IIFE ran...');           // Logs IIFE ran...
// })()

/*
These can also take in parameters. It'll run right away - we declared it and it ran at the same time.
*/

// (function(name){
//   console.log(`Hello ${name}`);           // Logs Hello Amy
// })('Amy')

/*
These are very useful when it comes down to certain design patterns - like the module pattern (ex. calories counter application), it's bascially a bunch of IIFEs that have private methods and private properties.
*/

// Property Methods
/*
We can put functions inside of objects as well, as opposed as just the global scope. When a function is put inside an object, it's called a method. 

* Let's set a variable ```todo``` to an object. 
* We want an ```add``` and set it to a function, and have it do something. 
* Now include ```edit``` and set a function, an edit usually takes in an ```id``` to do something to what you're editing.
*/

// const todo = {
//   add: function() {
//     console.log('Add todo...');
//   },
//   edit: function(id) {
//     console.log(`Edit todo ${id}`);
//   }
// }

// // call the add method of todo obj
// todo.add();                     // Logs Add todo...
// // call the edit method of todo obj
// todo.edit(23);                  // Logs Edit todo 23

/*
You can also defined functions outside of this.
*/

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