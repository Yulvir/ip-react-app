import React, {Component} from 'react';
import axios from 'axios';
import 'weather-icons/css/weather-icons.css';
import {connect, Provider} from "react-redux";
import {setIpSearch, setOwnIp} from "../js/actions/ip-action";
import store from "../js/store";
import publicIP from "react-native-public-ip";

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

    }

    componentDidMount() {
                this.getIp();
    }

    getIp = () => {

        publicIP()
            .then(ip => {
                console.log(ip);
                this.setState({ownIp: ip});
                this.props.setOwnIp({ownIpItems: ip});
                localStorage.setItem('data', JSON.stringify(this.state));
                console.log(ip)
            })
            .catch(error => {
                console.log(error);
                // 'Unable to get IP address.'
            });
        publicIP()
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
