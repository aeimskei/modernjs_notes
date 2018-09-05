// =============================================
// Create Person Class w/ Constructor & Method
// =============================================

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}!`;
//   }
// }

// =============================================
// Extend Person Class to Customer Constructor
// =============================================

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}!`;
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
//   }
// }

// =============================================
// Instantiate a new Customer
// =============================================

// const nancy = new Customer('Nancy', 'Powers', '555-123-4567', 'standard');

// // console.log(nancy);
// console.log(nancy.greeting());

// =============================================
// Customer Specific Method - Static
// =============================================

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}!`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipFee() {
    return 100;
  } 
}

const nancy = new Customer('Nancy', 'Powers', '555-123-4567', 'standard');

console.log(Customer.getMembershipFee());