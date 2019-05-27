# JavaScript Module Pattern Project - Meal and Calorie Tracker Project

A simple single page app in terms of functionality. Building this project in pure JavaScript and Module Pattern. No libraries, no jQueries, no framework, no build tools. We'll be using **ES6 features** like template literals and template strings, let and const, forEach(), modern JavaScript to build this application. Use Materialize CSS for the UI, that's it.

* Use JavaScript Module Pattern
* Use Local Storage to persist the data

Use a few different Module Controllers

* Storage Controller for Local Storage (the last thing to do)
* Item Controller to handle the actual data, the state
* UI Controller to handle the UI (for showing and hidding things, getting input values)
* Main App Controller, the initializer

How it works

* You can add an item for meal and calories
* When item is added, it gets added to a list and total calories
* When you reload, data stays bc it's persisted to the Local Storage
* You can update the item as well, it'll change the state to an edit (update, delete and back buttons)
* A button to clear all

## Build UI

* Materialize CSS CDN
* Font Awesome CDN

### Navbar

<kbd>![alt text](img/screen00.png "screenshot")</kbd>
<kbd>![alt text](img/html00.png "screenshot")</kbd>

### Meal Form

<kbd>![alt text](img/screen01.png "screenshot")</kbd>
<kbd>![alt text](img/html01.png "screenshot")</kbd>

### Buttons for Meal Form (Add/Update/Delete/Back)

<kbd>![alt text](img/screen02.png "screenshot")</kbd>
<kbd>![alt text](img/html02.png "screenshot")</kbd>

We're going to comment ount the **update and delete buttons** because we're going to have JavaScript generate it later.

<kbd>![alt text](img/ui00.png "screenshot")</kbd>

### Total Calories Count

Should still be in the div container with the rest.

```
<h3 class="center-align">Total Calories: <span class="total-calories">0</span></h3>
```

### Meal / Item List

Will also still be in the div container. Start off with a `<ul>` and give it and id and class. First hardcode them into the html file, but we'll have JavaScript generate it later. Just get the markup laid out, so we know what we have to insert.

```
<ul id="item-list" class="collection">
  <li class="collection-item" id="item-0"></li>
</ul>
```

For the `<li>` we need to give it an `id`, each item will have it's own `id` incremented as added.

<kbd>![alt text](img/screen03.png "screenshot")</kbd>
<kbd>![alt text](img/html03.png "screenshot")</kbd>

We'll comment out the `<li>`, these are just hardcoded as templates. We'll have JavaScript generate it later.

## JavaScript File - Module Controllers

We'll start with the **Item Controller**. Remember it works with **iffy** by declaring a varibiable and then `()()` with invoking a function.

<kbd>![alt text](img/controllers00.png "screenshot")</kbd>

### Item Controller - When Adding Item 

We need a constructor so that we can create an item and then add it to the **state** or the data structure. We'll do that in the `ItemCtrl`.

* Each time an item is added, it needs to have its own unique id. Think of a React/Angular application, it's similar.

* `items` is going to be an array of object.

* In the data structure, `currentItem` is set to `null` this is if there is an existing meal already and you need to update that one.

Remember that in the Module Pattern, the information or data inside the controller functions are private. So, we have to put in a return.

```
const ItemCtrl = (function() {
  // item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // create data structure / state
  const data = {
    // hard coded data to start with
    items: [
      {id: 0, name: 'Cookies', calories: 400},
      {id: 1, name: 'Cake', calories: 500},
      {id: 2, name: 'Apple', calories: 200}
    ],
    currentItem: null, 
    totalCalories: 0
  }
  
  // test out loggin hard coded data
  return {
    getData: function() {
      return data;
    }
  }
})();
```

<kbd>![alt text](img/getdata00.png "screenshot")</kbd>

Remember, `returns` with functions are public methods.

### App Controller - The Initializer for App

