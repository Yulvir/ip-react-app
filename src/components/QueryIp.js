import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import Toggle from 'react-toggle';
import Clipboard from 'react-clipboard.js';
import Search from 'react-icons/lib/md/search';
import BackArrow from 'react-icons/lib/md/arrow-back';
import 'weather-icons/css/weather-icons.css';

class QueryIp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      ip: '72.82.110.100'
    }

    this.onSuccess = this.onSuccess.bind(this);
    this.getText = this.getText.bind(this);
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
    console.log(event)
    this.setState({
      ip: event.target.value
    });
  }

  //submit a GET request
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(this.state)
    const loc = this.state.ip;
    this.axiosGETreq(loc);
  }

  axiosGETreq = (IP) => {
    axios.get(`http://localhost:5000?ip=${IP}`)
      .then(res => {
        const weatherData = {
          longitude: res.data.location.longitude,
          latitude: res.data.location.latitude ,
          ip: IP ,
          displayWeather: true

        }
        this.setState({
          latitude: weatherData.latitude,
          longitude: weatherData.longitude,
          ip: IP ,
          displayWeather: weatherData.displayWeather
        });
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
      ip: cachedData.ip
      });
    }
  }


  onSuccess() {
    console.info('successfully copied');
  }

  getText() {
    console.log(this.state)
    return this.state.latitude.toString() + "," +  this.state.longitude.toString();
  }



  render() {
    return (

    );
  }
}

export default QueryIp
