//  ======================= User Constructor =======================

const User = function(name) {
  this.name = name;
  this.chatroom = null; // initially null, it'll get set in constructor
}

//  ========================= ES5 Prototype =========================
// You can use ES6 Classes, but this is Object Oriented code.
// This way is actually in the JavaScript; Classes are just syntactic sugar

User.prototype = {
  send: function(message, toUser) {
    // call from the chatroom (this pertains to user)
    this.chatroom.send(message, this, toUser);
  },
  recieve: function(message, fromUser) {
    console.log(`${fromUser.name} to ${this.name}: ${message}`);
  }
}

//  ===================== Chatroom Constructor =====================

// only has a property, nothing passed in the function
const Chatroom = function() {
  // initialize as empty object
  let users = {}; // list of users

  return {
    // we need users to register with the chatroom
    // bc colleagues need to register with the mediator
    register: function(user) {
      // set users to the user.name that's passed in
      users[user.name] = user;
      // set user's chatroom to current chatroom
      user.chatroom = this;
    },
    send: function(message, fromUser, toUser) {
      // decided if sent to one user or broadcast
      if (toUser) {
        // that is for a single user
        toUser.recieve(message, fromUser);
      } else {
        // broadcast and loop through all the users
        for (key in users) {
          if (users[key] !== fromUser) {
            users[key].recieve(message, fromUser);
          }
        }
      }
    }
  }
}

//  ===================== How to Use Our Pattern =====================

// Users
const mckenna = new User('McKenna');
const ly = new User('Ly');
const jean = new User('Jean');

// Chatroom Mediator
const chatroom = new Chatroom();

// Register the Users
chatroom.register(mckenna);
chatroom.register(ly);
chatroom.register(jean);

// Chat
mckenna.send('Hello there Ly!', ly);

