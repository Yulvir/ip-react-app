import React from 'react'
import {connect} from 'react-redux'
import App from '../components/app'
import {fetchMyIpAndGetInfoIp, getInfoIp, saveClientRequest} from "../actions/actions-creators";
import {setMyIp} from "../actions/actions";
import CookieBanner from '@palmabit/react-cookie-law';
import CookieConsent, { Cookies } from "react-cookie-consent";

const requestIp = require('request-ip');


class Index extends React.Component {
        static async getInitialProps({reduxStore, req}) {
        await saveClientRequest(req, reduxStore);
        return {}
    }
    componentDidMount() {

    }


    render() {
        return (
            <div>
                <App/>
            </div>
        )
    }
}

export default connect()(Index)
