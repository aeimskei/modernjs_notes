// ================================================
// Template Literals
// ================================================

const name = 'Amy';
const age = 28;
const job = 'Web Developer';
const city = 'Luangprabang';
let html;                           // Initialize html variable

/*
A lot of times, you're going to be inserting HTML from JavaScript. So, when you fetch someting through AJAX and you want to put in a <ul> or <table> with dynamic data, you're gonna do that through JavaScript. So, you're usually gonna have to create some kind of HTML string with the HTML and with the dynamic data that you want to insert.
*/

// ================================================
// Example w/out Template Strings (ES, old way)
// ================================================

/*
Let's say that we want a <ul> with <li> inside and concatenate the varibales we want to include. Next we want the age variable in another <li>, etc. This is a template string for the html variable.
*/
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

document.body.innerHTML = html;         // Will dynamically show list on browser

/*
This is kinda annoying actually bc it doesn't look very good - just a super long line of code meshed together. Should put them in separate lines.
*/

html = '<ul>' + 
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>'

document.body.innerHTML = html;         // Will dynamically show list on browser

// ================================================
// Example Template Strings (ES6 way)
// ================================================

/*
Instead of using single quotes, use back-ticks, that's how it knows that this is a template string. The back-tick is to the left of your number 1 key on the keyboard.

Write out the code as if you would write in HTML, but inside the back-ticks. It's essentially a template.

If you want to include a variables, use ${varname/expression} to insert, no need to concatenate.

This is much nicer and much cleaner!
*/

function hello() {
  return 'hello';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Expressions: ${2 + 2}</li>
    <li>Functions: ${hello()}</li>
    <li>Conditionals: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;         // Will dynamically show list on browser

/*
These are what we can put in ${} template literals:
- Variables
- Expressions
- Functions
- Conditionals, also with ternerary operators
*/