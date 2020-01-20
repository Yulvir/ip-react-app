import React, {Component} from 'react';
import axios from 'axios';
import {ConnectedGoogleMapContainer} from './GoogleMap.js';
import SearchBarForm from './SearchBar.js';

import {ConnectedResultsContent} from './ResultsContent.js';
import logo from './assets/img/getinfoip.png';
import store from "../js/store";
import {connect, Provider} from "react-redux";
import {setOwnIp} from "../js/actions/ip-action";
import {setLocationInfo} from "../js/actions/latitude-longitude-action"; // Tell Webpack this JS file uses this image
import BASE_URL from "./Config";

const publicIp = require('public-ip');

function mapDispatchToProps(dispatch) {
    return {
        setOwnIp: output => dispatch(setOwnIp(output)),
        setLocationInfo: output => dispatch(setLocationInfo(output))
    };
}


class IpLocator extends Component {
    constructor(props) {
        super(props);

        this.state = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : {};

    }

    componentDidMount() {
        this.getIp().then(r => this.setupData(r))

    }

    setupData = (r) => {
        this.props.setOwnIp({ownIp: r});
        this.getInfoIp(r)
    };

    componentWillUnmount() {
      // Remember state for the next mount
      localStorage.setItem('data', JSON.stringify(this.state));
    }

    getInfoIp = async (IP) => {
        console.log("HTTP request geolocate this ip: " + IP);

        const url = `${BASE_URL}/ip_info?ip=${IP}`;

        let res = await axios.get(url);
        console.log("Status code HTTP Flask: " + res.status);
        const nan = "No data";
        const locationData = {
            longitude: res.data.match.location ? res.data.match.location.longitude : nan,
            latitude: res.data.match.location ? res.data.match.location.latitude : nan,
            ip: IP,
            ownIp: this.state.ownIp,
            cityName: res.data.match.city ? res.data.match.city.names.en : nan,
            continentName: res.data.match.continent ? res.data.match.continent.names.en : nan,
            countryName: res.data.match.country ? res.data.match.country.names.en : nan,
            postalCode: res.data.match.postal ? res.data.match.postal.code : nan,
            timeZone: res.data.match.location ? res.data.match.location.time_zone : nan

        };

        this.setState(locationData);

        this.props.setLocationInfo(locationData);

        localStorage.setItem('data', JSON.stringify(locationData));

    };
    getIp = async () => {

        const ipv4 = await publicIp.v4() || "";
        this.setState({ownIp: ipv4});
        localStorage.setItem('data', JSON.stringify(this.state));
        return ipv4
    };

    render() {
        return (

            <div className="container-fluid">
                <div className="mx-auto" style={{width: "400px"}}>

                    <img src={logo} style={{width: "400px", margin: '0 auto'}} className="img-fluid"
                         alt="getinfoip logo"/>

                </div>

                <div className="card-deck mb-3 text-center">

                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h1 className="my-0 font-weight-lighter ">Search with your current IP</h1>
                        </div>
                        <div className="card-body">
                            <Provider store={store}>
                                <SearchBarForm/>
                            </Provider>
                        </div>
                        <div className="card-body">

                            <Provider store={store}>
                                <ConnectedResultsContent/>
                            </Provider>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h1 className="my-0 font-weight-lighter">Google Map</h1>
                        </div>


                        <div className="embed-responsive embed-responsive-1by1">
                            <div className="embed-responsive-item">
                                <Provider store={store}>
                                    <ConnectedGoogleMapContainer locationData={this.state}/>
                                </Provider>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(IpLocator);
