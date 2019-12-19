import React, {Component} from 'react';
import axios from 'axios';
import 'weather-icons/css/weather-icons.css';
import {connect, Provider} from "react-redux";
import {setLocationInfo} from "../js/actions/latitude-longitude-action";
import store from "../js/store";
import {setIpSearch} from "../js/actions/ip-action";
import publicIP from "react-native-public-ip";
function mapDispatchToProps(dispatch) {
    return {
        setLocationInfo: output => dispatch(setLocationInfo(output))
    };
}

const mapStateToProps = (state) => {
  return { locationObject: state };
};

class IpSearchHandle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ipNotValid: false,
            ownIpItems: [],
            ipItems: [],
        };

        store.subscribe(() => {
          // When state will be updated(in our case, when items will be fetched),
          // we will update local component state and force component to rerender
          // with new data.
          this.setState({
            ownIpItems: store.getState().ownIpInfo,
            ipItems: store.getState().ipInfo
      });
          this.state.ownIp = store.getState().ownIpInfo.ownIp;
    });

        this.state.ip = this.state.ownIp;
        if(this.state.ip){

            this.requestIpInfo(this.state.ownIp)
        }

        }

    //update state with search value
    handleSearch = (event) => {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(event.target.value)) {
            this.setState({
                ip: event.target.value,
                ipNotValid: false
            });
        } else {
            this.setState({
                ip: event.target.value,
                ipNotValid: true
            });
        }


    };
    // 916 974 154

    requestIpInfo = (ip) => {
        this.axiosGETreq(ip);
    };

    //submit a GET request
    handleSubmit = (e) => {
        e.preventDefault();
        this.requestIpInfo(this.state.ip)
    };

    componentWillMount = () => {
        const cachedData = JSON.parse(localStorage.getItem('data'));

        if (cachedData) {
            //set state with cached data
            this.setState({
                ip: cachedData.ip,
                ownIp: cachedData.ownIp
            });

            this.props.setLocationInfo(cachedData);

        }

    };
    componentDidMount() {
        if(this.state.ownIp) {
            this.requestIpInfo(this.state.ownIp)
        }
    }

    axiosGETreq = async(IP) => {
        console.log("HTTP request geolocate this ip: " + IP);
        let res = await axios.get(`https://getinfoip.com/api/?ip=${IP}`);
        console.log("Status code HTTP Flask: " + res.status);
        const nan = "No data";
        const locationData = {
            longitude: res.data.match.location ? res.data.match.location.longitude : nan,
            latitude: res.data.match.location ? res.data.match.location.latitude : nan,
            ip: IP,
            ownIp: this.state.ownip,
            cityName: res.data.match.city ? res.data.match.city .names.en : nan,
            continentName: res.data.match.continent ? res.data.match.continent.names.en : nan,
            countryName: res.data.match.country ? res.data.match.country.names.en : nan,
            postalCode: res.data.match.postal ? res.data.match.postal.code : nan,
            timeZone: res.data.match.location ? res.data.match.location.time_zone : nan

        };

        this.setState(locationData);

        this.props.setLocationInfo(locationData);

        localStorage.setItem('data', JSON.stringify(locationData));

    };


    displayInput = () => {

    return [this.state.ownIpItems].map((store, index) => {
      return  (

          <input className="form-control" type="text" aria-label="Search"
                                       placeholder={"Your current IP \t ==> \t" + store.ownIp}
                                       onChange={this.handleSearch}/>

                                       )
    })



  };


    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{marginTop: "5%"}}>
                            <div className="input-group mb-3">


                                {this.displayInput()}


                                <div className="input-group-append">

                                    <button
                                        className="btn btn-outline-success btn-rounded btn-sm"
                                        type="submit">search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

const IpSearchHandleForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(IpSearchHandle);
export default IpSearchHandleForm;
