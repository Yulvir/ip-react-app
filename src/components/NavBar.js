import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div className="d-flex flex-column flex-md-row p-3 px-md-4 mb-3 bg-info border-bottom box-shadow">
            <nav className="my-2 my-md-0 mr-md-3 mr-auto">
                <a className="btn btn-info" href="https://www.maxmind.com">MaxMind</a>
            </nav>


            <nav className="my-2 my-md-0 mr-md-3 ml-auto">
                  <Link to="/content" className="text-dark" ><span className="btn btn-info text-dark"> Documentation</span> </Link>
                  <Link to="/cidr" className="text-dark" ><span className="btn btn-info text-dark">Cidr</span></Link>
                  <Link to="/" className="text-dark"> <span className="btn btn-info text-dark">Home</span></Link>
            </nav>
        </div>

    );
  }
}

export default NavBar