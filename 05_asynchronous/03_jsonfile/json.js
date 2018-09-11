// set variables to grab from html
const button1 = document.querySelector('#button1');

// add event listeners
button1.addEventListener('click', loadCustomer);


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
      // Display on UI
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