# Data Types in JS

## For JavaScript, they're a bunch of different types.

(1) Primitve Data Types:
* Stored directly in the location the variables accesses
* Stored on the stack (you access it by its actual value)

(2) Reference Data Types:
* Obj that are accessed by reference (data isn't really stored in variable)
* Instead, objs are stored on the heap (dynamically allocated memory)
* A pointer to a location in memory

## Primitive Data Types in JS

* String - sequences of characters (can be letter, numbers, symbols)
* Number - integers, floats
* Boolean - true/false
* Null - intentional empty value
* Undefined - a variable that has not been assigned a value
* Symbols (ES6) - (explain later)

## Reference Data Types in JS

* Arrays
* Object Literals
* Functions
* Dates
* Antyhing Else...(object wrappers for strings and numbers)

## JS a Dynamically Typed Language

* Types are associated with values not variables
* The same variable can hold multiple types
    - Meaning it can hold a string and then set to a number, no errors
* We do not need to specify types
* Most other languages are statically typed (Java, C#, C++)
* There are supersets of JS and addons to allow static typing (TypeScript, Flow)
    - TypeScript is the most popular, turns JS to statically typed, superset
    - Superset means, it's everything that JS is plus more features
    - Modules and add-ons like Flow.js for statically typed as well