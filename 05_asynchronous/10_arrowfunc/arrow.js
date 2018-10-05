// =====================================
// ES5 version of Function
// =====================================

/*
const helloThere = function() {
  console.log('Just saying hello there!')
}

helloThere();
*/

// =====================================
// ES6 Arrow Function
// =====================================

/*
const helloThere = () => {
  console.log('Just saying hello there!')
}
*/

// You can also do the Arrow Function in one line
// Function does not need braces
/*
const helloThere = () => console.log('Just saying hello there!')

helloThere();
*/

// Same thing with return
/*
const helloThere = () => 'Just saying hello there!';

console.log(helloThere());
*/

// Return Object Literal issue

/*
const helloThere = () => ({message: 'Just saying hello there!'});

console.log(helloThere());
*/

// With parameters
// If it's a single parameter, you don't need parantheses.
/*
const helloThere = name => console.log(`Hello ${name}!`);

helloThere('Rider');
*/

// If we have more than one parameter, use parantheses
/*
const helloThere = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}!`);

helloThere('Rider', 'McKenna');
*/

// As callback functions

// ES5 version:
/*
const names = ['Rider', 'Kai', 'Benjamin'];

const nameLengths = names.map(function(name) {
  return name.length;
});

console.log(nameLengths);
*/

// ES6 arrow function version:
/*
const names = ['Rider', 'Kai', 'Benjamin'];

const nameLengths = names.map((name) => {
  return name.length;
});

console.log(nameLengths);
*/

// ES6 version - shortest version
const names = ['Rider', 'Kai', 'Benjamin'];

const nameLengths = names.map(name => name.length);

console.log(nameLengths);