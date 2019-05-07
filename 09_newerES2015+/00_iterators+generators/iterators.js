// ==================== Iterator Example ==================== 
/*
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } :
      { done: true }
    }
  }
}

// Create an Array of Names
const namesArray = ['May', 'Olive', 'Apple'];
// Initialize the Iterator and Pass in the namesArray
const names = nameIterator(namesArray);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());
*/

// ==================== Generator Example ==================== 

/*
// our generator function
function* sayNames() {
  yield 'May';
  yield 'Olive';
  yield 'Apple';
}

// assign a variable to the generator
const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next());
*/

// generator function to create ids
function* createIds() {
  let index = 0;

  // while true, makes it always on true
  while(true) {
    // then we want to yield the index value, increment it
    yield index++;
  }
}

// assign a vairble to the generator
const genId = createIds();

console.log(genId.next().value);
console.log(genId.next().value);
console.log(genId.next().value);
console.log(genId.next().value);

