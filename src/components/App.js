import React, { Component } from 'react';
import '../css/App.css';
import '../css/toggleButton.css';
import '../css/dashboard.css';
import axios from 'axios';
import Toggle from 'react-toggle';

import Search from 'react-icons/lib/md/search';
import BackArrow from 'react-icons/lib/md/arrow-back';

import 'weather-icons/css/weather-icons.css';

//retrieve the API key and store it as a variable
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const iconList = {
  "01d": 'wi-day-sunny',
  "01n": 'wi-night-clear',
  "02d": 'wi-day-cloudy',
  "02n": 'wi-night-partly-cloudy',
  "03d": 'wi-cloud',
  "03n": 'wi-night-alt-cloudy',
  "04d": 'wi-cloudy',
  "04n": 'wi-night-cloudy',
  "09d": 'wi-showers',
  "09n": 'wi-night-showers',
  "10d": 'wi-rain',
  "10n": 'wi-night-rain',
  "11d": 'wi-thunderstorm',
  "11n": 'wi-night-thunderstorm',
  "13d": 'wi-snow',
  "13n": 'wi-night-snow',
  "50d": 'wi-fog',
  "50n": 'wi-night-fog',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: ''
    }
  }

  //get current location of user and call the API
  getLocation = () => {
    const showPosition = (position) => {
      this.setState({
        latitude: position.location.latitude,
        longitude: position.latitude.longitude
      });
      const lat = this.state.latitude;
      const lon = this.state.longitude;
      this.axiosGETreq(`1.2.1.1`);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Current location is not supported by this browser");
    }
  }

  //update state with search value
  handleSearch = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  //submit a GET request
  handleSubmit = (e) => {
    e.preventDefault();
    const loc = this.state.city;
    this.axiosGETreq(`1.2.1.1`);
  }

  axiosGETreq = (URL) => {
    axios.get(`http://localhost:5000?ip=${URL}`)
      .then(res => {
        const weatherData = {
          longitude: res.data.location.longitude,
          latitude: res.data.location.latitude ,
          displayWeather: true

        }
        this.setState({
          latitude: weatherData.latitude,
          longitude: weatherData.longitude,
          displayWeather: weatherData.displayWeather
        });
        //this.getTodaysTemps();
        //this.getFiveDayForecast();
        localStorage.setItem('data', JSON.stringify(weatherData));
      })
      .catch(error => {
        console.log(error);
      });
  }


  componentWillMount = () => {
    const cachedData = JSON.parse(localStorage.getItem('data'));

    if (cachedData) {
      //set state with cached data
      this.setState({
        latitude: cachedData.latitude,
        longitude: cachedData.longitude,
      });
    }
  }


  render() {
    return (
      <div>
        {
          !this.state.displayWeather && (
            <div className="search-container">
              <form onSubmit={this.handleSubmit}>
                <input className="search-input" type="text" value={this.state.city} placeholder="192.168.0.1" onChange={this.handleSearch}/>
                <button id="submit-btn" type="submit">
                  <Search size={35} className="search-icon" />
                </button>
              </form>
            </div>
          )
        }
        {
          this.state.displayWeather && (
            <div className="weather-container">

              <div className="upper-section">
                <div className="back-and-city">
                  <BackArrow size={35} onClick={ () => { this.setState({displayWeather: false})}} />

                </div>
              </div>
              <h2 className="city-mobile">{this.state.city}</h2>
              <div>
                <div className="date-weather">
                </div>
                <div className="current-weather-data">
                <h2 className="city-desktop">{this.state.longitude}</h2>
                <h2 className="city-desktop">{this.state.latitude}</h2>
                </div>
                <div>

                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;

//
// <div className="todays-weather">
//   <div>Morning</div>
//   <div className="time-of-day">{this.calculateTemp(this.state.currentWeatherMorning)}</div>
// </div>
// <div className="todays-weather">
//   <div>Day</div>
//   <div>{this.calculateTemp(this.state.currentWeatherDay)}</div>
// </div>
// <div className="todays-weather">
//   <div>Evening</div>
//   <div>{this.calculateTemp(this.state.currentWeatherEvening)}</div>
// </div>
// <div className="todays-weather">
//   <div>Night</div>
//   <div>{this.calculateTemp(this.state.currentWeatherNight)}</div>
// </div>
