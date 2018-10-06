/**
  * Simple HTTP Library
  * Library for making HTTP requests
  * 
  * @version 2.0.0
  * @author Amy
  * @license MIT
  * 
**/

// Use ES6 Classes
// no need for Constructor bc we don't need the XHR Object,

class libraryHTTP {
  // make HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  // make HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  // make HTTP PUT or update request
}