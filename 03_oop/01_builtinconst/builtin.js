// ====================================
// String
// ====================================

// // sets primitive value to a variable
// const name1 = 'Joe';

// // can create string as an object
// const name2 = new String('James');

// console.log(name1);
// console.log(name2);

// Add property to String object
// ====================================

// // sets primitive value to a variable
// const name1 = 'Joe';

// // can create string as an object
// const name2 = new String('James');
// // add property
// name2.surname = 'Kennedy';

// console.log(name2);

// Matching types issue
// ====================================

// // sets primitive value to a variable
// const name1 = 'Joe';

// // can create string as an object
// const name2 = new String('James');
// // add property
// name2.surname = 'Kennedy';

// // console.log(typeof name1);
// // console.log(typeof name2);


// ====================================
// Number
// ====================================

// const num1 = 5;
// const num2 = new Number(5);

// console.log(num1);
// console.log(num2);

// console.log(typeof num1);
// console.log(typeof num2);

// ====================================
// Boolean
// ====================================

// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(bool1);
// console.log(bool2);

// console.log(typeof bool1);
// console.log(typeof bool2);

// ====================================
// Function
// ====================================

// const getSum1 = function(num1, num2) {
//   return num1 + num2;
// }

// const getSum2 = new Function('num1', 'num2', 'return num1 + num2');

// console.log(getSum1(2, 2));
// console.log(getSum2(2, 2));

// ====================================
// Object
// ====================================

// const james1 = {
//   name: 'James'
// }

// const james2 = new Object({name: 'James'});

// console.log(james1);
// console.log(james2);

// ====================================
// Array
// ====================================

// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4);

// console.log(arr1);
// console.log(arr2);

// ====================================
// Regular Expression (RegExp())
// ====================================

/*
If we want to create a regular expression, what you'd do is wrap it in two ```/ /```  forward slashes and then put the expression inside. In this case, put a backslash ```\w``` which represents a word character and then a ```+``` 

* ```\w+``` this expression means we're looking for a word character that occurs oen or more time.
* With ```RegEx()``` you need to use escape characters like ```\\w+\``` to get teh same as ```/\w+/```
*/

const regex1 = /\w+/;
const regex2 = new RegExp('\\w+');

console.log(regex1);  // logs /\w+/
console.log(regex2);  // logs /w+/
