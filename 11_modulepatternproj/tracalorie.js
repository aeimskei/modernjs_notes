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
    getData: function() {
      return data;
    }
  }
})();

// ====================== ui controller ======================

const UICtrl = (function() {

  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
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
  }

  // add item submit function
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

  return {
    init: function() {
      // console.log('Initializing app...'); // test

      // fetch items from state / data structure
      const items = ItemCtrl.getItems();
      // console.log('This is from AppCtrl =>', items); // test fetch

      // populate list with items with UICtrl
      UICtrl.populateItemList(items);

      // load event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);

// initialize app
AppCtrl.init();