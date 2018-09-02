// Listen for Submit
const loanForm = document.querySelector('#loan-form');

// Add Event Listeners
// loanForm.addEventListener('submit', calculateResults);
loanForm.addEventListener('submit', function(e) {
  // hide results
  document.querySelector('#results').style.display = 'none';

  // show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});


// Function to calculateResults()
function calculateResults() {
  console.log('Calculating...'); // test if function works

  // UI variables
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  // Do the calculations
  const principal = parseFloat(amount.value);
  const calcInterest = parseFloat(interest.value) / 100 / 12;
  const calcPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calcInterest, calcPayments);
  const monthly = (principal * x * calcInterest) / (x - 1);

  // Validate if monthly payment is finite
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calcPayments).toFixed(2);
    totalInterest.value = ((monthly * calcPayments) - principal).toFixed(2);

    // show results
    document.querySelector('#results').style.display = 'block';
    // hide loading
    document.querySelector('#loading').style.display = 'none';
  } else {
    // console.log('Error, please check your numbers.');
    showError('Please check your numbers');
  } 
}

// Show Error - create new element
function showError(error) {
  // show results
  document.querySelector('#results').style.display = 'none';

  // hide loading
  document.querySelector('#loading').style.display = 'none';

  // create a div
  const errorDiv = document.createElement('div');

  // grab two elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add class
  errorDiv.className = 'alert alert-danger';

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // clear error after three seconds
  setTimeout(clearError, 3000);
}

// Clear Error Function
function clearError() {
  document.querySelector('.alert').remove();
}