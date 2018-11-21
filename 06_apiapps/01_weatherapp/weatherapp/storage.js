class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Murrieta';
    this.defaultState = 'CA'
  }

  getLocationData() {
    // check if local storage is null
    if (localStorage.getItem('city') === null && localStorage.getItem('state') === null) {
      this.city = this.defaultCity;
      this.state = this.defaultState;
    } else {
      this.city = localStorage.getItem('city');
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    }
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}