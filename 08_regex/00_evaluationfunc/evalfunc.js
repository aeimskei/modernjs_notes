// initialize a variable
let regex;

// set 'regex' variable a 'regular expression literal' using / / 
regex = /hello/i;

// ========= exec() ==========
// matches, return result array or null

const result = regex.exec('hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// ========= test() ==========
// returns true or false
const result = regex.test("Hello");
console.log(result); // false if no `i` at the end

// ========= match() ==========
// return result array or null
const str = 'Hello There';
const result = str.match(regex);
console.log(result);

// ========= search() ==========
// returns index of the first match if not found
const str = 'Hello There';
const result = str.search(regex);
console.log(result);

// ========= replace() ==========
const str = 'Hello There';
const newStr = str.replace(regex, "Hi");
console.log(newStr);