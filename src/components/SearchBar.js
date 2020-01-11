import React, {Component} from 'react';
import 'weather-icons/css/weather-icons.css';
import {connect} from "react-redux";
import {setLocationInfo} from "../js/actions/latitude-longitude-action";
import {ConnectedClipboardIP} from './ClipboardIP'
import store from "../js/store";
import GetLocationForm from "./GetLocation";
import IpSearchHandleForm from "./IpSearchHandle";

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
