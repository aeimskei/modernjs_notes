// =================== Constructor Function ===================

function EventObserver() {
  this.observers = [];
}

// ======================== Prototypes ========================

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    // loop through the oberservers
    this.observers.forEach(function(item) {
      // call the function
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

