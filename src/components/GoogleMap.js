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
    console.log("printing heiht" + mapHeight);


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
        console.log(windowHeight);
        console.log(windowWidth);
        this.setState({windowWidth: windowWidth, windowHeight: windowHeight});
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
