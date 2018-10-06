// create a function - simple example
/*
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
  */



// With Fetch

async function getNames() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // proceed once that promise is resolved
  const data = await response.json();
  
  // process when the second Promise is resolved
  return data;
}

getNames().then(names => console.log(names));