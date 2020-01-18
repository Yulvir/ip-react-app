import React, {Component} from 'react';

let SubnetCIDRAdviser = require('subnet-cidr-calculator');
const IpCidr = require("ip-cidr");
const cidrRegex = require('cidr-regex');


class Cidr extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ipStart: "",
            ipEnd: "",
            cidrNotValid: false,
            cidr: ""
        };


    }


    inputDisplayPlaceHolder = () => {
        return this.state.cidr
    };

    displayInput = () => {
            return (
                <input className="form-control" type="text" aria-label="Search"
                       placeholder={this.inputDisplayPlaceHolder()}
                       onChange={this.handleSearch}/>
            )
    };

    //update state with search value
    handleSearch = (event) => {

        const value = event.target.value;

        const cidrRegexValid = cidrRegex().test(value);

            if (cidrRegexValid) {
                const cidr = new IpCidr(value);

                if (!cidr.isValid()) {
                    this.setState({
                        cidrNotValid: true
                    });
                    console.log("Invalid CIDR")
                }
                else{
                    let ip_range = SubnetCIDRAdviser.getIpRangeForSubnet(value);
                    console.log('IP range for 10.0.32.0/20 is', ip_range);

                    this.setState({
                        cidrNotValid: false,
                        ipStart: ip_range.start,
                        ipEnd: ip_range.end
                  });
                    console.log("Valid CIDR")
            }
            } else {
                this.setState({
                      cidrNotValid: true
                  });
                console.log("Invalid regex for CIDR")
            }
    };

    //submit a GET request
    handleSubmit = (e) => {
        e.preventDefault();
    };


    render() {
        return (
            <div className="container-fluid">


                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h4 className="my-0 font-weight-lighter ">CIDR calculation</h4>
                        </div>
                        <div className="card-body">
                                {
                                    this.state.cidrNotValid && (
                                        <div className="alert alert-danger" role="alert">
                                            CIDR not valid
                                        </div>
                                    )
                                }
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

                        <div className="card-body">

                            <h1>{this.state.ipStart}</h1>
                            <h1>{this.state.ipEnd}</h1>
                        </div>


                    </div>

                </div>

            </div>
        );
    }
}

export default Cidr
