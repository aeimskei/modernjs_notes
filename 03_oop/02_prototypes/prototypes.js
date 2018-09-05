// Object.prototype
// Person.prototype

// Person Contructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const difference = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(difference);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Instantiate a new Person
const james = new Person('James', 'Kennedy', 'March 17, 1991')
const bethany = new Person('Bethany', 'Kennedy', 'April 17, 1991')

// Calculate Age
Person.prototype.calculateAge = function() {
  const difference = Date.now() - this.birthday.getTime();
  const ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get Full Name
Person.prototype.getFullName = function() {
  const fullName = this.firstName + ' ' + this.lastName;
  return fullName;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  return this.lastName = newLastName;
}

// console.log(bethany);
// console.log(bethany.calculateAge());
// console.log(bethany.getFullName());
// console.log(bethany.getsMarried('Marshall'));
// console.log(bethany.getFullName());

// console.log(bethany.hasOwnProperty('firstName'));