// create a variable as an object with different proto methods
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}!`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

// create an object
const nancy = Object.create(personPrototypes);

// add properties
nancy.firstName = 'Nancy';
nancy.lastName = 'Powers';
nancy.age = 33;

console.log(nancy.getsMarried('McKenna'));

console.log(nancy);
console.log(nancy.greeting());