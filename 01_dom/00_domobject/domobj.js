// ================================================
// The Document Object Properties
// ================================================

let val;

val = document;

/*
When working in the DOM, we can get different structures. For example, an ```<html>``` collection, which is kind of like an array, but kind of not, it's formated like an array with bracket ```[]``` and comma separated values, but you can't use, for instance, a ```forEach()``` loop on it, which is an Array Method. Then you have ```node list``` for example, which are also like arrays, but you can use ```forEach()``` loops on them.

If you want to get the entire collection from the HTML document:
*/

val = document.all;

/*
Just like an array, you can access certain indexes. So, if we want the first one of all, we'd put in ```[0]``` bc it's zero-based just like an array. 
*/

val = document.all[0]         // [1] will give head, [2] will give meta

/*
You do propeties as well.
*/

val = document.all.length;    // Logs 27

/*
You can also access specific tags alone.
*/

val = document.head;          // Logs <head>...</head>
val = document.body;          // Logs <body>...</body>
val = document.doctype;       // Logs <!doctype html>
val = document.domain;        // Logs 127.0.0.1 bc running local
val = document.URL;           // Logs 127.0.0.1... bc running local
val = document.characterSet;  // Logs UTF-8
val = document.contentType;   // Logs text/html

/*
You can select stuff without using selectors, you can do it, but not recommended. 
*/

val = document.forms;         // Logs HTMLCollection[form..]

/*
You can also access inside that ```<form>``` by adding an index number.
*/

val = document.forms[0];      // Logs <form id="task-form">

/*
You can also get stuff from that ```<form>``` like the id.
*/

val = document.forms[0].id;

/*
You can also get the method from that ```<form>```.
*/

val = document.forms[0].method;

/*
You can also get the action from that ```<form>```.
*/

val = document.forms[0].action;

/*
You can also do this with links.         
*/

val = document.links;                   // Logs collection of <a> links
val = document.links[0];                // To access certain links
val = document.links[0].className;      // Logs string of all the classes
val = document.links[0].classList;      // Logs collections of DOM token list
val = document.links[0].classList[0];   // To be specific

/*
More that you can do:
*/

val = document.images;
val = document.scripts;
val = document.scripts[0].getAttribute('src');  // Logs domobj.js

/*
Another thing, with HTML collections, if you want to turn them into an array, which will allow you to use ```forEach()```, which you can't use by default with HTML Collection, you can actually do something about it. First convert it to an array. 
*/

// let scripts = document.scripts;

// // conversion example
// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function(script) {
//   console.log(script);
// })

/*
Let's try using the ```getAttribute()```
*/

let scripts = document.scripts;

// conversion example
let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script) {
  console.log(script.getAttribute('src'));  // Logs each source attribute
})


console.log(val);