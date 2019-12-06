import React, {Component} from 'react';
import axios from 'axios';
import 'weather-icons/css/weather-icons.css';
import {connect, Provider} from "react-redux";
import {setLocationSearch} from "../js/actions/latitude-longitude-action";
import store from "../js/store";
import {setIpSearch} from "../js/actions/ip-action";
function mapDispatchToProps(dispatch) {
    return {
        setIpSearch: output => dispatch(setIpSearch(output))
    };
}

const mapStateToProps = (state) => {
  return { locationObject: state };
};

class IpSearchHandle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayResults: true,
            ipNotValid: false,
            items: [],
        };

        store.subscribe(() => {
          // When state will be updated(in our case, when items will be fetched),
          // we will update local component state and force component to rerender
          // with new data.
          this.setState({
            ownIpItems: store.getState().ownIpInfo,
            ipItems: store.getState().ipInfo
      });
    });


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

    //submit a GET request
    handleSubmit = (e) => {
        e.preventDefault();
        const loc = this.state.ip;
        this.axiosGETreq(loc);
    };

    componentWillMount = () => {
        const cachedData = JSON.parse(localStorage.getItem('data'));

        if (cachedData) {
            //set state with cached data
            this.setState({
                ip: cachedData.ip,
                ownIp: cachedData.ownIp
            });
        }
    };


    axiosGETreq = (IP) => {
        axios.get(`http://127.0.0.1:5000?ip=${IP}`)
            .then(res => {
                const locationData = {
                    longitude: res.data.match.location.longitude,
                    latitude: res.data.match.location.latitude,
                    ip: IP,
                    displayResults: true,
                    cityName: res.data.match.city.names.en,
                    continentName: res.data.match.continent.names.en,
                    countryName: res.data.match.country.names.en,
                    postalCode: res.data.match.postal.code,
                    timeZone: res.data.match.location.time_zone,

                };

                this.setState(locationData);

                this.props.setIpSearch(this.state);

                localStorage.setItem('data', JSON.stringify(locationData));
            })
            .catch(error => {
                console.log(error);
            });
    }


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
