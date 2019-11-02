import React, { Component } from 'react';
import axios from 'axios';
import Toggle from 'react-toggle';
import Clipboard from 'react-clipboard.js';
import Search from 'react-icons/lib/md/search';
import BackArrow from 'react-icons/lib/md/arrow-back';
import 'weather-icons/css/weather-icons.css';
import store from '../js/store/index'
import {connect} from "react-redux";



const mapStateToProps = (state) => {
  return { locationObject: state };
};


export class ResultsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.
     console.log(store.getState().latLon);
      this.setState({
        items: store.getState().latLon,
        initialLocation: {
          lat: store.getState().latLon.latitude,
          lng: store.getState().latLon.longitude
        }
      });
    });
  }

  displayMarkers = () => {
    const locationObject = this.props.latLon;
    console.log(locationObject);


    return [this.state.items].map((store, index) => {
      return  ([


          <li className="list-group-item d-flex justify-content-between align-items-center">
            Latitude
           <h4> <span className="badge badge-primary badge-pill">{store.latitude}</span></h4>
          </li>,
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Longitude
           <h4> <span className="badge badge-primary badge-pill">{store.longitude}</span></h4>
          </li>,
          <li className="list-group-item d-flex justify-content-between align-items-center">
            City
            <h4><span className="badge badge-primary badge-pill ">{store.cityName}</span></h4>
          </li>,

        <li className="list-group-item d-flex justify-content-between align-items-center">
            Continent
          <h4>  <span className="badge badge-primary badge-pill">{store.continentName}</span></h4>
          </li>,

        <li className="list-group-item d-flex justify-content-between align-items-center">
            Country
          <h4>  <span className="badge badge-primary badge-pill">{store.countryName}</span></h4>
          </li>,

        <li className="list-group-item d-flex justify-content-between align-items-center">
            Postal Code
         <h4>   <span className="badge badge-primary badge-pill">{store.postalCode}</span></h4>
          </li>,

        <li className="list-group-item d-flex justify-content-between align-items-center">
            Time Zone
          <h4>  <span className="badge badge-primary badge-pill">{store.timeZone}</span></h4>
          </li>,
      ])

    })
  }



  render() {
    return (
      <ul className="list-group">

      {this.displayMarkers()}


    </ul>
    );
  }
}

export const ConnectedResultsContent = connect(mapStateToProps)(ResultsContent)
