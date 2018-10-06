// create a function

async function myFunction() {
  return 'Hello';
}

// console.log(myFunction()); //test to show that it returns a Promise

myFunction()
  .then(response => console.log(response));