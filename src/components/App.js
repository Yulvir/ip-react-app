import React, { Component } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import GoogleMapContainer from './GoogleMap.js';
import SearchBar from './SearchBar.js';
import ResultsContent from './ResultsContent.js';
import NavBar from './NavBar.js';

import List from "./List";
import Form from "./Form";


const lDivStyle = {
  "width": "50%",
  "height": "inherit",
   "display": "table-cell"
}

const rDivStyle = {
    "width": "50%",
    "height": "100%",
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


      <div>
          <div className="parent-div">
              <div style={lDivStyle}> <SearchBar/></div>
              <div style={rDivStyle}> <GoogleMapContainer/></div>

          </div>
      </div>



            <div>
              <h2>Search IP</h2>
              <Form />
            </div>
            <h2>Searched IP</h2>
            <List />



      </div>
    );
  }
}

export default App
