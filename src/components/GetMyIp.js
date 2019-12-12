import React, {Component} from 'react';
import axios from 'axios';
import 'weather-icons/css/weather-icons.css';
import {connect, Provider} from "react-redux";
import {setIpSearch, setOwnIp} from "../js/actions/ip-action";
import store from "../js/store";
const publicIp = require('public-ip');

function mapDispatchToProps(dispatch) {
    return {
        setOwnIp: output => dispatch(setOwnIp(output))
    };
}


class GetMyIP extends Component {

    constructor(props) {
    super(props);
    this.state = {
        items: [],
        ownIp: ""
    };
        this.getIp().then(r => this.props.setOwnIp({ownIp: r}))
    }



    getIp = async () => {

        const ipv4 = await publicIp.v4() || "";
        console.log(ipv4);
        this.setState({ownIp: ipv4});
        localStorage.setItem('data', JSON.stringify(this.state));
        console.log(ipv4);

        return ipv4

    };

    componentWillMount = () => {
        const cachedData = JSON.parse(localStorage.getItem('data'));

        if (cachedData) {
            //set state with cached data
            this.setState({
                ownIp: cachedData.ip
            });
        }
    };

render() {
   return null;
}
}

const GetMyIPForm = connect(
    null,
    mapDispatchToProps
)(GetMyIP);
export default GetMyIPForm;
