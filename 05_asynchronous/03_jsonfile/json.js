// set variables to grab from html
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

// add event listeners
button1.addEventListener('click', loadCustomer);
button2.addEventListener('click', loadCustomers);

// ==========================================
// customer.json
// ==========================================

// helper function to load cusmtomer data
function loadCustomer(e) {
  // set and create xhr request
  const xhr = new XMLHttpRequest();

  // call open method
  xhr.open('GET', 'customer.json', true);

  // call onload method
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log('STATUS: ', this.responseText); // test log

      // ============================
      // Display Customer on UI
      // ============================

      // need to parse the data
      const data1 = JSON.parse(this.responseText);
      // console.log(data1); // test log result of parsed data

      // create an output template to the UI
      output = `
        <ul class="alignment">
          <li>ID: ${data1.id}</li> 
          <li>Name: ${data1.name}</li> 
          <li>Company: ${data1.company}</li>
          <li>Phone: ${data1.phone}</li>
        </ul>
      `;


    // grab id from html
    const customer = document.querySelector('#customer');

    // display on ui
    customer.innerHTML = output;

    }
  }

  // run xhr
  xhr.send();
}

// ==========================================
// customers.json
// ==========================================

// helper function to load cusmtomer data
function loadCustomers(e) {
  // set and create xhr request
  const xhr = new XMLHttpRequest();

  // call open method
  xhr.open('GET', 'customers.json', true);

  // call onload method
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log('STATUS: ', this.responseText); // test log

      // ============================
      // Display Customer on UI
      // ============================

      // need to parse the data
      const data1 = JSON.parse(this.responseText);
      // console.log(data1); // test log result of parsed data

      // instantiate output, it'll be reassigned inside the loop
      let output = '';

      // bc it's an array, we need to loop through the data
      data1.forEach(function(data) {
        // create an output template to the UI, use += to append
        output += `
          <ul class="alignment">
            <li>ID: ${data.id}</li> 
            <li>Name: ${data.name}</li> 
            <li>Company: ${data.company}</li>
            <li>Phone: ${data.phone}</li>
          </ul>
        `;
      });

    // grab id from html
    const customers = document.querySelector('#customers');

    // display on ui
    customers.innerHTML = output;
    }
  }

  // run xhr
  xhr.send();
}