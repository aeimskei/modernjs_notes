// =================== ES6 Constructor Function ===================

class EventObserver {
  constructor() {
    this.observers = [];
  }

  // these functions to be methods of the class
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    // loop through the oberservers
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

// ================== Instantiate EventObserver ==================

const click = new EventObserver();

// ======================= Event Listeners =======================

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// ======================== Click Handler ========================

const getCurrentSeconds = function() {
  let date = new Date();
  let seconds = date.getSeconds();
  console.log(`Current seconds: ${seconds}`);
}

