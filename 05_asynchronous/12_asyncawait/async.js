// create a function - simple example

async function myFunction() {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello there!'), 1000);
  })

  const error = false; // can change to false

  if (!error) {
    const response = await promise;
    return response;
  } else {
    await Promise.reject(new Error('Oops, something went wrong'));
  }
}

// console.log(myFunction()); //test to show that it returns a Promise

myFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error));