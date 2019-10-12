import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import Toggle from 'react-toggle';
import Clipboard from 'react-clipboard.js';
import Search from 'react-icons/lib/md/search';
import BackArrow from 'react-icons/lib/md/arrow-back';
import 'weather-icons/css/weather-icons.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    }
  }


  //get current location of user and call the API
  getLocation = () => {
    const showPosition = (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        displayWeather: true
      });

    }
    console.log("user latitude is" + this.state.longitude);
    console.log("user longitude is" + this.state.latitude);

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


  onSuccess() {
    console.info('successfully copied');
  }

  getText() {
    return this.state.latitude + this.state.longitude;
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
              <p>or</p>
              <p className="search-curent-loc">use my <a onClick={this.getLocation}>current position</a></p>
            </div>
          )
        }
        {
          this.state.displayWeather &&

          (
            <div>
            <div className="upper-section">
              <div className="back-and-city">
                <BackArrow size={35} onClick={ () => { this.setState({displayWeather: false})}} />

              </div>
            </div>

            <div className="search-container">latitude: {this.state.longitude} , longitude: {this.state.latitude}</div>
            <div>
            <Clipboard option-text={this.getText} onSuccess={this.onSuccess}>
              copy to clipboard
            </Clipboard>
            </div>


            </div>
          )
        }
      </div>
    );
  }
}

export default SearchBar