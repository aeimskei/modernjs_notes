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
    getData: function() {
      return data;
    }
  }
})();

// ====================== ui controller ======================

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
    }
  }
})();

// ====================== app controller ======================
// This is the main controller, so insert the other controllers
// into the function and pass it where it's invoked.

const AppCtrl = (function(ItemCtrl, UICtrl) {

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