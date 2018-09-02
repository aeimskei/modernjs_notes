# Task List App

## Technology
* Vanilla JavaScript
* HTML, Materialize CSS
* Local Storage

## Setup UI

**Get these CDNs:**

* Materialize CSS
* jQuery
* Font Awesome

**Layout inside ```<body>```:**

```
<div class="container">
  <div class="row">
    <div class="col s12">
      <div id="main" class="card">
        <div class="card-content">
          <span class="card-title">Task List</span>
          <div class="row">
            <form id="task-form">
              <div class="input-field col s12">
                <input type="text" name="task" id="task">
                <label for="task">New Task</label>
              </div>
              <input type="submit" value="Add Task" class="btn">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
What it should look like:

<kbd>![alt text](img/layout00.png "screenshot")</kbd>

**Create another section**

Go under the ```<div class="card-content">``` create another div with <div class="card-action">. Add an ```<h5>``` and below that, we want to have a filter input, so when we have a list of tasks later, we should be able to filter through them. As in, as we type, it'll filter through the list of tasks.

This'll be just a dynamic input.

```
<div class="card-action">
  <h5 id="task-title">Tasks</h5>
  <div class="input-field col s12">
    <input type="text" name="filter" id="filter">
    <label for="filter">Filter Tasks</label>
  </div>
</div>
```

Underneath the ```<div class="input-field col s12">``` in ```<div class="card-action">``` make a ```<ul>``` and it'll be where our list-items will be put in dynamically. Then under that, a Clear Task List button as a link with ```<a>```

```
<div class="card-action">
  <h5 id="task-title">Tasks</h5>
  <div class="input-field col s12">
    <input type="text" name="filter" id="filter">
    <label for="filter">Filter Tasks</label>
  </div>
  <ul class="collection"></ul>
    <a href="#" class="clear-tasks btn black">Clear Task List</a>
</div>
```

<kbd>![alt text](img/layout01.png "screenshot")</kbd>


## Add Task Items

**Define UI Variables**

<kbd>![alt text](img/definevars.png "screenshot")</kbd>


Our ```addTask``` function will take in one parameter of ```e``` to handle our event. Also add in ```e.preventDefault()``` to stop the default behavior which is a form submit.

Inside, create a condition to check if there is a value in the input field. If ```taskInput``` is equal to nothing, then, we'll alert the user to input something.

**Function for Add Task**

```
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please add a task');
  }

  e.preventDefault();
}
```

Now, when we add a task, we want to be able to make an ```<li>``` element. First, create a variable ```const li = document.createElement('li');``` and then add a class to it. Next, ```createTextNode``` and ```appendChild``` to the li variable. Inside ```createTextNode()``` add whatever you want to pass into the input to be the text node, we want the value of ```taskInput```.

```
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please add a task');
  }

  // create list-item
  const li = document.createElement('li');

  // add class
  li.className = 'collection-item'; // refering to Materialize's className

  // create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value))


  e.preventDefault();
}
```

Next, create a new link element for the ```x``` icon link to delete the task. 
* First, create ```const link = document.createElement('a');```
* Then add a class to that with ```link.className = 'delete-item secondary-content';```In Materialize, if you want something to the right, use ```secondary-content``` for class. 
* After, add the icon HTML ```link.innerHTML = '<i class="fa fa-remove"></i>';```
* Next, append the link to the li with ```li.appendChild(link);```

```
function addTask(e) {
  // check if input field is empty
  if (taskInput.value === '') {
    alert('Please add a task');
  }

  // create new li for input value
  const li = document.createElement('li');
  li.className = 'collection-item'; // refering to Materialize's className
  li.appendChild(document.createTextNode(taskInput.value))

  // create new link element
  const link = document.createElement('a');

  // add class
  link.className = 'delete-item secondary-content'; // refering to Materialize's className

  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // append the link variable to li
  li.appendChild(link);

  // test
  console.log(li);

  e.preventDefault();
}
```

<kbd>![alt text](img/litask.png "screenshot")</kbd>

Finally, add li to ul, the <ul> is on the actual HTML we created earlier.

```
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
```

<kbd>![alt text](img/taskform.png "screenshot")</kbd>

## Delete Task

We need another event listener, each of the ```x``` icon has a class of ```delete-item``` and since there are mulitple of them and also dynamic, we need to use Event Delegation here. So that means, put the even listener on to the Task List itself, the ```<ul>```.

Go into the ```init()``` function for the load event listeners and create that'll listen for a ```click``` and call ```removeTask``` we'll create that function later.

```
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// INITIALIZE
init();

// FUNCTION TO LOAD EVENT LISTENERS
function init() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
}

