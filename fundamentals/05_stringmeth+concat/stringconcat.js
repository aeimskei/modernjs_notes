// ================================================
// String Methods and Concatenation
// ================================================

const firstName = 'Jack';
const lastName = 'Mill';
const age = 28;
const string = 'Hello there my name is Amy';
const tags = 'web design,web development,programming';
let val;                                  // Initialize, will change later

val = firstName + lastName;               // Logs JackMill

// String Concatenation
val = firstName + ' ' + lastName;         // Logs Jack Mill, notice the space

// Append, means add on to a variable, not replace it
val = 'Jim ';
val += 'Stock'                            // Logs Jim Stock

// Example of a sentence concatenation
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';   // Escape w/ backslash \

// ================================================
// Property and Methods avialable for String
// ================================================

// Length property
/*
Counts the number of characters in a string
Since this is a property and not a method, we don't need parentheses
Parentheses are for methods, which are basically functions w/in obj
*/

val = firstName.length;                   // Logs 4 as a number      

// Concat() method
/*
Works similar to the addition operator in previous example, but by using the method concat().
*/

val = firstName.concat(' ', lastName);    // Logs Jack Mill

// Change case with toUpperCase() and toLowerCase() methods
val = firstName.toUpperCase();            // Logs JACK
val = firstName.toLowerCase();            // Logs jack

// You can also treat strings like read only arrays
/*
This isn't very useful, but just to mention it bc you can do it. Like if we want to get a certain character of the string.
*/

val = firstName[0];                       // Logs J, it's taking 0 index of Jack
val = firstName[2];                       // Logs c, it's taking 0 index of Jack

// IndexOf() method
/*
Find indexOf a value or character
*/

val = firstName.indexOf('c');             // Logs 2 as a number of index in Jack
val = firstName.indexOf('f');             // Logs -1 if character is not there
val = firstName.lastIndexOf('c');         // Counts from the end of value

// ChartAt() method
/*
Is the opposite of indexOf()
*/
val = firstName.charAt('2');              // Logs 'c'

// Get last character of a string
/*
Edge case, keep in mind a string can change, so you need to setup a forumula.
*/
val = firstName.charAt(firstName.length - 1);   // Logs 'k'

// Substring() method
/*
So, pull a substring out of a string
*/
val = firstName.substring(0, 2);               // Logs 'Ja', pluck out 0-2

// Slice() method
/*
The slice() method is mostly used with arrays to pull things out of arrays, but you can also use it with strings.
*/
val = firstName.slice(0, 2);                  // Logs 'Ja', pluck out 0-2
val = firstName.slice(-3);                    // Logs 'ack', takes last 3 from back

// Split() method
/*
It can split a string into an array based on a separator. This example, turn the variable string into an array based on spaces.
*/
val = string.split(' ');          // Logs ["Hello", "there", "my", "name", "is", "Amy"]

/*
This comes in handy if you have a form on your website, like maybe to create a blog post, and you had the user enter comma separated tags for their post. When they submit the form, you can turn them into an array and do what you want with it.
*/

val = tags.split(',');           // Logs ["web design", "web development", "programming"]

// Replace() method
/*
Search for Amy in the string variable and replace with May.
*/
val = string.replace('Amy', 'May');   // Logs Hello there my name is May

// Includes() method
/*
Gives you a true or false value, based on if something is in the string
*/
val = string.includes('Hello');       // Logs true
val = string.includes('Boo');         // Logs false

console.log(val);       