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

// Function for Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please add a task');
  }

  e.preventDefault();
}