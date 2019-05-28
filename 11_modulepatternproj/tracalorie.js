// ====================== item controller ======================

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
      // {id: 0, name: 'Cookies', calories: 400},
      // {id: 1, name: 'Cake', calories: 500},
      // {id: 2, name: 'Apple', calories: 200}
    ],
    currentItem: null, 
    totalCalories: 0
  }
  
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
    getItemById: function(id) {
      // create temporary variable calle found
      let found = null;
      // loop through items
      data.items.forEach(function(item) {
        // match the ids
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories) {
      // turn calories to number
      calories = parseInt(calories);
      let foun = null;
      // loop through items
      data.items.forEach(function(item) {
        // if selected item id is the same one found in state's data
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id) {
      // get ids
      const ids = data.items.map(function(item) {
        return item.id;
      });
      // get the index
      const index = ids.indexOf(id);
      // splice it out of array, remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function() {
      data.items = [];
    },
    setCurrentItem: function(item) {
      data.currentItem = item;
    },
    getCurrentItem: function() {
      return data.currentItem;
    },
    getTotalCalories: function() {
      let total = 0;
      // loop through items and add calories
      data.items.forEach(function(item) {
        total += item.calories;
        // above is same as total = total + item.calories;
      });

      // set
      data.totalCalories = total;

      return data.totalCalories;
    },
    getData: function() {
      return data;
    }
  }
})();

// ====================== ui controller ======================

const UICtrl = (function() {

  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
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
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item) {
      // show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // create <li> element
      const li = document.createElement('li');
      // add class
      li.className = 'collection-item';
      // add ID (it's going to be dynamic)
      li.id = `item-${item.id}`;
      // add html (we just need what's inside li)
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      // insert the item before the end
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    updateListItem: function(item) {
      // get list items from DOM to get a node list
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // convert node list to array
      listItems = Array.from(listItems);
      // loop through listItems
      listItems.forEach(function(listItem) {
        // we want to get the id from item with getAttribute
        const itemID = listItem.getAttribute('id');
        // if match, then we want to update
        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          `;
        }
      });
    },
    deleteListItem: function(id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearFieldInputs: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function() {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      // show edit state
      UICtrl.showEditState();
    },
    removeItems: function() {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // turn node list into array
      listItems = Array.from(listItems);
      // iterate
      listItems.forEach(function(item) {
        item.remove();
      });
    },
    hideUlLineList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function() {
      UICtrl.clearFieldInputs();
      // hide edit, delete and back buttons
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();

// ====================== app controller ======================
// This is the main controller, so insert the other controllers
// into the function and pass it where it's invoked.

const AppCtrl = (function(ItemCtrl, UICtrl) {

  // handle all events
  const loadEventListeners = function() {
    // get ui selectors
    const UISelectors = UICtrl.getSelectors();

    // add 'item' event, the button
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // disable the submit on enter key
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    // edit icon button click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    // delete button click event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

    // back button click event
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

    // clear button click event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  }

  // add item submit function
  const itemAddSubmit = function(e) {
    // console.log('Adding item test'); // test

    // get form input from UICtrl
    const input = UICtrl.getItemInput();
    // console.log(input); // test grab input value

    // get total calories through ItemCtrl
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    // check handle if no value in input
    if (input.name !== '' && input.calories !== '') {
      // console.log(123); // test
      // add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // add newItem to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // clear field inputs in UI
      UICtrl.clearFieldInputs();
    }

    // prevent default behavior
    e.preventDefault();
  }

  // click edit item
  const itemEditClick = function(e) {
    if (e.target.classList.contains('edit-item')) {
      // console.log('clicked on the class edit-item'); // test edit icon

      // get listItem ID from <li> the parent that has id
      const listId = e.target.parentNode.parentNode.id;
      // console.log(listId); // test prints item-0

      // we need to just get the id, not the whole item-0
      // break into an array, split at the dash
      const listIdArr = listId.split('-');
      // console.log(listIdArr); // test prints ["item", "0"]
      // get only the id, not first index with "item"
      const id = parseInt(listIdArr[1]);
      // console.log(id); // test prints 0

      // get the entire object of item
      const itemToEdit = ItemCtrl.getItemById(id);
      // console.log(itemToEdit); // test prints the item object

      // set the current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }

  // update item submit
  const itemUpdateSubmit = function(e) {
    // console.log('testing update button'); // test

    // get item input
    const input = UICtrl.getItemInput();
    // update item
    const updateItem = ItemCtrl.updateItem(input.name, input.calories);
    // update the UI
    UICtrl.updateListItem(updateItem);

    // get total calories through ItemCtrl
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    // clear edit state
    UICtrl.clearEditState();

    e.preventDefault();
  }

  // delete button event
  const itemDeleteSubmit = function(e) {
    // console.log('testing delete button'); // test

    // get current item
    const currentItem = ItemCtrl.getCurrentItem();
    // delete from data structure
    ItemCtrl.deleteItem(currentItem.id);
    // delete form ui
    UICtrl.deleteListItem(currentItem.id);

    // get total calories through ItemCtrl
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    // clear edit state
    UICtrl.clearEditState();

    e.preventDefault();
  };

  // clear items event
  const clearAllItemsClick = function() {
    // delete all items from data structure
    ItemCtrl.clearAllItems();

    // get total calories through ItemCtrl
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    // remove from UI
    UICtrl.removeItems();

    // hide the <ul>
    UICtrl.hideUlLineList();
  }

  return {
    init: function() {
      // console.log('Initializing app...'); // test

      // clear edit state / set initial state
      UICtrl.clearEditState();

      // fetch items from state / data structure
      const items = ItemCtrl.getItems();
      // console.log('This is from AppCtrl =>', items); // test fetch

      // check if any items exist
      if (items.length === 0) {
        UICtrl.hideUlLineList();
      } else {
        // populate list with items with UICtrl
        UICtrl.populateItemList(items);
      }

      // load event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);

// initialize app
AppCtrl.init();