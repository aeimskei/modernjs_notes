// Local Storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// Instatiate/Init Classes
// weather object (hard code to test first)
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
const modalBtn = document.getElementById('w-change-btn');
modalBtn.addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // Set Location in Local Storage
  storage.setLocationData(city, state);

  // Call getWeather and display
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
})

// Function to get weather
function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.display(results);
    })
    .catch(error => console.log(error));
}