// ====================== create sets ======================
// SETS - store unique values of any type
const set1 = new Set();

// add values to SET with .add() method
set1.add(100);
set1.add('A');
set1.add({name: 'McKenna'});
set1.add(true);

// create SET with arry passed in with values
const set2 = new Set([1, true, 'hello', {animal: 'monkey'}]);

// console.log('what\'s in set1 =>', set1);
// console.log(set2);

// ===================== get sets count =====================

// console.log(`the count of set1 =>`, set1.size);

// ==================== check for values ====================

// console.log('does it have the value 100? =>', set1.has(100));
// console.log('does it have the value 100? =>', set1.has(50 + 50));
// console.log('does it have the value {name: "McKenna"} =>', set1.has({name: 'McKenna'}));

// ==================== delete from sets ====================

// set1.delete(100);
// console.log(set1);

// ================== iterate with for...of ==================

// for (let item of set1) {
//   console.log(item);
// }

// ================== iterate with forEach() ==================

// set1.forEach((value) => {
//   console.log(value);
// });

// ================= convert to Arrays w/ Maps =================

const setArray = Array.from(set1);

console.log(setArray);