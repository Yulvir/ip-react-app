import React, { Component } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import GoogleMapContainer from './GoogleMap.js';
import SearchBar from './SearchBar.js';
import NavBar from './NavBar.js';



const parentDivStyle = {
  "width": "100%",
   "display": "table",
   "margin-right": "50px"
}

const ppDivStyle = {
  "display": "table-row"
}


const lDivStyle = {
  "width": "300px",
  "height": "300px",
   "display": "table-cell"
}

const rDivStyle = {
  "height": "300px",
  "width": "300px",
   "display": "table-cell"
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

      <NavBar/>


      <div style={parentDivStyle}>
          <div style={ppDivStyle}>
              <div style={rDivStyle}> <SearchBar/> </div>
              <div style={lDivStyle}> <GoogleMapContainer/></div>

          </div>
      </div>

      <div>


      </div>
      </div>
    );
  }
}

export default App
