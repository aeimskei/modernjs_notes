# Fetch Weather API (work in weather.js)

Create a ```Weather``` class.

**weather.js**
```
// access to API key
const wKey = config.API_KEY;

class Weather {
  constructor() {
    this.apiKey = wKey;
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json`);
  }
}
```

**URL Example from their API docs**
http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json

Replace the placeholders with dynamic values of the properties in the constructor.

```
// access to API key
const wKey = config.API_KEY;

class Weather {
  constructor() {
    this.apiKey = wKey;
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
  }
}
```

## Our Complete Weather Class structure

```
const wKey = config.API_KEY;

class Weather {
  constructor() {
    this.apiKey = wKey;
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
```