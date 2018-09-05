// =============================================
// Create Person Class w/ Constructor & Method
// =============================================

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${firstName} ${lastName}!`;
  }
}
