import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IpLocator from "./IpLocator";
import PageError from "./PageError";
import IpContent from "./IpContent";
import NavBar from "./NavBar";
import BASE_URL from "./Config";
import Cidr from "./Cidr";

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
              path="/cidr"
              component={Cidr} />

            <Route
              exact
              path="/content"
              render={() => <IpContent/>} />
              <Route path='/developers' component={() => {
                 window.location.href = `${BASE_URL}`;
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
