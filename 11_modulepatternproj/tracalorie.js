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
    getData: function() {
      return data;
    }
  }
})();

// ====================== ui controller ======================

const UICtrl = (function() {

  return {

  }

})();

// ====================== app controller ======================
// This is the main controller, so insert the other controllers
// into the function and pass it where it's invoked.

const AppCtrl = (function(ItemCtrl, UICtrl) {

  return {
    init: function() {
      console.log('Initializing app...');
    }
  }

})(ItemCtrl, UICtrl);

// initialize app
AppCtrl.init();