import React, {Component} from 'react';
import axios from 'axios';
import Toggle from 'react-toggle';
import Clipboard from 'react-clipboard.js';
import Search from 'react-icons/lib/md/search';
import BackArrow from 'react-icons/lib/md/arrow-back';
import 'weather-icons/css/weather-icons.css';
import {connect} from "react-redux";
import {setLocationSearch} from "../js/actions/latitude-longitude-action";
import publicIP from 'react-native-public-ip';


function mapDispatchToProps(dispatch) {
    return {
        setLocationSearch: output => dispatch(setLocationSearch(output))
    };
}


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            ip: '72.82.110.100',
            displayWeather: false,
            ipNotValid: false
        };

        this.onSuccess = this.onSuccess.bind(this);
        this.getText = this.getText.bind(this);
    }


    getIp = () => {

        publicIP()
            .then(ip => {
                console.log(ip)
                this.state.ip = ip
                this.handleSubmitCurrentIp(this.state);
                console.log(ip)
                // '47.122.71.234'
            })
            .catch(error => {
                console.log(error);
                // 'Unable to get IP address.'
            });
        publicIP()

    }

    //get current location of user and call the API
    getLocation = () => {
        const showPosition = (position) => {
            console.log(position)
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                displayWeather: true,
            });
            this.props.setLocationSearch(this.state);

        }

        console.log("user latitude is" + this.state.longitude);
        console.log("user longitude is" + this.state.latitude);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Current location is not supported by this browser");
        }
    }
    validateIPaddress = (ipaddress) => {

        alert("You have entered an invalid IP address!");
        return false
    };
    //update state with search value
    handleSearch = (event) => {

        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(event.target.value)) {

            this.setState({
                ip: event.target.value,
                ipNotValid: false

            });

        } else {

            this.setState({
                ip: event.target.value,
                ipNotValid: true
            });
        }

    };

    //submit a GET request
    handleSubmit = (e) => {
        e.preventDefault();
        const loc = this.state.ip;
        this.axiosGETreq(loc);
    };


    //submit a GET request
    handleSubmitCurrentIp = () => {
        const loc = this.state.ip;
        this.axiosGETreq(loc);
    };


    axiosGETreq = (IP) => {
        axios.get(`http://localhost:5000?ip=${IP}`)
            .then(res => {
                const weatherData = {
                    longitude: res.data.location.longitude,
                    latitude: res.data.location.latitude,
                    ip: IP,
                    displayWeather: true,
                    cityName: res.data.city.names.en,
                    continentName: res.data.continent.names.en,
                    countryName: res.data.country.names.en,
                    postalCode: res.data.postal.code,
                    timeZone: res.data.location.time_zone,

                }

                this.setState(weatherData);

                this.props.setLocationSearch(this.state);

                localStorage.setItem('data', JSON.stringify(weatherData));
            })
            .catch(error => {
                console.log(error);
                this.state.ipNotValid = !this.state.ipNotValid
                console.log(this.state.ipNotValid);
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
            this.getIp()
        }
    }


    onSuccess() {
        console.info('successfully copied');
    }

    getText() {
        console.log(this.state)
        return this.state.latitude.toString() + "," + this.state.longitude.toString();
    }


    render() {
        return (
            <div>


                {
                    this.state.ipNotValid && (
                        <div className="alert alert-danger" role="alert">
                            Ip not valid
                        </div>
                    )
                }


                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{marginTop: "5%"}}>
                            <div className="input-group mb-3">

                                <input className="form-control" type="text" aria-label="Search" placeholder={"Your current IP \t ==> \t" + this.state.ip}
                                        onChange={this.handleSearch}/>
                                <div className="input-group-append">

                                    <button
                                        className="btn btn-outline-success btn-rounded btn-sm"
                                        type="submit">search
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div style={{marginLeft: "5%", marginTop: "5%"}}>
                            <button style={{fontSize: "15px", marginLeft: "5%", marginTop: "5%"}}
                                    className="btn btn-outline-info btn-rounded btn-sm my-md-n2"
                                    type="submit" onClick={this.getLocation}>Get Location
                            </button>
                        </div>
                    </form>

                </div>

            </div>

        );
    }
}

const SearchBarForm = connect(
    null,
    mapDispatchToProps
)(SearchBar);
export default SearchBarForm;
