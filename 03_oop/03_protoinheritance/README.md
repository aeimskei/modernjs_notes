# Object Oriented Programming - JavaScript Protypal Inheritance

What if we want one Object type inherit from another? For example, we have another ```Person``` object again and have another ```Customer``` object that will inherit its prototype. 

## Person Constuctore

First, let's start with a simple setup:

```
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

console.log(person1);
console.log(person1.greeting());
```

<kbd>![alt text](img/greeting.png "screenshot")</kbd>

## Customer Constructor

We'll create ```Customer``` function that takes in firstName, lastName, phone and memebership. Inside the function ```{}``` we want to call ```Person```, our Person Constructor, and add ```.call()``` bc it is a function that allows us to call another function from somewhere else in current context.

The first parameter in the ```.call()``` will be ```this```, and after that, we want whatever properties in the Constructor we're inferiting, in this case, firstName and lastName. Then, after that, whatever extra properties we have for Customer we need to just assign like we would normally in a Constructor.

```
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}
```

Let's instantiate a Customer and call ```greeting()``` Protoype Method:

```
// Customer Constructor Object
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Instantiate or create a Customer
const customer2 = new Customer('Joann', 'Thompson', '555-123-7879', 'standard')

// console.log(customer2);
console.log(customer2);
console.log(customer2.greeting());
```

<kbd>![alt text](img/protometherror.png "screenshot")</kbd>

Notice that there's an error when calling ```greeting()``` bc it's not yet ingeriting the Prototype. So, we need to addd a few lines of code for that to happen.