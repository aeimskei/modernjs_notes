# Variables in JavaScript

## Three type of variables in JS:
* var
* let (intoduced in ES6)
* const (intoduced in ES6)

## Example with VAR and assignment

```
var name = 'John Smith';      // Declare a variable
console.log(name);            // Log onto console
name = 'Jane Smith';          // Reassign variable
console.log(name);            // Log into console
```

## Example with VAR and no-assignment

```
var greeting;                 // Initialize variable
console.log(greeting);        // Logs as undefined
greeting = 'Hello';           // Assign variable later
console.log(greeting);        // Log into console
```

Variables with no-assignments are commonaly used in 
conditionals, if-else conditions. Like, if something is
true, greeting = something, else greeting = something

## Rules and Convention Variables

A couple things variables can include:

* letters
* numbers
* _ (not recommended | ok with private/encap variables)
* $ (not recommended | ok with jQuery)
* cannot start with a number

Multi-word variables:
```
var firstName = 'John';            // Camel case, for regular variables
var first_name = 'Jack';           // Underscore | PHP
var FirstName = 'Jane';            // Pascal case | recommended in OOP
                                   // When you create a contructor function
                                   // When you create a Class w/ ES6 classes
var firstname = 'Jeff';            // All lowercase, not recommended
```

## Example with LET and assignment

* let works vary similar to var in the global scope
* But, let has advantages on block-level scope

```
let country = 'Myanmar';         // Declare a variable
console.log(country);            // Log onto console
country = 'Laos';                // Reassign variable
console.log(country);            // Log into console
```

## Example with LET and no-assignment

```
let greating;                     // Initialize variable
greating = 'Hello';               // Assign value to let
console.log(greating);            // Log onto console
greating = 'Sabaidee';            // Reassign let
console.log(greating);            // Log into console
```

## Example with CONST and assignment

* With const, it works differently, it stands for constant.
* Meaning, it can't change or reassigned.

```
const city = 'Luangprabang';      // Assign value to const
console.log(city);                // Log into console
// city = 'Vientiane';            // Cannot reassign, you'll get an error
// const river;                   // Cannot have empty value
```

## Confusing Part of CONST for Many People

When using const for array and objects, and other non-primitive data types. With CONST, we can change objects and arrays, but not re-declare

```
const person = {                   // Assign object to const
  name: 'Jeff',                    // Key Value pairs inside object
  age: 30
}

person.name = 'Emma';             // Mutate person obj, change data inside obj
                                  // Can change value of key, but not obj name
person.age = 32;                  
console.log(person);              // Log object literal
```

Confusing parts about const and ARRAYS

```
const numbers = [1,2,3,4,5];       // Assign array to const
numbers.push(6);                   // Use push method to add #
// numbers = [1,2,3,4,5,6];        // Error, cannot re-declare
console.log(numbers);              // Log array
```

## Recommended for Developers

Use CONST, unless you plan on having 
* the value changing
* initializing
* using variable in iterator/loop