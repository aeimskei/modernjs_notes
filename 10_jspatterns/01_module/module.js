// ================ module pattern - basic structure ================

// (function() {
//   // declare private var and functions

//   return {
//     // declare public var and functions
//   }
// })();

// ================ module pattern - ui controller ================

// const UIController = (function() {
//   // private var and functions
//   let text = 'Hello World';

//   // private var and functions
//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   // this part will be public, creates access
//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UIController.callChangeText();

// ================ revealing module pattern ================

const ItemController = (function() {
  // our state
  let _data = [];

  // private function
  function add(item) {
    _data.push(item);
    console.log('Item added...');
  }

  // private function
  function get(id) {
    return _data.find(item => {
      return item.id === id;
    })
  }

  // this part will be public, creates access
  return {
    add: add,
    get: get
  }
})();

ItemController.add({id: 1, name: 'John'});
console.log(ItemController.get(1));

