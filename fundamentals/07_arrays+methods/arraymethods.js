// ================================================
// Arrays and Array Methods
// ================================================

// Create some arrays

/*
There are a couple ways to define arrays.
- Using brackets [] is popular
- Use the Array constructor / Array object
*/

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);

/*
Arrays don't have to be just numbers, can be an array of strings.
*/
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

/*
Arrays can be a mix of different data types too.
*/
const mixed = [2, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];
// console.log(mixed);       // Logs [2, "Hello", true, undefined, null, {…}, Thu Aug 23 2018 13:29:30 GMT-0700 (Pacific Daylight Time)]

let val;                    // Initialize val to mutate later


// Get Array length
/*
Get how many values is in the array. Similar to how we used the length property with a string.
*/
val = numbers.length;             // Logs 7 as a number

// Check if is Array with array object isArray() method
val = Array.isArray(numbers);     // Logs true
val = Array.isArray('hello');     // Logs false

/*
This is useful when working in the DOM, for example, when returning a node list from the DOM, which is structured like an array, but it's not an actual array, so we can't do certain things like forEach loops. So, it's a good way to test if something is an array. Then, you can convert it into an array if you need to.
*/

// Get a single value from an array
/*
Put in the position or index of the value that you want
*/
val = numbers[3];               // Logs 23 bc 3rd index in [43,56,33,23,44,36,5]
val = numbers[0];               // Logs 43

// Insert into array
/*
What if we want to insert something into the array?
Arrays are not immutable, we can modify them.
*/
numbers[2] = 100;               // Logs [43, 56, 100, 23, 44, 36, 5]

// IndexOf() method to find index of a value
val = numbers.indexOf(36);      // Logs 5 bc 36 is in the 5th position

// ================================================
// Mutating Arrays with Different Methods
// ================================================

// Push() method
/*
Add on the end of the array
*/
numbers.push(250);          // Logs [43, 56, 100, 23, 44, 36, 5, 250]

// Unshift() method
/*
Add on to the front of the array
*/
numbers.unshift(120);       // Logs [120, 43, 56, 100, 23, 44, 36, 5, 250]

// Pop() method
/*
Take off from the end to the front
*/
numbers.pop();              // Logs [120, 43, 56, 100, 23, 44, 36, 5]

// Shift() method
/*
Take off from the front
*/
numbers.shift();            // Logs [43, 56, 100, 23, 44, 36, 5]

// Splice() method
/*
Splice out values from any point of the array.
Say, we want to take out 56. Defined first in position one and only one value.
Define where you want to start and end.
What if we want to take the two after 56 instead.
*/
// numbers.splice(1, 1);       // Logs [43, 100, 23, 44, 36, 5]
numbers.splice(1, 3);          // Logs [43, 44, 36, 5]

// Reverse() method to reverse the array
numbers.reverse();             // Logs [5, 36, 44, 43]

// Concat() method to concatenate arrays
val = numbers.concat(numbers2);   // Logs [5, 36, 44, 43, 22, 45, 33, 76, 54]

// Sort() method
/*
The fruit variable is going to be sorted in alphabetical order.
With numbers, it's going to sort by the first number.
*/
val = fruit.sort();               // Logs ["Apple", "Banana", "Orange", "Pear"]
val = numbers.sort();             // Logs [100, 23, 36, 43, 44, 5, 56]

// Use the compare function to fix number sort
val = numbers.sort(function(a, b){    // Logs [5, 23, 36, 43, 44, 56, 100]
  return a - b;
});

// Reverse sort
val = numbers.sort(function(a, b){    // Logs [100, 56, 44, 43, 36, 23, 5]
  return b - a;
});

// Find() method
/*
The find() method takes in a testing function.
*/
function under50(num){
  return num < 50;
}

val = numbers.find(under50);          // Logs 43, the first number under50

/*
Do the opposite
*/
function over50(num){
  return num > 50;
}

val = numbers.find(over50);          // Logs 56, the first number over50

console.log(numbers);
console.log(val);