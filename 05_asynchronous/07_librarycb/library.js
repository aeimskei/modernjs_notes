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

libraryHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function() {
    if (self.http.status === 200) {
      // console.log(self.http.responseText);
       return self.http.responseText;
    }
  }

  this.http.send();
}



// Make an HTTP POST request
// Make an HTTP PUT request
// Make an HTTP DELETE request