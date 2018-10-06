// Initialize varibale
const http = new libraryHTTP;

// GET users
// fetch way
/*
http.get('https://jsonplaceholder.typicode.com/users');
*/

// asyncrhonous way
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


// POST
// create data
const data = {
  name: 'Rider McKenna',
  username: 'rider',
  email: 'rider@example.com'
}

// create POST
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));