// FUNCTION TO ADD TASK
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
```

**Remove Task Function**

This function ```removeTask``` is going to take an event parameter ```e``` and then remember, we need to target the ```x``` icon. So, we need to check and create a condition for that particular target. Use ```e.target.parentElement.classList.contains``` to get the ```<a>``` link.

Remember, we want the whole ```<li>``` to remove when the target element is clicked on. Right now the setup is, when you click on the target element, it logs ```<i>...</i>``` icon level, but we want to remove up to two levels of parent element, the ```<a>``` and then ```<li>```.

```
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target);   // Test, logs <i>..</i>
    e.target.parentElement.parentElement.remove();
  }
}
```

We can also add confirmation to check if the user really wants to remove the task.

```
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target);   // Test, logs <i>..</i>
    if (confirm('Are you sure you want to remove task?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
```

## Clear Task Button

The while-loop, while there is a first child in the task list, ```taskList.firstChild``` meaning that there's still something in the list, then we want to ```taskList.removeChild(taskList.firstChild)```

```
function clearTasks() {
  // taskList.innerHTML = '';

  // while loop is faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
```

## Filter Through Tasks

Add another event listener for filter, ```filter.addEventListener('keyup', filterTasks);``` inside the ```init()``` function, it's going to use the 'keyup' event type and call the filterTasks function.

```
// FUNCTION TO LOAD EVENT LISTENERS
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
```

First, get the value of whatever that's being typed in the input field. Turn it to lowercase so we can match correctly even if the user accidently has the caps-lock on.

Next, take all of the list items with ```document.querySelectorAll('.collection-item').forEach();``` and we can use ```forEach()``` bc ```querySelectorAll``` returns a ```NodeList```, but if we used ```getElementByClassName``` that would return an ```HTML Collection``` which we would have to convert to an array in order to use ```forEach()```. In the ```forEach()``` pass a function with ```task``` as a parameter for our iterator. Then, set a variable for ```item``` and set it to ```task.firstChild``` and then we want the ```textContent``` of that ```firstChild```. 

Afterwards, create a condition to check inside of ```document.querySelectorAll('.collection-item').forEach(function(task) {...}``` if ```item.toLowerCase()``` to make in not case-sensitive, and ```indexOf(text)``` and pass in the ```text``` that's the text that's being typed, we want to search in our list and pass it to ```indexOf()```, if there's no match, it's going to equal to ```-1``` so we want to say, if it's not equal to negative one ```!=``` then we want the task to show, set it to show with ```task.style.display = 'block';``` else hide it with 
```task.style.display = 'none';```

```
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
```

<kbd>![alt text](img/filter.png "screenshot")</kbd>

## Persist the Data to Local Storage

Now that the UI and functionality is done, let's use Local Storage to persist the data, so when we add a task, it actually stays.

Again, Local Storage is part of JavaScript, so we don't have to use any thrid party libraries, we can just go ahead an use it.

First, go to the ```addTask``` function, and after  this chunk of code in it,

```
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
```

add a code to store that ```addTask``` into Local Storage with ```storeTaskInLocalStorage();``` and we're going to have to add the ```task``` which comes from the value of ```taskInput.value``` like this, ```storeTaskInLocalStorage(taskInput.value);```

Next, below the ```addTask``` function, create the ```storeTaskInLocalStorage``` function that'll take in the task and then define and initialize a variable called ```tasks``` and then we want to check Local Storage to see if there's any task in there. 

If ```localStorage.getItem('tasks') === null``` that mean if there's nothing in there, set that ```let tasks;``` varibale to an empty array ```[]```. 

Else, set ```tasks``` to whatever that's in Local Storage. Remember, Local Storage can only store strings, so we're going to have to parse it as ```JSON.parse()``` and inside of that get Local Storage.

Then, we want to push ```task``` that was passed as a parameter into ```tasks``` array.

The last thing to do is set it back to Local Storage and remember to store it as a string, so store ```'tasks'``` and then store the variable ```tasks``` wrapped in a function called ```JSON.stringify``` so that you can actually store it.

```
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('task', JSON.stringify(tasks));
}
```

Next thing to do is show it in the UI, we need another function and also another event to load the function we call. In ```init()``` create a DOM load event. Add ```document.addEventListener('DOMContentLoaded', _);``` the ```DOMContentLoaded``` is an event that gets called when loaded and then call ```getTasks``` as the second parameter, a function that we'll need to create.

In the ```getTasks``` function, same steps in checking if there are tasks, but then we want to loop through the tasks that are there. Inside the ```forEach()``` we want to create the DOM element like what we did with ```addTask```.

<kbd>![alt text](img/tasksls.png "screenshot")</kbd>

Now the tasks persist, store in Local Storage and also persist on the UI.

<kbd>![alt text](img/persist.png "screenshot")</kbd>

## Delete Data Local Storage

Inside the ```removeTask()``` function, inside the if confirmation, call the function to remove task from local storage, will create later and pass in ```e.target.parentElement.parentElement``` its the actual element, which is the ```<li>```

First, what we want to do is check local storage, put it into a variable liek what we did with local storage earlier, and then loop through it. We want to check to see if the ```taskItem.textContent``` matches the current ```task``` in the iteration. If it does, then that's the one we want to delete. Use splice() method. Pass in ```index``` as teh second parameter for ```forEach()``` and in the splice method, pass in index and 1.

Then afterwards, below the ```forEach()```, we have to set Local Storage again.

```
function removeTaskFromLocalStorage(taskItem) {
  // console.log(taskItem);  // test, logs the <li>
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

## Clear Task List from Local Storage

The last thing we want to do is the Clear Tasks button. Create a function to clear tasks from Local Storage. Remember to call the new function the ```clearTasks()``` function. Just used ```localStorage.clear();```

```
// ==========================================
// FUNCTION TO CLEAR TASK
// ==========================================
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // call clear tasks from Local Storage
  clearTasksFromLocalStorage();
}

// ==========================================
// FUNCTION TO CLEAR TASK from Local Storage
// ==========================================
function clearTasksFromLocalStorage() {
  localStorage.clear();
}
```

## That's the wrap!

Now you have an application where we can create tasks, get persisted to Local Storage, so we can leave and come back and it'll still have the info, we can delete them, clear them and filter them. This projet gives you some insights on how to work with the DOM and work with Local Storage.