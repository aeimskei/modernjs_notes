// form 'blur' event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// create function to validate name
function validateName() {
  const name = document.getElementById('name');
  const regex = /^[a-zA-Z]{2,10}$/; // made of letters and betwen 2-10 char

  // logic to evaluate
  // if the input is invalid
  if (!regex.test(name.value)) {
    // add the is-invalid class to the input field
    name.classList.add('is-invalid');
  } else {
    // make sure to remove the is-invalid class from input field
    name.classList.remove('is-invalid');
  }
}

// create function to validate zip
function validateZip() {
  const zip = document.getElementById('zip');
  const regex = /^[0-9]{5}(-[0-9]{4})?/; // USA, 5 digits - (4 digits group optional)

  if (!regex.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

// create function to validate email
function validateEmail() {
  const email = document.getElementById('email');
  const regex = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;

  if (!regex.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

// create function to validate phone
function validatePhone() {
  const phone = document.getElementById('phone');
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!regex.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
