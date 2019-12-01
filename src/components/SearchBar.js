import React, {Component} from 'react';
import axios from 'axios';
import Toggle from 'react-toggle';
import Search from 'react-icons/lib/md/search';
import BackArrow from 'react-icons/lib/md/arrow-back';
import 'weather-icons/css/weather-icons.css';
import {connect, Provider} from "react-redux";
import {setLocationSearch} from "../js/actions/latitude-longitude-action";
import publicIP from 'react-native-public-ip';
import {ConnectedClipboardIP} from './ClipboardIP'
import store from "../js/store";
import Header from "./Header";

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
            displayResults: false,
            ipNotValid: false,
            ownIp: "",
            locationAsked: false

        };

        this.onSuccess = this.onSuccess.bind(this);
        this.getText = this.getText.bind(this);
        this.getIp();

    }


    getIp = () => {

        publicIP()
            .then(ip => {
                console.log(ip);
                this.state.ownIp = ip;
                //this.handleSubmitCurrentIp(this.state);
                this.props.setLocationSearch(this.state);
                localStorage.setItem('data', JSON.stringify(this.state));
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
            console.log(position);

            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                displayResults: true,
                locationAsked: true
            });
            this.props.setLocationSearch(this.state);

        };

        console.log("user latitude is" + this.state.longitude);
        console.log("user longitude is" + this.state.latitude);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Current location is not supported by this browser");
        }
    };

    //update state with search value
    handleSearch = (event) => {
        this.state.locationAsked = false;
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
        axios.get(`http://127.0.0.1:5000?ip=${IP}`)
            .then(res => {
                const weatherData = {
                    longitude: res.data.match.location.longitude,
                    latitude: res.data.match.location.latitude,
                    ip: IP,
                    displayResults: true,
                    cityName: res.data.match.city.names.en,
                    continentName: res.data.match.continent.names.en,
                    countryName: res.data.match.country.names.en,
                    postalCode: res.data.match.postal.code,
                    timeZone: res.data.match.location.time_zone,

                };

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
                ip: cachedData.ip,
                ownIp: cachedData.ownIp
            });
        }
    };


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

                <ConnectedClipboardIP store={store}>
                  <Header/>
                  </ConnectedClipboardIP>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{marginTop: "5%"}}>
                            <div className="input-group mb-3">

                                <input className="form-control" type="text" aria-label="Search"
                                       placeholder={"Your current IP \t ==> \t" + this.state.ip}
                                       onChange={this.handleSearch}/>
                                <div className="input-group-append">

                                    <button
                                        className="btn btn-outline-success btn-rounded btn-sm"
                                        type="submit">search
                                    </button>
                                </div>
                            </div>

                        </div>

                    </form>

                    <div style={{marginLeft: "5%", marginTop: "5%"}}>
                        <button style={{fontSize: "15px", marginLeft: "5%", marginTop: "5%"}}
                                className="btn btn-outline-info btn-rounded btn-sm my-md-n2"
                                type="submit" onClick={this.getLocation}>Get Location from Browser
                        </button>
                    </div>

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
