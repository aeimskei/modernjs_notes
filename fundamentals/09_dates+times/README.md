# Dates and Times

Dates and times are very important in programming. In JavaScript, it has the Date Object that we can use to do certain things with Dates.

Set to new Date, this is basically instantiating the Date object.
If nothing is passed into the ```()``` by default it'll be today's date.

```
let val;                      // Initialize val

const today = new Date();

val = today;                  // Logs today's date and typeof object
val = today.toString();       // Logs typeof to string

console.log(val);             // Put below code
console.log(typeof val);      // Put below code
```
## Let's get more specific

Note, the Date object starts at zero based. For example, January would be considered ```0``` as month in year. Also for the day of the week, it's zero base as well, so Sunday is ```0```.

## Dates

Get month:
```
val = today.getMonth();
```

Get date:
```
val = today.getDate();
```

Get day:
```
val = today.getDay();
```

Get full year:
```
val = today.getFullYear();
```

## Times

Get hours:
```
val = today.getHours();
```

Get minutes:
```
val = today.getMinutes();
```

Get seconds:
```
val = today.getSeconds();
```

Get milliseconds:
```
val = today.getMilliseconds();
```

Get timestamp, the time that has passed since Jan 1st 1970:
```
val = today.getTime();
```

## Set

```
birthday = new Date('September 10 1987')
birthday = new Date('2/10/1981')

val = birthday;        // Logs Sat Sep 19 1987 00:00:00 GMT-0700 PST
val = birthtime;       // Logs Sat Sep 19 1987 11:25:00 GMT-0700 PST

birthday.setMonth(1);          // Sets birthday month to Feb
birthday.setDate(12);
birthday.setFullYear(1987);   // Sets year to 1987
birthday.setHours(3);         // Sets clock 03:00:00
birthday.setMinutes(30);      // Sets clock 03:30:00
birthday.setSeconds(15);      // Sets clock 03:30:15

console.log(birthday); //setMonth() & setDate() & setFullYear examples
```

## More Details on Date Object on MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date