// =========================================
// Primitive Data Types
// =========================================

// String
const name = 'John Smith'; 
console.log(typeof name);           // Logs string

// Number
const age = 32;
console.log(typeof age);            // Logs number

// Boolean
const hasKids = true;
console.log(typeof hasKids);        // Logs boolean

// Null
const car = null;                   // This is a bug, logs object
console.log(typeof car);          

// Undefined
let test;
console.log(typeof test);           // Logs undefined

// Symbol (part of ES6, a new Primitive Type)
const sym = Symbol();
console.log(typeof sym);            // Logs symbol

// ================================================
// Reference Data Types - all comes back as Objects
// ================================================

// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);            // Logs object

// Object Literal
const address = {
  city: 'Santa Ana',
  state: 'CA'
}
console.log(typeof address);           // Logs object

// Date
const today = new Date();             // Use the Date Constructor
console.log(today);                   // Logs today's date
console.log(typeof today);            // Logs object