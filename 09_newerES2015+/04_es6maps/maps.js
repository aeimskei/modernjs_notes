// ===================== MAPS = key-value pairs =====================
// we can use any type as a key or a value
const map1 = new Map();

// Set KEYS
const key1 = 'string one here',
      key2 = {},
      key3 = function() {};

// Set Map VALUES by key
map1.set(key1, 'Value key1,');
map1.set(key2, 'Value key2,');
map1.set(key3, 'Value key3');

// =============== iterating through maps w/ for...of ===============

/*
// loop using for...of to get BOTH keys and values
for(let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// iterate to get KEYS only
for(let key of map1.keys()) {
  console.log(`${key}`);
}

// iterate to get VALUES only
for(let value of map1.values()) {
  console.log(`${value}`);
}
*/

// ============== iterating through maps w/ forEach() ==============

/*
map1.forEach(function(value, key) {
  console.log(`${key} = ${value}`);
});
*/

// ===================== convert keys to array =====================

// create an array of BOTH key-value pairs
// const keyValueArr = Array.from(map1);
// console.log(keyValueArr);

// create an array of only the VALUES
// const valueArr = Array.from(map1.values());
// console.log(valueArr);

// create an array of only the KEYS
const keyArr = Array.from(map1.keys());
console.log(keyArr);