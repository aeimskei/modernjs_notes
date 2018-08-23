# Type Conversion in JS

Basically, taking a variable and changing the data type. Cases that you're going to do this:

* Taking input from a form and putting that into a variable, that's going to be a string by default.
* If you want to apply calculations, you're going to have to parse it and change it to a number type.
* Different Ways to Do Conversions

## Number to String

In the console in Google Chrome, notice that the text color is black, that means its a string. This example, the length property does not work, logs as undefinded:

```
let val;

// Number to string
val = 5;

// Output
console.log(val);               // Log the assigned value
console.log(typeof val);        // Log typeof
console.log(val.length);        // Logs undefined
```

Wrap number into a String function to convert:

```
let val;

// Number to string
val = String(5);                // Wrap in a String function

// Output
console.log(val);               // Log the assigned value
console.log(typeof val);        // Log typeof
console.log(val.length);        // Log the .length property
```

More example of turning Numbers to Strings

```
let val;                        // Initialize

// Number to string
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

// Output
console.log(val);               // Logs the assigned value
console.log(typeof val);        // Logs typeof
console.log(val.length);        // Logs the .length property
```

## String to Number

```
val = Number('5');

// Output
console.log(val);               // Logs 5
console.log(typeof val);        // Logs number
console.log(val.toFixed());     // Logs 5 
console.log(val.toFixed(2));    // Logs 5.00
```

More examples:

```
val = Number('5');              // Logs 5 as a number
val = Number(true);             // Logs 1 (parse true = 1)
val = Number(false);            // Logs 0 (parse false = 0)
val = Number(null);             // Logs 0
val = Number('hello');          // Logs NaN (not a number)
val = Number([1,2,3]);          // Logs NaN (not a number)

val = parseInt('100');          // Logs 100 as a number
val = parseInt('100.30');       // Still logs 100
val = parseFloat('100.30');     // Logs correct decimal point
```

# Type Coercion

Similar to Type Conversion, but JavaScript does it for us.

As number:

```
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log('**************');    // Divider for console
console.log(sum);                 // Logs 11 as a number
console.log(typeof sum);          // Logs number
```

Coercion to string:
```
const val3 = '5';                 // Or const val3 = String(5)
const val4 = 6;
const add = val3 + val4;
console.log('**************');    // Divider for console
console.log(add);                 // Logs 56 as string
console.log(typeof add);          // Logs string
```

Convert to number with Number():
```
const val3 = '5';                 // Or const val3 = String(5)
const val4 = 6;
const add = Number(val3 + val4);  // Converts to number
console.log('**************');    // Divider for console
console.log(add);                 // Logs 56              
console.log(typeof add);          // Logs number
```