import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import {connect} from "react-redux";
import store from '../js/store/index'


const mapStateToProps = (state) => {
  return { locationObject: state };
};


let mapStyles = {
    maxWidth: '100vw',
    height:'auto',
    width:'auto',
   maxHeigh:'100vh'
};

export class GoogleMapContainer extends Component  {
  constructor(props) {
    super(props);

    this.state = {
       items: [],
       initialLocation: {lat: -3, lng: 40}
     };

    const mapHeight = window.innerHeight;


     store.subscribe(() => {
       // When state will be updated(in our case, when items will be fetched),
       // we will update local component state and force component to rerender
       // with new data.
       this.setState({
         items: store.getState().locationInfo,
         initialLocation: {
           lat: store.getState().locationInfo.latitude,
           lng: store.getState().locationInfo.longitude
         }
       });
     });

  }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
        this.setState({windowWidth: windowWidth, windowHeight: windowHeight});
    }
  displayMarkers = () => {
    const locationObject = this.props.locationInfo;
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
