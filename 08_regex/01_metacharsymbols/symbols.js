// initialize regex
let regex;

// ======================== literal characters ========================
regex = /hello/;
regex = /hello/i;

// ======================= metacharacter symbols =======================
regex = /^h/i;          // ^ means must start with
regex = /d$/i;          // $ means ends with
regex = /^hello$/i;     // ^ $ means must begin and end with
regex = /h.llo$/i;      // . matches any ONE character, only 1, not more than one
regex = /h*llo$/i;      // * matches any character, 0 or more times
regex = /gre?a?y/i;     // ? means optional, like either e or a for gray
regex = /gre?a?y\?/i;   // \ escape character

// =================== character sets w/ brackets [ ] ===================

regex = /gr[ae]y/i;     // can be whatever inside the brackets
regex = /[GF]ray/;      // must be G or F, whatever req inside []
regex = /[^GF]ray/;     // will match anything except G or F
regex = /[A-Z]ray/;     // will match any uppercase letter A to Z
regex = /[a-z]ray/;     // will match any lowercase letter a to z
regex = /[A-Za-z]ray/;  // will match all cases A to Z and a to z
regex = /[0-9]/;        // will match all digits

// ======================= quantifiers w/ braces { } =======================

regex = /Hel{2}o/i;     // matches char before the {y} and the amount
regex = /Hel{2,4}o/i;   // matches char before the {y} with range
regex = /Hel{2,}o/i;    // matches char before the {y} occur at least y times

// ====================== parentheses () for grouping ======================

regex = /([0-9]x){3}/;   // looks for combo of digit and x together 3+ times
                         // like const str = '1x2x3x'
regex = /^([0-9]x){3}$/; // looks for combo like '1x2x3x' and stops at 3

// ====================== shorthand character classes ======================

regex = /\w/;            // \w  is word char, it's alphanumeric or _ underscore
regex = /\w+/;           // \w+ looks at all word character, one or more
regex = /\W/;            // \W  looks at non-word character

regex = /\d/;            // \d  matches any digit
regex = /\d+/;           // \d+ looks at all digit character, one or more
regex = /\D/;            // \D  matches any non-digit

regex = /\s/;            // \s  matches white space
regex = /\S/;            // \S  matches non-white space

// ============================= string match =============================

regex = /Thank\b/i;      // \b  this is word boundary

// ============================== assertions ==============================

regex = /x(?=y)/;       // will match x only if it's followed by y
regex = /x(?!y)/;       // will match x only if not followed by y


// string to match
const str = 'xert';
const result = regex.exec(str);
console.log(result); 

// create a custom function that'll print whatever the regex we put in or does not
// the function takes two arguments, the regex and string
function regexTest(regex, str) {
  if (regex.test(str)) {
    console.log(`The string ${str} matches the regex ${regex.source}`)
  } else {
    console.log(`The string ${str} does NOT match the regex ${regex.source}`)
  }
}

// call the function
regexTest(regex, str); // The string Hello World does NOT match the regex hello
// bc we don't have the 'i' for case-insensitivity