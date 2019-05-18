// ======================== Factory Pattern ========================
function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } 
    else if (type === 'standard') {
      member = new StandardMembership(name);
    }
    else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    // function that'll define name, membership type and cost
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

// ========================= Subclasses =========================

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$10';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$20';
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$30';
}

// ================== Array to Handle Creations ==================

const members = [];
const factory = new MemberFactory();

// to add members
members.push(factory.createMember('Kate', 'simple'))
members.push(factory.createMember('John', 'super'))
members.push(factory.createMember('Jim', 'standard'))
members.push(factory.createMember('McKenna', 'super'))
// console.log(members); // test

// iterate or loop through our members
members.forEach(function(member) {
  // call the 'define' method we created earlier
  // to print out the name
  member.define();
})

