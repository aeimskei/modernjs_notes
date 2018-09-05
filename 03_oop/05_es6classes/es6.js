// // create a class
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}!`;
//   }
// }

// // create object
// const rowan = new Person('Rowan', 'Hallet');

// console.log(rowan);
// console.log(rowan.greeting());

// ======================================
// Calculate Age
// ======================================

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}!`;
//   }

//   calculateAge() {
//     const currentDate = Date.now();
//     const personBday = this.birthday.getTime();
//     const difference = currentDate - personBday;
//     const ageDate = new Date(difference);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // create object
// const rowan = new Person('Rowan', 'Hallet', 'March 8, 1989');

// console.log(rowan);
// console.log(rowan.calculateAge());  

// ======================================
// Gets Married
// ======================================

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}!`;
//   }

//   calculateAge() {
//     const currentDate = Date.now();
//     const personBday = this.birthday.getTime();
//     const difference = currentDate - personBday;
//     const ageDate = new Date(difference);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// // create object
// const rowan = new Person('Rowan', 'Hallet', 'March 8, 1989');

// rowan.getsMarried('McKenna');

// console.log(rowan);
// console.log(rowan.calculateAge());  

// ======================================
// Static Method
// ======================================

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}!`;
  }

  calculateAge() {
    const currentDate = Date.now();
    const personBday = this.birthday.getTime();
    const difference = currentDate - personBday;
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

// create object
const rowan = new Person('Rowan', 'Hallet', 'March 8, 1989');

rowan.getsMarried('McKenna');

// console.log(rowan);

// console.log(Person.addNumbers(1, 3));