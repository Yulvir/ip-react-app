import Header from "../header/header";
import NavBar from "../navbar/navbar";
import React from "react";
import Footer from '../footer/footer'

const Layout = props => (
  <div className="Layout">
    <Header />
        <NavBar />
    <div className="Content">
      {props.children}
    </div>
      <Footer/>
  </div>
);

export default Layout;