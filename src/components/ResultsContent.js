import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import Toggle from 'react-toggle';
import Clipboard from 'react-clipboard.js';
import Search from 'react-icons/lib/md/search';
import BackArrow from 'react-icons/lib/md/arrow-back';
import 'weather-icons/css/weather-icons.css';

class ResultsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    }
  }


  render() {
    return (
      <table className="table-results">
      <tr>
        <th>Country</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
    </table>
    );
  }
}

export default ResultsContent
