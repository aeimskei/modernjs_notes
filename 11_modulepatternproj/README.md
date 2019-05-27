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

Remember, `returns` with functions are **public methods**.

### App Controller - The Initializer for App

This is the main controller, so insert the other controllers into the function and pass it where it's invoked.

```
const AppCtrl = (function(ItemCtrl, UICtrl) {

  return {
    init: function() {
      console.log('Initializing app...');
    }
  }

})(ItemCtrl, UICtrl);

// initialize app
AppCtrl.init();
```

### Get or Fetch Data in `ItemCtrl`

Next, we want to be able to **fetch** the hard coded state / data items and display them on our application. Currently there's no list of meals and calories or total of calories.

* These are ultimately going to come from Local Storage, which we'll work on later, but for now, we're going to to grab the data from our items data structure / state that was hard coded.

* All we're doing is returning `data.items` in the public method inside `ItemCtrl`.

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
  
  return {
    getItems: function() {
      return data.items;
    },
    getData: function() {
      return data;
    }
  }
})();
```

<kbd>![alt text](img/getitems00.png "screenshot")</kbd>

Then we need to go down to the `AppCtrl` and inside the public method in `return` and inside `init`, we want to call that. We're also going to put the result of that into a variable.

```
const AppCtrl = (function(ItemCtrl, UICtrl) {

  return {
    init: function() {
      console.log('Initializing app...');
      const items = ItemCtrl.getItems();

      console.log('This is from AppCtrl =>', items);
    }
  }

})(ItemCtrl, UICtrl);

// initialize app
AppCtrl.init();
```

<kbd>![alt text](img/getitems01.png "screenshot")</kbd>

### Populate List with `UICtrl` inside AppCtrl

We need to create `populateItemList` public method function, it'll take in `items` and we'll have to iterate through items, make each into a list item.

* We'll define a variable called `html` and initialize it to nothing in the beginning.

* Next, we'll loop through them with a `forEach()` method attached to `items` and then pass in `item`. We'll append it to `html` variable and use **template strings** so that we can put variables right inside of it.

Each time the data is looped through, an `<li>` will be added to the `html` variable with the template we created.

* Now, we need to take all the `<li>` and add it to the `<ul>`.

<kbd>![alt text](img/uictrl00.png "screenshot")</kbd>
<kbd>![alt text](img/uictrl01.png "screenshot")</kbd>

Now you can see that the data is **dynamically** being added to the UI :) 

<kbd>![alt text](img/uictrl02.png "screenshot")</kbd>

With `#item-list` in `<ul>`, it can be changed at anytime, and we don't want to go all around our JavaScript to change it each individual one. So instead, we'll create an **object** called `UISelectors` and any class or id that we're going to use inside a **querySelector**, we'll put it in the Object.

<kbd>![alt text](img/uiselectors00.png "screenshot")</kbd>

This makes our code more efficient and more scalable.

### Add Item to Data Structure / State

Earlier, we made functions so that we can fetch our items from the `ItemCtrl` and then we can use the `UICtrl` to insert them into the User Interface.

Now, we want to work on being able to add a **meal** item with **calories**. That's going to happen through an **Event**.

* Go down to the main `AppCtlr` and create a function expression called `loadEventListeners` to deal with our **Events**.

When we call an **event**, we're going to need to do some **selecting** like querySelector('blah'), we did it earlier. We can call the `UISelectors` that we created earlier. But because it's currently a private method, the `UISelector`, we need to create a return to make it a public method so we can use it in `loadEventListeners`.

```
const UICtrl = (function() {

  const UISelectors = {
    itemList: '#item-list'
  };

  return {
    populateItemList: function(items) {
      // iterate through items, make each into a list item
      let html = '';

      items.forEach(function(item) {
        // reference the <li> in html file
        html += `
          <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
          </li>
        `;
      });

      // insert list items of <li> into <ul>
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();
```

Now, we can use it in `AppCtrl`:

```
const AppCtrl = (function(ItemCtrl, UICtrl) {

  // handle all events
  const loadEventListeners = function() {
    // get ui selectors
    const UISelectors = UICtrl.getSelectors();
  }

  return {
    init: function() {
      console.log('Initializing app...');

      // fetch items from state / data structure
      const items = ItemCtrl.getItems();
      console.log('This is from AppCtrl =>', items); // test fetch

      // populate list with items with UICtrl
      UICtrl.populateItemList(items);
    }
  }

})(ItemCtrl, UICtrl);

// initialize app
AppCtrl.init();
```

