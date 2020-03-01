import React, {useRef} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import {useSelector} from "react-redux";
let mapStyles = {
    maxWidth: '100vw',
    height:'auto',
    width:'auto',
   maxHeigh:'100vh'
};
export const Geo = ({google}) => {
    const mapRef = useRef(null);
    const results = useSelector(state => state.results);

    const displayMarkers = (results) => {
        return <Marker position={results}/>
    };
    const place = {
                lat: results.match.location.latitude,
                lng: results.match.location.longitude
            };
    return (
        <Map
            ref={mapRef}
            google={google}
            style={mapStyles}
            center={place}
            initialCenter={place}
            zoom={12}>
            {displayMarkers(place)}
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyBwEjD8EAegAdB081xT4WZlsSi8bedy5JY", // google maps key
})(Geo);