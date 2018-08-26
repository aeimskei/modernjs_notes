// ================================================
// Switches
// ================================================
/*
Inside the ```switch()``` parentheses, you insert what you want to test. Then, inside the ```switch(){}``` curly braces, you want to define different cases. Next, the syntax is to put a ```:``` and tell it whatever we want it to do if its what we're testing. Then, break from that case, add another if you want to test more. When we come to an end, use ```default:```
*/

// Simple example
const color = 'yellow';               // Change between red, blue and yellow

switch(color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
}

// Value of day of the week example
/*
Use ```(new Date().getDay()``` to get the value of the day of the week in number form, starting with ```0``` for Sunday.
*/

let day;

switch(new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);

/*
Switches are useful if you have a lot of different cases, rather than using a bunch of ```else if()```
*/