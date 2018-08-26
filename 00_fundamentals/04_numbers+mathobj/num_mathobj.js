// ================================================
// Numbers and Math Object
// ================================================

// In this example, we're gonna set two numbers
const num1 = 100;
const num2 = 50;
let val;                    // Initialize, bc we will mutate val later


// Simple math operators with numbers
val = num1 + num2;          // Logs 150 as a number
val = num1 * num2;          // Logs 5000 as a number
val = num1 - num2;          // Logs 50 as a number
val = num1 / num2;          // Logs 2 as a number
val = num1 % num2;          // Logs 0 as a number

// Math Object

/*
Math is an object, meaning that it has properties and methods.
A property is an attribute. A method is a function iniside of an object.
*/

val = Math.PI;              // Logs PI, 3.14 as a number
val = Math.E;               // Logs Euler's number, 2.72

/*
Helpful methods for rounding a number:
*/

val = Math.round(2.8);      // Logs round to 3 as a number
val = Math.round(2.4);      // Logs round to 2 as a number
val = Math.ceil(2.4);       // Logs round up, to 3
val = Math.floor(2.4);      // Logs round down, to 2

/*
Helpful methods for exponents of a number:
*/

val = Math.sqrt(64);        // Logs square to 8

/*
Helpful methods for absolute of a number:
*/

val = Math.abs(-3);         // Logs 3 as the absolute number

/*
Helpful methods for power of a number:
*/

val = Math.pow(8, 2);       // Logs 64 as bc 8 to the 2nd pow

/*
Helpful methods for min and max:
*/

val = Math.min(2,33,4,1,55,6,3);     // Logs the min, 1
val = Math.min(2,33,4,1,55,6,-2);    // Logs the min, -2
val = Math.max(2,33,4,1,55,6,-2);    // Logs the max, 55

/*
Helpful methods for random numbers:
*/

val = Math.random();                        // Logs a decimal, 0.558
val = Math.random() * 20;                   // Logs between 0-19
val = Math.random() * 20 + 1;               // Logs between 0-20
val = Math.floor(Math.random() * 20 + 1);   // Logs between 0-20, drop decimal

console.log(val);           