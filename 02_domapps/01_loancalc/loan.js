// Listen for Submit
const loanForm = document.querySelector('#loan-form');

// Add Event Listeners
loanForm.addEventListener('submit', calculateResults);


// Function to calculateResults()
function calculateResults(e) {
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
  const calcPayments = parseFloat(years.value);

  e.preventDefault();
}