// Instatiate/Init Classes
// weather object (hard code to test first)
const weather = new Weather('San Francisco', 'CA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Function to get weather
function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results); // test out if we can get the weather
    })
    .catch(error => console.log(error));
}