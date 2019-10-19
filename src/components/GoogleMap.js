import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import {connect} from "react-redux";


function mapStateToProps(state, props) {
  return { state: state };
};


const mapStyles = {
width: '50%',
height: '50%'
};

@connect()
export class GoogleMapContainer extends Component  {
  constructor(props) {
    super(props);

    this.state = this.props.state
  }

  displayMarkers = () => {
    return this.state.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.displayMarkers()}
        </Map>
        </div>
    );
  }
}





export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyBwEjD8EAegAdB081xT4WZlsSi8bedy5JY'
  }
))(MapContainer)
