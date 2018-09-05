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

console.log(bethany);
console.log(james.calculateAge());