let val;                        // Initialize

// ================================================
// Type Conversion: Numbers to Strings
// ================================================

val = String(5);                // Wrap in a String function
val = String(4+4);              // Overwrite, logs 8 as string

// Boolean to string
val = String(true);             // Logs true as a string

// Date to string
val = String(new Date());       // Logs today's date

// Array to string
val = String([1,2,3,4]);        // Logs 1,2,3,4 as a string

// toString() Method
val = (5).toString();           // Logs 5 as a string
val = (true).toString();        // Logs true as a string

// ================================================
// Type Conversion: Strings to Numbers
// ================================================

val = Number('5');              // Logs 5 as a number
val = Number(true);             // Logs 1 (parse true = 1)
val = Number(false);            // Logs 0 (parse false = 0)
val = Number(null);             // Logs 0
val = Number('hello');          // Logs NaN
val = Number([1,2,3]);          // Logs NaN

val = parseInt('100');          // Logs 100 as a number
val = parseInt('100.30');       // Still logs 100
val = parseFloat('100.30');     // Logs correct decimal point

// Output
console.log(val);               // Logs the assigned value
console.log(typeof val);        // Logs typeof
// console.log(val.length);        // Log the .length property works only on strings
console.log(val.toFixed());       // Logs number
console.log(val.toFixed(2));      // Logs number w/ two decimal points

// ================================================
// Type Coercion: JavaScript converts for us
// ================================================

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log('**************');    // Divider for console
console.log(sum);                 // Logs 11 as a number
console.log(typeof sum);          // Logs number

const val3 = '5';                 // Or const val3 = String(5)
const val4 = 6;
const add = Number(val3 + val4);  // Converts to number
console.log('**************');    // Divider for console
console.log(add);                 
console.log(typeof add);          