import React, {Component} from 'react';
import 'weather-icons/css/weather-icons.css';
import {connect} from "react-redux";
import {setOwnIp} from "../js/actions/ip-action";
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
        this.setState({ownIp: ipv4});
        localStorage.setItem('data', JSON.stringify(this.state));

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
