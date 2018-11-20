// access to API key
const wKey = config.API_KEY;

class Weather {
  constructor(city, state) {
    this.apiKey = wKey;
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    // Grab response data
    const responseData = await response.json();
    // Return one single object of all the weather info only
    return responseData.current_observation;
  }

  // Change Weather Location, another method we want
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}