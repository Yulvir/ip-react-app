import React, { Component } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {ConnectedGoogleMapContainer} from './GoogleMap.js';
import SearchBarForm from './SearchBar.js';

import {ConnectedResultsContent} from './ResultsContent.js';
import banner from './assets/img/81AyedcV+vL._SY550_.jpg'; // Tell Webpack this JS file uses this image
import logo from './assets/img/getinfoip.png';
import store from "../js/store";
import {connect, Provider} from "react-redux";
import {setOwnIp} from "../js/actions/ip-action";
import {setLocationInfo} from "../js/actions/latitude-longitude-action"; // Tell Webpack this JS file uses this image
import getMAC, { isMAC } from 'getmac'

const publicIp = require('public-ip');

function mapDispatchToProps(dispatch) {
    return {
        setOwnIp: output => dispatch(setOwnIp(output)),
        setLocationInfo: output => dispatch(setLocationInfo(output))
    };
}


class App extends Component {
      constructor(props) {
        super(props);
        this.setState({ownIP : ""})


      }
    componentDidMount() {
          this.getIp().then(r => this.setupData(r))

    }
    setupData = (r) =>{
          this.props.setOwnIp({ownIp: r});
          this.axiosGETreq(r)
    };

    axiosGETreq = async(IP) => {
        console.log("HTTP request geolocate this ip: " + IP);
        let res = await axios.get(`https://getinfoip.com/api/?ip=${IP}`);
        console.log("Status code HTTP Flask: " + res.status);
        const nan = "No data";
        const locationData = {
            longitude: res.data.match.location ? res.data.match.location.longitude : nan,
            latitude: res.data.match.location ? res.data.match.location.latitude : nan,
            ip: IP,
            ownIp: this.state.ownip,
            cityName: res.data.match.city ? res.data.match.city .names.en : nan,
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
            <div className="mx-auto" style={{width:"400px"}}>

                <img src={logo} style={{width:"400px", margin: '0 auto'}} className="img-fluid" alt="Italian Trulli"/>

            </div>

            <div className="card-deck mb-3 text-center">
                <img src={banner} alt="Italian Trulli"/>

                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h4 className="my-0 font-weight-lighter ">Search with your current IP</h4>
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
                            <h4 className="my-0 font-weight-lighter">Google Map</h4>
                        </div>


                            <div className="embed-responsive embed-responsive-1by1">
                                <div className="embed-responsive-item">
                            <Provider store={store}>
                              <ConnectedGoogleMapContainer/>
                              </Provider>
                            </div>
                            </div>

                    </div>
                    <img src={banner} alt="Italian Trulli"/>

            </div>

        </div>

    );
  }
}

export default connect(
    null,
    mapDispatchToProps
)(App);
