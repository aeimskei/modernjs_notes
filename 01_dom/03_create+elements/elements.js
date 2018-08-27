// ====================================
// Create Elements
// ====================================

// create element
const li = document.createElement('li');  // Logs <li></li>

/*
Add class
*/
// li.className = 'collection-item';  // Logs <li class="collection-item"></li>

/*
Add id
*/
// li.id = 'new-item'; // Logs Logs <li id="new-item"></li>

/*
Add attribute
*/
// set to title as 'New Item'
// li.setAttribute('title', 'New Item'); // Logs <li title="New Item"></li>

/* 
Create text node and append
*/
// appendChil() means you want to put something in something
// use document.createTextNode() to make a text node
// li.appendChild(document.createTextNode('Hello there')); // Logs <li>Hello there</li>

/* 
Or you can use a variable to store
*/
// let newText = document.createTextNode('Hello there');
// li.appendChild(newText);

/*
Create new link element, will append child to ul below
*/
const link = document.createElement('a');

let newText = document.createTextNode('Hello there ');
li.appendChild(newText);

link.setAttribute('href', '#');

// add class to the link
link.className = 'delete-item';

// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link into <li>
li.appendChild(link);

// append <li> as child to <ul>
document.querySelector('ul.collection').appendChild(li);


console.log(li);