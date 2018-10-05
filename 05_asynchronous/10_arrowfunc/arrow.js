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

const helloThere = (name) => console.log(`Hello ${name}!`);

helloThere('Rider');