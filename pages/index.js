import React from 'react'
import {connect} from 'react-redux'
import App from '../components/app'
import {fetchMyIp, fetchMyIpAndGetInfoIp, getInfoIp, setMyIpAndGetInfoIp} from "../actions/actions-creators";
import {setClientRequest, setMyIp} from "../actions/actions";

const requestIp = require('request-ip');


class Index extends React.Component {
    static async getInitialProps({reduxStore, req}) {
        const isServer = !!req;

        if (typeof req != "undefined") {
            // reduxStore.dispatch(setClientRequest(req));
            const myIp = requestIp.getClientIp(req);
            console.log(myIp);
            if (["::1", "::ffff:127.0.0.1", "127.0.0.1"].includes(myIp)) {
                console.log("Browser at localhost");
                await reduxStore.dispatch(fetchMyIpAndGetInfoIp())

            } else {
                console.log("Browser at " + myIp);
                reduxStore.dispatch(setMyIp(myIp));
                await reduxStore.dispatch(getInfoIp(myIp));
            }



        } else {

            console.log("req is undefined");
            console.log(req)
        }


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
