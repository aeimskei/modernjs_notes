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

const getSum1 = function(num1, num2) {
  return num1 + num2;
}

const getSum2 = new Function('num1', 'num2', 'return num1 + num2');

console.log(getSum1(2, 2));
console.log(getSum2(2, 2));