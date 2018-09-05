# Object Oriented Programming - Sub Classes

This is Inheritance in ES6 classes, better known as Sub Classes.

For instance, we can create a Person class and then create a Sub Class like maybe Customer, or whatever, and then, we can extend the Person class.

## Create Person Class with Constructor

```
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

Give it the ```greeting()``` method.

```
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${firstName} ${lastName}!`;
  }
}
```

## Now, Extend Person Class to Customer Class

