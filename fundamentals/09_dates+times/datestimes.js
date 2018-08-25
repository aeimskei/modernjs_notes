// ================================================
// Dates and Times
// ================================================

/*
Set to new Date, this is basically instantiating the Date object.
If nothing is passed into the () by default it'll be today's date.
Can specify in many different ways.
*/

let val;                      // Initialize val

const today = new Date();
let birthday = new Date('9-19-1987');
const birthtime = new Date('9-19-1987 11:25:00');
birthday = new Date('September 10 1987')
birthday = new Date('2/10/1981')

// val = today;                  // Logs today's date and typeof object
// val = today.toString();       // Logs typeof to string
// val = birthday;               // Logs Sat Sep 19 1987 00:00:00 GMT-0700 PST
// val = birthtime;              // Logs Sat Sep 19 1987 11:25:00 GMT-0700 PST

// Let's get more specific
/*
Note, the Date object starts at zero based. For example, January would be considered 0 as month in year. Also for the day of the week, it's zero base as well, so Sunday is 0.
*/

// Dates

// getMonth()
val = today.getMonth();

// getDate()
val = today.getDate();

// getDay()
val = today.getDay();

// getFullYear()
val = today.getFullYear();

// Times

// getHours()
val = today.getHours();

// getMinutes()
val = today.getMinutes();

// getSeconds()
val = today.getSeconds();

// getMilliSeconds()
val = today.getMilliseconds();

// getTime() for timestamp, the time that has passed since Jan 1st 1970
val = today.getTime();

// setMonth()
birthday.setMonth(1);          // Sets birthday month to Feb

// setDate()
birthday.setDate(12);

// setFullYear()
birthday.setFullYear(1987);   // Sets year to 1987

// setHours()
birthday.setHours(3);         // Sets clock 03:00:00

// setMinutes()
birthday.setMinutes(30);      // Sets clock 03:30:00

// setSeconds()
birthday.setSeconds(15);      // Sets clock 03:30:15

// console.log(val);
// console.log(typeof val);
console.log(birthday); //setMonth() & setDate() & setFullYear examples