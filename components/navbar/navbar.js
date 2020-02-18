import React, { Component } from 'react';
import Link from 'next/link';


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
                  <Link href="/content" className="text-dark"><span className="btn btn-info text-dark">Documentation</span></Link>
                  <Link href="/internet-speed" className="text-dark"><span className="btn btn-info text-dark">Internet Speed</span></Link>
                  <Link href="/cidr" className="text-dark"><span className="btn btn-info text-dark">Cidr</span></Link>
                  <Link href="/" className="text-dark"><span className="btn btn-nfo text-dark">Home</span></Link>
            </nav>
        </div>

    );
  }
}

export default NavBar