// ================================================
// Function Declarations 
// ================================================
/*
Start off with ```function``` and then name it, then ```()``` and ```{}```. Anything inside ```{}``` is the function scope. This first part is just declaring the function. If you check the console, you won't see anything yet.
*/

// function greet() {
//   console.log('Hello');
// }

/*
We actually have to call it by writing the name, ```greet()```
*/

// greet();                  // Logs Hello

/*
Usually, you'd want to return something from a function. Then wrap the actual function call in ```console.log```
*/

// function greet() {
//   return 'Hello';
// }

// console.log(greet());

/*
With functions, declarations, expressions, etc. all types of functions, they can take in parameters, also called arguments.

So let's say we want a parameter of ```firstName```. Then, inside the ```{}```, we can do whatever that we want with it, like, return ```'Hello ' + firstName```. Next, down in the function call, you can pass in a value, let's say ```May```. 
*/

// function greet(firstName) {
//   return 'Hello ' + firstName;
// }

// console.log(greet('May'));              // Logs Hello May

/*
You can also have multiple parameters.
*/

// function greet(firstName, lastName) {
//   // return 'Hello ' + firstName + ' ' + lastName;

//   // template literal version
//   return `Hello ${firstName} ${lastName}`
// }

// console.log(greet('May', 'Miller'));       // Logs Hello May Miller

/*
What if we took away ```'May', 'Miller'``` strings inside the function call? It'll log ```Hello undefined undefined```. There are a couple ways to have default values for your parameters.
*/

// Before ES6

// function greet(firstName, lastName) {
//   if (typeof firstName === 'undefined') {firstName = 'John'}    // default
//   if (typeof lastName === 'undefined') {lastName = 'Smith'}     // default
//   // template literal version
//   return `Hello ${firstName} ${lastName}`
// }

// console.log(greet());       // Logs Hello John Smith

// With ES6, you can define defaults inside the parentheses

// function greet(firstName = 'John', lastName = 'Smith') {
//   // template literal version
//   return `Hello ${firstName} ${lastName}`
// }

// console.log(greet());                 // Logs Hello John Smith
// console.log(greet('May', 'Miller'));  // Logs Hello May Miller

