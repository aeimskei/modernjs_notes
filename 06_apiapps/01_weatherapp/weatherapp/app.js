// Instatiate/Init Classes
// weather object (hard code to test first)
const weather = new Weather('San Francisco', 'CA');
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Function to get weather
function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.display(results);
    })
    .catch(error => console.log(error));
}