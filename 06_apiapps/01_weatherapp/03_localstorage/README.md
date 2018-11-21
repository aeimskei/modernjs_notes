# Add Ability to Change Location on Search and Save on Local Storage

Add Location Change ability in the Modal form and then also have Local Storage remember the location search.

## Change Location Weather Search

Withe Modal, we have to use jQuery bc Bootstrap depends on jQuery. Look at **index.html**, we have an id of ```w-change-btn``` on button element. We need to add an event listener to that.

In **app.js** create an event listener for that.

```
// Change Location event
const modalBtn = document.getElementById('w-change-btn');
modalBtn.addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation('Modesto', 'CA');

  // Call getWeather and display
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
})
```

<kbd>![alt text](img/changeloc.png "screenshot")</kbd>

## Save Location for Weather Search to Local Storage

Need to create a ```Storage Class``` in storage.js and we're just going to initialize ```city``` and ```state``` (later add a default starter in case there's nothing in Local Storage).

```
class Storage {
  constructor() {
    this.city;
    this.state;
  }
}
```