import React, { Component } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {ConnectedGoogleMapContainer} from './GoogleMap.js';
import SearchBarForm from './SearchBar.js';

import {ConnectedResultsContent} from './ResultsContent.js';
import banner from './assets/img/81AyedcV+vL._SY550_.jpg'; // Tell Webpack this JS file uses this image
import logo from './assets/img/logo.png';
import store from "../js/store";
import {connect, Provider} from "react-redux";
import {setOwnIp} from "../js/actions/ip-action"; // Tell Webpack this JS file uses this image
const publicIp = require('public-ip');

function mapDispatchToProps(dispatch) {
    return {
        setOwnIp: output => dispatch(setOwnIp(output))
    };
}


class App extends Component {
      constructor(props) {
        super(props);


      }
    componentDidMount() {
                  this.getIp().then(r => this.props.setOwnIp({ownIp: r}))

    }

    getIp = async () => {

            const ipv4 = await publicIp.v4() || "";
            console.log(ipv4);
            this.setState({ownIp: ipv4});
            localStorage.setItem('data', JSON.stringify(this.state));
            console.log(ipv4);

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
