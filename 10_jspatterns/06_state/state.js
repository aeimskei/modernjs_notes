// ==================== Create a Page State ====================

const PageState = function() {
  // create a varible for current state
  // (this) pertains to PageState function
  let currentState = new homeState(this);

  // method to initialize the homeState
  this.init = function() {
    this.change(new homeState);
  }

  // method to make the change with 'state' passed in
  this.change = function(state) {
    // set currentState equal to state
    currentState = state;
  }
};

// ========================= Home State =========================

const homeState = function(page) {
  // handles the change to homepage heading
  // start at null bc we just want jumbotron for #heading
  document.querySelector('#heading').textContent = null;

  // html to homepage content to include jumbotron
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `;
};

// ========================= About State =========================

const aboutState = function(page) {
  // handles the change to the aboutpage heading
  document.querySelector('#heading').textContent = 'About Us';

  // html to aboutpage content
  document.querySelector('#content').innerHTML = `
    <p>This is the about page about us.</p>
  `;
}

// ======================== Contact State ========================

const contactState = function(page) {
  // handles the change to the contact page heading
  document.querySelector('#heading').textContent = 'Contact Us';

  // html to the contactpage content
  document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
}

// ======================== Instantiate ========================

// initialize pageState
const page = new PageState();

// initialize the first state
page.init();

//=========== Event Listeners on Click to Change State ==========

// ui variables
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// event listener for homepage
home.addEventListener('click', function(e) {
  page.change(new homeState);

  e.preventDefault();
});

// event listener for aboutpage
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// event listener for contactpage
contact.addEventListener('click', function(e) {
  page.change(new contactState);

  e.preventDefault();
})