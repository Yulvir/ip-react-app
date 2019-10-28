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
      return  ([<td> {store.cityName} </td>,
              <td> {store.continentName} </td>,
              <td> {store.countryName} </td>,
              <td> {store.postalCode} </td>,
              <td> {store.timeZone} </td>])
    })
  }

  render() {
    return (
      <table className="table-results">
      <tr>
        <th>City</th>
        <th>Continent</th>
        <th>Country</th>
        <th>Postal Code</th>
        <th>Time Zone</th>
      </tr>
      <tr>
      {this.displayMarkers()}
      </tr>
    </table>
    );
  }
}

export const ConnectedResultsContent = connect(mapStateToProps)(ResultsContent)
