import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import {connect} from "react-redux";
import store from '../js/store/index'


const mapStateToProps = (state) => {
  return { locationObject: state };
};


const mapStyles = {
width: '100%',
height: '100%'
};

export class GoogleMapContainer extends Component  {
  constructor(props) {
    super(props);

    this.state = {
       items: [],
       initialLocation: {lat: -3, lng: 40}
     };

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
    console.log(this.state.initialLocation);
    return [this.state.items].map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  render() {
    return (

        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          center={this.state.initialLocation}
          initialCenter={this.state.initialLocation}
        >
        {this.displayMarkers()}
        </Map>

    );
  }
}





export const ConnectedGoogleMapContainer = connect(mapStateToProps) (GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyBwEjD8EAegAdB081xT4WZlsSi8bedy5JY'
  })
)(GoogleMapContainer))
