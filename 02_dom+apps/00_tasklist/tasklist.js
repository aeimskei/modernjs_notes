// ======================================
// Define UI Variables
// ======================================

// // get <form>
// const form = document.querySelector('#task-form');
// // get <ul>
// const taskList = document.querySelector('.collection');
// // get clear button
// const clearButton = document.querySelector('.clear-tasks');
// // get filter
// const filter = document.querySelector('#filter');
// // get input field
// const taskInput = document.querySelector('#task');

// ======================================
// Add Task Function to Submit on Form
// ======================================

/*
Instead of putting it in the global scope, call a function to load all event listeners with ```init```.

Take the ```form``` variable we created and add an event listener with event type of submit as the first parameter, and for the second parameter, call the function ```addTask```, which we'll create as another function as our event handler to add new tasks.
*/

// // Load all event listeners
// init();

// // Function for load all event listeners
// function init() {
//   // Add task event
//   form.addEventListener('submit', addTask);
// }

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

// function addTask(e) {
//   // check if input field is empty
//   if (taskInput.value === '') {
//     alert('Please add a task');
//   }

//   // create new li for input value
//   const li = document.createElement('li');
//   li.className = 'collection-item'; // refering to Materialize's
//   li.appendChild(document.createTextNode(taskInput.value))

//   // create new link element
//   const link = document.createElement('a');
//   link.className = 'delete-item secondary-content'; // refering to Materialize's
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   li.appendChild(link);

//   // append li to ul
//   taskList.appendChild(li);

//   // clear input
//   taskInput.value = '';

//   e.preventDefault();
// }


// ======================================
// Delete Task Function
// ======================================
/*
We need another event listener, each of the ```x``` icon has a class of ```delete-item``` and since there are mulitple of them and also dynamic, we need to use Event Delegation here. So that means, put the even listener on to the Task List itself, the ```<ul>```.

Go into the ```init()``` function for the load event listeners and create that'll listen for a ```click``` and call ```removeTask``` we'll create that function later.
*/

// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearButton = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // INITIALIZE
// init();

// // FUNCTION TO LOAD EVENT LISTENERS
// function init() {
//   // Add task event
//   form.addEventListener('submit', addTask);
//   // Remove task event
//   taskList.addEventListener('click', removeTask);
// }

// // FUNCTION TO ADD TASK
// function addTask(e) {
//   // check if input field is empty
//   if (taskInput.value === '') {
//     alert('Please add a task');
//   }

//   // create new li for input value
//   const li = document.createElement('li');
//   li.className = 'collection-item'; // refering to Materialize's
//   li.appendChild(document.createTextNode(taskInput.value))

//   // create new link element
//   const link = document.createElement('a');
//   link.className = 'delete-item secondary-content'; // refering to Materialize's
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   li.appendChild(link);

//   // append li to ul
//   taskList.appendChild(li);

//   // clear input
//   taskInput.value = '';

//   e.preventDefault();
// }

/*
This function ```removeTask``` is going to take an event parameter ```e``` and then remember, we need to target the ```x``` icon. So, we need to check and create a condition for that particular target. Use ```e.target.parentElement.classList.contains``` to get the ```<a>``` link.

Remember, we want the whole ```<li>``` to remove when the target element is clicked on. Right now the setup is, when you click on the target element, it logs ```<i>...</i>``` icon level, but we want to remove up to two levels of parent element, the ```<a>``` and then ```<li>```.

We can also add confirmation to check if the user really wants to remove the task.
*/

// FUNCTION TO REMOVE TASK

// function removeTask(e) {
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     // console.log(e.target);   // Test, logs <i>..</i>
//     if (confirm('Are you sure you want to remove task?')) {
//       e.target.parentElement.parentElement.remove();
//     }
//   }
// }


// ======================================
// CLEAR Task Button Function
// ======================================
/*
Create another event listener for the button to clear task list ```clearBtn.addEventListner('click', clearTasks);``` in the ```init()``` function.

In ```clearTask``` function, there's actually two different ways of approaching this. First, you can do ```taskList.innerHTML = '';``` and another way is to loop through with a ```while(){}``` loop and then remove each one, and the while loop way is actually faster to process (visit, https://jsperf.com/innerhtml-vs-removechild/47)

The while-loop, while there is a first child in the task list, ```taskList.firstChild``` meaning that there's still something in the list, then we want to ```taskList.removeChild(taskList.firstChild)```
*/

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// INITIALIZE
init();

// ======================================
// FUNCTION TO LOAD EVENT LISTENERS
// ======================================
function init() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearButton.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// ======================================
// FUNCTION TO ADD TASK
// ======================================
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

  // store to Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}

// ======================================
// STORE IN Local Storage
// ======================================
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ======================================
// FUNCTION TO REMOVE TASK
// ======================================
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target);   // Test, logs <i>..</i>
    if (confirm('Are you sure you want to remove task?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// ======================================
// FUNCTION TO CLEAR TASK
// ======================================
function clearTasks() {
  // taskList.innerHTML = '';

  // while loop is faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// ======================================
// FILTER Through the Tasks
// ======================================
function filterTasks(e) {
  // get the input field value
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
    // console.log(item);  // test
  });

  // console.log(text); // test, it'll log input on keyup
}