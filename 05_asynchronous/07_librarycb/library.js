// =====================================
// Create Constructor
// =====================================

function libraryHTTP() {
  this.http = new XMLHttpRequest();
}

// =====================================
// Create Four Prototypes Methods
// =====================================

// Make an HTTP GET request
// =====================================

libraryHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST request
// =====================================

libraryHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  this.http.onload = function() {
  
    callback(null, self.http.responseText);

  }

  this.http.send(JSON.stringify(data));
}



// Make an HTTP PUT request
// Make an HTTP DELETE request