import Header from "../header/header";
import NavBar from "../navbar/navbar";
import React from "react";
import Footer from '../footer/footer'
import CookieConsent from "react-cookie-consent";

const Layout = props => (
  <div className="Layout">
    <Header />
        <NavBar />
    <div className="Content">
      {props.children}
    </div>
      <CookieConsent
                    location="bottom"
                    buttonText="I accept cookies"
                    cookieName="cookiesIp"
                    style={{background: "#2B373B"}}
                    buttonStyle={{color: "#4e503b", fontSize: "13px"}}
                    expires={150}
                >
                    This website uses cookies to enhance the user experience.{" "}
                </CookieConsent>
      <Footer/>
  </div>
);

export default Layout;