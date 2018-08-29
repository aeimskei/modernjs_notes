// ======================================
// Define UI Variables
// ======================================

// get <form>
const form = document.querySelector('#task-form');
// get <ul>
const taskList = document.querySelector('.collection');
// get clear button
const clearButton = document.querySelector('.clear-tasks');
// get filter
const filter = document.querySelector('#filter');
// get input field
const taskInput = document.querySelector('#task');

// ======================================
// Function to Submit on Form
// ======================================

/*
Instead of putting it in the global scope, call a function to load all event listeners with ```init```.

Take the ```form``` variable we created and add an event listener with event type of submit as the first parameter, and for the second parameter, call the function ```addTask```, which we'll create as another function as our event handler to add new tasks.
*/

// Load all event listeners
init();

// Function for load all event listeners
function init() {
  // Add task even
  form.addEventListener('submit', addTask);
}

/*
Our ```addTask``` function will take in one parameter of ```e``` to handle our event. Also add in ```e.preventDefault()``` to stop the default behavior which is a form submit.

Inside, create a condition to check if there is a value in the input field. If ```taskInput``` is equal to nothing, then, we'll alert the user to input something.
*/

// // Function for Add Task
// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('Please add a task');
//   }

//   e.preventDefault();
// }

/*
Now, when we add a task, we want to be able to make an ```<li>``` element. First, create a variable ```const li = document.createElement('li');``` and then add a class to it. Next, ```createTextNode``` and ```appendChild``` to the li variable. Inside ```createTextNode()``` add whatever you want to pass into the input to be the text node, we want the value of ```taskInput```.
*/

// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('Please add a task');
//   }

//   // create list-item
//   const li = document.createElement('li');

//   // add class
//   li.className = 'collection-item'; // refering to Materialize's className

//   // create text node and append to the li
//   li.appendChild(document.createTextNode(taskInput.value))


//   e.preventDefault();
// }

/*
Next, create a new link element for the ```x``` icon link to delete the task. First, create ```const link = document.createElement('a');``` and then add a class to that with ```link.className = 'delete-item secondary-content';```. In Materialize, if you want something to the right, use ```secondary-content``` for class. Then add the icon HTML ```link.innerHTML = '<i class="fa fa-remove"></i>';``` and then append the link to the li with ```li.appendChild(link);```
*/

// function addTask(e) {
//   // check if input field is empty
//   if (taskInput.value === '') {
//     alert('Please add a task');
//   }

//   // create new li for input value
//   const li = document.createElement('li');
//   li.className = 'collection-item'; // refering to Materialize's className
//   li.appendChild(document.createTextNode(taskInput.value))

//   // create new link element
//   const link = document.createElement('a');

//   // add class
//   link.className = 'delete-item secondary-content'; // refering to Materialize's className

//   // add icon html
//   link.innerHTML = '<i class="fa fa-remove"></i>';

//   // append the link variable to li
//   li.appendChild(link);

//   // test
//   console.log(li);

//   e.preventDefault();
// }

/*
Finally, add li to ul, the <ul> is on the actual HTML we created earlier.
*/

function addTask(e) {
  // check if input field is empty
  if (taskInput.value === '') {
    alert('Please add a task');
  }

  // create new li for input value
  const li = document.createElement('li');
  li.className = 'collection-item'; // refering to Materialize's
  li.appendChild(document.createTextNode(taskInput.value))

  // create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content'; // refering to Materialize's
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}