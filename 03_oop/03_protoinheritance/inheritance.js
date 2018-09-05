// // Person Constructor Object
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Prototype Method for Greeting
// Person.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// // Instantiate a Person
// const person1 = new Person('John', 'Smith');

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

// // Customer Constructor Object
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person protoype methods
// Customer.prototype = Object.create(Person.prototype);

// // Instantiate or create a Customer
// const customer2 = new Customer('Joann', 'Thompson', '555-123-7879', 'standard')

// // console.log(customer2);
// console.log(customer2);
// console.log(customer2.greeting());

// ==============================================================
// Have Customer in __proto__
// ==============================================================

// // Customer Constructor Object
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person protoype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Instantiate or create a Customer
// const customer2 = new Customer('Joann', 'Thompson', '555-123-7879', 'standard')

// // console.log(customer2);
// console.log(customer2);
// console.log(customer2.greeting());

// ==============================================
// Overwrite Person prototype with new prototype
// ==============================================

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

console.log(person1.greeting());

// ==============================================

// Customer Constructor Object
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person protoype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Instantiate or create a Customer
const customer2 = new Customer('Joann', 'Thompson', '555-123-7879', 'standard')

// Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}, welcome to our organization.`;
}

console.log(customer2);
console.log(customer2.greeting());