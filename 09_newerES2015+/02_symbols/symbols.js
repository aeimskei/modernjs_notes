// ====================== create a symbol ======================

/*
const sym1 = Symbol();
const sym2 = Symbol('sym2'); // with identifier inside

// console.log(sym1);
// console.log(sym2);
console.log(typeof sym2);
*/

// ===================== unqiue object keys =====================

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

// set them as keys, you need to use the [] syntax for varibale use
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
// this is not a symbol, just a prop, to use as example w/ for...in
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// symbols are not enumerable in for...in loops
/*
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`); // get key with {i} and value with myObj[i]
}
*/

// symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));