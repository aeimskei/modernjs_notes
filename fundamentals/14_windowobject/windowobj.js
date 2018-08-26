// ========================================
// Window  Object Methods
// ========================================

// window.console.log(123);        // You can type like this, but you don't need to
// console.log(123);               // Does the same bc at top of object already

// Alert
/*
Is the little box that pops up with an alert.
*/
// window.alert('Hello World!');      // Again, you can write window, but no need
// alert('Hello World!');

// Prompt
/*
Is similar to alert() but it takes an input.
*/
// const input = prompt();
// alert(input);

// Confirm
/*
This is used often when the user is deleting something - to make sure that they're sure they want to do whatever that is they're doing. ```confirm()``` takes the parameter of a message.
*/
// if (confirm('Are you sure?')) {
//   console.log('YES');                     // If Ok is clicked
// } else {
//   console.log('NO');                      // If Cancel is clicked
// }

/*
These aren't the best looking things, but you can used these methods as like a error message for form validation - it's probably better if you just use the DOM and output a nice looking message alert. 
*/

// ========================================
// Window Object Properties
// ========================================

// Get height and width of window
/*
You might need this for some kind of interactive application.
*/

let val;

// Outer height and width
/*
Outer is the outer edges of the window.
*/
val = window.outerHeight;         // Logs the number will change when resize
val = window.outerWidth;          // Logs the number will change when resize

// Inner height and width
/*
For example, if you have a scrollbar, it'll be inside the scrollbar.
*/
val = window.innerHeight;         // Logs the number will change when resize
val = window.innerWidth;          // Logs the number will change when resize

// Scroll points
/*
This is if you want to figure out of where you're at in scrolling. These are good for those sites where you scroll down and you have those animations happen as you're scrolling down, that way you know what point you're at and when to show the animation.
*/

/*
In the HTML temporarily to get scrollbar points, <div style="margin-top:1000px;"></div>
*/
val = window.scrollY;        // Logs 0 bc no-scrollbar, this is vertical axis
val = window.scrollX;        // Logs 0 bc no-scrollbar, this is horizontal axis


// ========================================
// Window - Location and History Object
// ========================================

// Location Object
/*
If you click on the little arrow to the right, it'll drop down and you can see what this ```location object``` has. It has things like the ```host``` which in this case is the loopback address and the port, the ```hostname``` which is just the address, you can get just the ```port```, you can get the ```pathname``` which is just the ```/```, you can get the ```href``` the ```origin```, a lot of these things. There's also methods like ```reload()``` and ```replace()```, you can redirect with the ```location object```, you can get query string with ```search```, so there's quite a bit.

Let's log these to see what we can use.
*/

// Location Object
val = window.location;
val = window.location.hostname;           // Logs 127.0.0.1
val = window.location.port;               // Logs 5500
val = window.location.href;               // Logs https://whatever.com
val = window.location.search;             // in browser bar, add ?id=1 to log

// Redirect page
// window.location.href = 'http://google.com';    // This will set the href

// Reload page
/*
You should use reload inside a function, not the global scope, else it's just going to keep reloading your page.
*/
// window.location.reload();                      // It's gonna keep reloading


// History Object
/*
You can get your browsing history.
*/

// window.history.go(-1);        // Will take you back wherever you came from

/*
You can checkout the history length.
*/
// val = window.history.length;     // Logs out how many sites we visited earlier

// Navigator Object
val = window.navigator;                // Logs Navigator object
val = window.navigator.appName;        // Logs Netscape
val = window.navigator.appVersion;     // Logs extract version of browser
val = window.navigator.userAgent;      // Logs similar to appVersion
val = window.navigator.platform;       // Logs MacIntel if Mac
val = window.navigator.vendor;         // Logs Google Inc.
val = window.navigator.language;       // Logs en-US

console.log(val);