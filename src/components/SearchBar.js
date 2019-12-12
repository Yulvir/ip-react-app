import React, {Component} from 'react';
import axios from 'axios';
import Toggle from 'react-toggle';
import Search from 'react-icons/lib/md/search';
import BackArrow from 'react-icons/lib/md/arrow-back';
import 'weather-icons/css/weather-icons.css';
import {connect, Provider} from "react-redux";
import {setLocationInfo} from "../js/actions/latitude-longitude-action";
import publicIP from 'react-native-public-ip';
import {ConnectedClipboardIP} from './ClipboardIP'
import store from "../js/store";
import Header from "./Header";
import GetLocationForm from "./GetLocation";
import IpSearchHandleForm from "./IpSearchHandle";
import GetMyIPForm from "./GetMyIp";

function mapDispatchToProps(dispatch) {
    return {
        setLocationInfo: output => dispatch(setLocationInfo(output))
    };
}


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ipNotValid: false,
        };

    }


    componentWillMount = () => {
        const cachedData = JSON.parse(localStorage.getItem('data'));

        if (cachedData) {
            //set state with cached data
            this.setState({
                ipNotValid: cachedData.ipNotValid,
            });
        }
    };



    render() {
        return (
            <div>

                {
                    this.state.ipNotValid && (
                        <div className="alert alert-danger" role="alert">
                            Ip not valid
                        </div>
                    )
                }

                <GetMyIPForm store={store}/>
                <ConnectedClipboardIP store={store}/>
                <IpSearchHandleForm store={store}/>
                <GetLocationForm store={store}/>
            </div>

        );
    }
}

const SearchBarForm = connect(
    null,
    mapDispatchToProps
)(SearchBar);
export default SearchBarForm;
