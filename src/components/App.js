import React, { Component } from 'react';
import {setOwnIp} from "../js/actions/ip-action";
import {setLocationInfo} from "../js/actions/latitude-longitude-action"; // Tell Webpack this JS file uses this image
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import IpLocator from "./IpLocator";
import PageError from "./PageError";
import IpContent from "./IpContent";
import NavBar from "./NavBar";

function mapDispatchToProps(dispatch) {
    return {
        setOwnIp: output => dispatch(setOwnIp(output)),
        setLocationInfo: output => dispatch(setLocationInfo(output))
    };
}


class App extends Component {
      constructor(props) {
        super(props);


      }
    componentDidMount() {

    }


  render() {
    return (
    <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route
                exact
              path="/"
              component={IpLocator} />
            <Route
              exact
              path="/content"
              render={() => <IpContent/>} />
              <Route path='/developers' component={() => {
                 window.location.href = 'https://getinfoip.com/api';
                 return null;
            }}/>

            <Route component={PageError} />

          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
