// ================= destructuring assignment with arrays ================= 

/*
let a, b;
[a, b] = [100, 200];

// rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log('print a value:', a);
console.log('print b value:', b);
console.log('print rest value:', rest);
*/

// ================= destructuring assignment with objects ================= 

/*
let a, b;

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log('print a value:', a);
console.log('print b value:', b);
console.log('print rest value:', rest);
*/

// ====================== array destructuring example ====================== 

/*
const people = ['McKenna', 'Lisa', 'Alice'];
const [person1, person2, person3] = people;

console.log(person1, person2, person3);
*/

/*
// parse array returned from a function
function getPeople() {
  return ['McKenna', 'Lisa', 'Alice'];
}

// initalize
let person1, person2, person3;
// then set to the function
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);
*/

// ====================== object destructuring example ====================== 

const person = {
  name: 'McKenna',
  age: 28,
  city: 'Los Angeles',
  gender: 'Female',
  sayHello: function() {
    console.log('Hello');
  }
}

// old ES5 way
/*
const name = person.name,
      age = person.age,
      city = person.city,
      gender = person.gender;
*/

// new ES6 destructuring way
const { name, age, city, gender, sayHello } = person;

console.log(name, age, city, gender);

sayHello();