Next, we're going to need an **event** to add an item to. Grab the `.add-btn` class from html.

```
const UICtrl = (function() {

  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn'
  };
```

The **event listner** in `AppCtrl`:

```
const AppCtrl = (function(ItemCtrl, UICtrl) {

  // handle all events
  const loadEventListeners = function() {
    // get ui selectors
    const UISelectors = UICtrl.getSelectors();

    // add 'item' event, the button
    document.querySelector('UISelector.addBtn').addEventListener('click', itemAddSubmit);
  }
```

Then, we need to create the logic for `itemAddSubmit`:

<kbd>![alt text](img/elisteners00.png "screenshot")</kbd>

### Create Alert for Form Input

We tested via printing it out on the console, now we want to when we submit an item, is to first make sure that there's even an input there. Create an alerts for the user.

Grab selectors for `item-name` and `item-calories` and add to UISelectors:
```
const UICtrl = (function() {

  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: 'item-calories'
  };
```

In the public return method in the `UICtrl`, create `getItemInput` return function. Do `document.querySelector()` and also remember to add `value` bc that's what we need.

```
getItemInput: function() {
  return {
    name: document.querySelector(UISelectors.itemNameInput).value,
    calories: document.querySelector(UISelectors.itemCaloriesInput).value
  }
},
```

In `AppCtrl`:

```
// add item submit function
const itemAddSubmit = function(e) {
  // console.log('Adding item test'); // test

  // get form input from UICtrl
  const input = UICtrl.getItemInput();
  console.log(input); // test grab input value

  // prevent default behavior
  e.preventDefault();
}
```

<kbd>![alt text](img/elisteners01.png "screenshot")</kbd>

Handle a check if input is empty in `AppCtrl`:

```
const itemAddSubmit = function(e) {
  // console.log('Adding item test'); // test

  // get form input from UICtrl
  const input = UICtrl.getItemInput();
  // console.log(input); // test grab input value

  // check handle if no value in input
  if (input.name !== '' && input.calories !== '') {
    // console.log(123); // test
    // add item
    const newItem = ItemCtrl.addItem(input.name, input.calories);
  }

  // prevent default behavior
  e.preventDefault();
}
```

Then in `ItemCtrl`:

```
return {
  getItems: function() {
    return data.items;
  },
  addItem: function(name, calories) {
    // console.log(name, calories); // test 
  },
  getData: function() {
    return data;
  }
}
```

### Need to Generate an `id` for each item

We're going to take the `items` and try to make it kind of like an **auto-increment** for this example. Like if we're currently at `id=3` the next item input will be `id=4`. We also want to take the `calories` and **parse** it into a number bc when the user initially puts in into the input form, it's a string.

We neeed to do a bit of logic here in `ItemCtrl`:

```
return {
  getItems: function() {
    return data.items;
  },
  addItem: function(name, calories) {
    // console.log(name, calories); // test 

    // create item 'id'
    let ID = 0;
    if (data.items.length > 0) {
      // index to be length minus 1, get 'id' then add 1 to it
      ID = data.items[data.items.length - 1].id + 1;
    } else {
      ID = 0;
    }

    // calories to number
    calories = parseInt(calories);
  },
```

Finally, we want to create a new `item`. We have an item constructor above, and when we want a new item, we have to say `new Item()` and then pass in the data.

```
return {
  getItems: function() {
    return data.items;
  },
  addItem: function(name, calories) {
    // console.log(name, calories); // test 

    // create item 'id'
    let ID = 0;
    if (data.items.length > 0) {
      // index to be length minus 1, get 'id' then add 1 to it
      ID = data.items[data.items.length - 1].id + 1;
    } else {
      ID = 0;
    }

    // calories to number
    calories = parseInt(calories);

    // create new Item
    newItem = new Item(ID, name, calories);
    // push it into the 'items' array of objects above
    data.items.push(newItem);

    return newItem;
  },
  ```

  We haven't connected the adding new item to state to the UI yet, but we can check with `getData: function() {...}` from `ItemCtrl` to see if adding a new item works.

<kbd>![alt text](img/elisteners02.png "screenshot")</kbd>

There you go, it works, the new data can be added to state.