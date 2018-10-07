# Custom HTTP Library with Fetch and Async & Await

We're gonna take the previous HTTP Lirary examples and convert it to a fetch with async and await. Turn the functions into async

**library.js**

```
class libraryHTTP {
  // make HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }
}
```

<kbd>![alt text](img/get.png "screenshot")</kbd>