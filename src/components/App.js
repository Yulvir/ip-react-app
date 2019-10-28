import React, { Component } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {ConnectedGoogleMapContainer} from './GoogleMap.js';
import SearchBarForm from './SearchBar.js';
import {ConnectedResultsContent} from './ResultsContent.js';
import NavBar from './NavBar.js';

import List from "./List";
import Form from "./Form";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

      <NavBar/>



      <div className="row">
        <div className="col">
        <SearchBarForm/>
          </div>
        <div className="col">
            <ConnectedGoogleMapContainer/>
        </div>
        <div className="col">
            Column
        </div>
      </div>

      <div className="row">
          <ConnectedResultsContent/>
      </div>
      </div>

    );
  }
}

export default App
