import React, {Component} from 'react';
import {connect} from "react-redux";
import {setLocation} from "../actions/actions";
import {setGetLocationResults} from "../actions/actions-creators";

function mapDispatchToProps(dispatch) {
    return {
        setLocation: output => dispatch(setLocation(output)),
        setLocationInfo: output => dispatch(setGetLocationResults())
    };
}


class GetLocation extends Component {
    constructor(props) {
        super(props);
    }

    //get current location of user and call the API
    getLocation = () => {
        const getPosition = (position) => {

               const location = {
                  lat: position.coords.latitude,
                  lon: position.coords.longitude,
                };
            this.props.setLocation(location);
            this.props.setLocationInfo();
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);

        } else {
            alert("Current location is not supported by this browser");
        }
    };

    render() {
        return (
            <div>

                    <div style={{marginLeft: "5%", marginTop: "5%"}}>
                        <button style={{fontSize: "15px", marginLeft: "5%", marginTop: "5%"}}
                                className="btn btn-outline-info btn-rounded btn-sm my-md-n2"
                                type="submit" onClick={this.getLocation}>Get Location from Browser
                        </button>
                    </div>

                </div>

        );
    }
}

const GetLocationForm = connect(
    null,
    mapDispatchToProps
)(GetLocation);
export default GetLocationForm;
