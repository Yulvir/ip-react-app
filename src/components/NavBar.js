import React, { Component } from 'react';

class Navbar extends React.Component{
    render() {
        return (
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
        );
    }
}

export default Navbar
