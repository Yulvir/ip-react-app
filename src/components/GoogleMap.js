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


    if (this.props.locationData){
        this.state = {
       items: [],
       initialLocation: {lat: this.props.locationData.latitude, lng: this.props.locationData.longitude}
     };
    } else {
        this.state = {
       items: [],
       initialLocation: {lat: 40, lng: -3}
     };
    }


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
    }

    componentWillUnmount() {
    }


  displayMarkers = () => {


      // TODO: Quitar este Workaround feo!!!

      if (this.state.items.length !== 0){

          // Cuando el store no esta vacios coge la latitud y la longitud
          return [this.state.items].map((d, index) => {
              return <Marker key={index} id={index} position={{
               lat: d.latitude,
               lng: d.longitude
             }}
             onClick={() => console.log("You clicked me!")} />
            })
      } else {

          // Cuando el store esta vacios pillalo de locationData

          return [this.props.locationData].map((d, index) => {
              return <Marker key={index} id={index} position={{
               lat: d.latitude,
               lng: d.longitude
             }}
             onClick={() => console.log("You clicked me!")} />
            })


      }
  };




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
)(GoogleMapContainer));
