// Contructor Method, example with Person Constructor

/*
First, define a function and contructor name should start with a capital letter. This is a Constructor and it has one property called ```name```.
*/

// function Person () {
//   this.name = 'Amy';
// }

/*
Just with these lines of codes, we can ```instantiate``` a person object from the ```Person``` constructor. To instantiate an object, we use the ```new``` keyword. So, first create a variable with a name like maybe ```amy``` and instead of literal way, use ```new``` and ```Person()```
*/

// function Person () {
//   this.name = 'Amy';
// }

// const amy = new Person();

// console.log(amy);

/*
We can make as many people/person as we want, but ```Person()``` needs to take in an argument/parameter of something like ```name```, or whatever you want to name it. That way, when you create a new Person, you can construct it with a name. We can create as many people as we want now.
*/

// function Person(name) {
//   this.name = name;
// }

// const amy = new Person('Amy');
// const may = new Person('May');

// console.log(amy);
// console.log(may);

/*
The 'this' keyword is very important, it's referring to the first instance of the object. In this example, 'this' pertains to the ```Person``` function scope.

But, we can also use 'this' outside of the function scope, so it'll be in the global scope. In the global scope, you'll get the ```Window``` object.

Just remember, when ```'this'``` is in the global scope, it pertains to the ```Window``` object.
*/

// function Person(name) {
//   this.name = name;
//   console.log(this);
// }

// const amy = new Person('Amy');
// const may = new Person('May');

// this.alert('Hello from Window Object bc this is in the global scope');

// console.log(this);

/*
Add other properties
*/

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const amy = new Person('Amy', 29);
// const may = new Person('May', 27);

// console.log(amy);
// console.log(amy.name);
// console.log(amy.age);

// console.log(may);
// console.log(may.name);
// console.log(may.age);

/*
Birthday property instead of age. When we instantiate an object, we'll pass in a date of birth (dob), it'll be passed in as a string, a date with ```Date()``` and pass in the dob string. Notice that the Date() object, which is a core object of JavaScript also has a constructor, we're calling ```new``` Date().
*/

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
}

const amy = new Person('Amy', 'March 22, 1989');

console.log(amy);