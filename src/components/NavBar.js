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
                <a className="btn btn-info text-dark" >   <Link to="/developers" className="text-dark" >Developers </Link> </a>
                <a className="btn btn-info text-dark" >   <Link to="/content" className="text-dark" >Documentation </Link> </a>
                <a className="btn btn-info text-dark" >   <Link to="/" className="text-dark">Home </Link> </a>
            </nav>
        </div>

    );
  }
}

export default NavBar