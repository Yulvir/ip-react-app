import React, { Component } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import GoogleMapContainer from './GoogleMap.js';
import SearchBar from './SearchBar.js';
import NavBar from './NavBar.js';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>

      <NavBar/>

      <div>

      <table>
      <tr>
        <td><GoogleMapContainer/></td>
        <td><SearchBar/></td>
      </tr>
      </table>
      </div>
      </body>
    );
  }
}

export default App
