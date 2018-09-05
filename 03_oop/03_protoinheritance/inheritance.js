// Person Constructor Object
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Prototype Method for Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

// Instantiate a Person
const person1 = new Person('John', 'Smith');

// console.log(person1);
// console.log(person1.greeting());

// ==============================================================
// Example of Customer Constructor Object but not inheriting yet
// ==============================================================

// // Customer Constructor Object
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Instantiate or create a Customer
// const customer2 = new Customer('Joann', 'Thompson', '555-123-7879', 'standard')

// console.log(customer2);
// console.log(customer2.greeting());

// ==============================================================
// Example of Customer Constructor Object, inherit works
// ==============================================================

// Customer Constructor Object
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person protoype methods
Customer.prototype = Object.create(Person.prototype);

// Instantiate or create a Customer
const customer2 = new Customer('Joann', 'Thompson', '555-123-7879', 'standard')

// console.log(customer1);
console.log(customer2);
console.log(customer2.greeting());

