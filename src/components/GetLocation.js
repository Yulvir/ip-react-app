import React, {Component} from 'react';
import axios from 'axios';
import 'weather-icons/css/weather-icons.css';
import {connect, Provider} from "react-redux";
import {setLocationSearch} from "../js/actions/latitude-longitude-action";
import store from "../js/store";

function mapDispatchToProps(dispatch) {
    return {
        setLocationSearch: output => dispatch(setLocationSearch(output))
    };
}


class GetLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            displayResults: true,
            longitude: '',
        };
    }


    //get current location of user and call the API
    getLocation = () => {
        const showPosition = (position) => {
            console.log(position);
            this.setState({
                latitude: position.coords.latitude,
                displayResults: true,
                longitude: position.coords.longitude,
            });
            this.props.setLocationSearch(this.state);

        };

        console.log("user latitude is" + this.state.longitude);
        console.log("user longitude is" + this.state.latitude);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            this.axiosGetLocationInfo()

        } else {
            alert("Current location is not supported by this browser");
        }
    };


    axiosGetLocationInfo = () => {

   const location = {
      lat: this.state.latitude,
      lon: this.state.longitude
    };

        axios.post(`http://127.0.0.1:5000/location_info`, { location })
            .then(res => {
                const locationData = {
                        cityName: res.data.location_info.city,
                        continentName: res.data.location_info.continent,
                        countryName: res.data.location_info.country,
                        postalCode: res.data.location_info.postcode,
                        timeZone: res.data.location_info.time_zone,
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                };
                this.setState(locationData);

                this.props.setLocationSearch(locationData);

                localStorage.setItem('data', JSON.stringify(locationData));
            })
            .catch(error => {
                console.log(error);
            });
    };
    componentWillMount = () => {
        const cachedData = JSON.parse(localStorage.getItem('data'));

        if (cachedData) {
            //set state with cached data
            this.setState({
                latitude: cachedData.latitude,
                longitude: cachedData.longitude
            });
        }
    };



    render() {
        return (
            <div>

                    <div style={{marginLeft: "5%", marginTop: "5%"}}>
                        <button style={{fontSize: "15px", marginLeft: "5%", marginTop: "5%"}}
                                className="btn btn-outline-info btn-rounded btn-sm my-md-n2"
                                type="submit" onClick={this.getLocation}>Get Location from Browser
                        </button>
                    </div>

                </div>

        );
    }
}

const GetLocationForm = connect(
    null,
    mapDispatchToProps
)(GetLocation);
export default GetLocationForm;
