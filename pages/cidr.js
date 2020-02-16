import React, {Component} from 'react';

let SubnetCIDRAdviser = require('subnet-cidr-calculator');
const IpCidr = require("ip-cidr");
const cidrRegex = require('cidr-regex');
import Router from 'next/router';

class Cidr extends React.Component {
    static getInitialProps({store}) {
        return {};
    }

    constructor(props) {
        super(props);

        this.state = {
            ipStart: "",
            ipEnd: "",
            cidrNotValid: false,
            cidr: ""
        };


        this.handleSearchPhraseChange = this.handleSearchPhraseChange.bind(this);
        this.redirectToSearchPage = this.redirectToSearchPage.bind(this);
    }

    handleSearchPhraseChange(event) {

        const value = event.target.value;

        const cidrRegexValid = cidrRegex().test(value);

        if (cidrRegexValid) {
            const cidr = new IpCidr(value);

            if (!cidr.isValid()) {
                this.setState({
                    cidrNotValid: true
                });
                console.log("Invalid CIDR")
            } else {
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
    }


    redirectToSearchPage() {
        Router.push({
            pathname: '/search',
            query: {q: this.state.searchPhrase, f: this.state.selectedFormat},
        });
    }

    inputDisplayPlaceHolder = () => {
        return this.state.cidr
    };

    displayInput = () => {
        return (
            <input className="form-control" type="text" aria-label="Search"
                   placeholder={this.inputDisplayPlaceHolder()}
                   onChange={this.handleSearchPhraseChange}/>
        )
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
                                            <h3>Calculate first and last IP of CIDR block</h3>
                                            <p>example: 10.12.12.12/27</p>
                                            <div className="input-group mb-3">


                                                {this.displayInput()}

                                                <div className="input-group-append">

                                                    <button
                                                        className="btn btn-outline-success btn-rounded btn-sm"
                                                        type="submit">search
                                                    </button>
                                                </div>
                                            </div>


                                            Classless Inter-Domain Routing (CIDR /ˈsaɪdər, ˈsɪ-/) is a method for
                                            allocating IP addresses and IP routing. The Internet Engineering Task Force
                                            introduced CIDR in 1993 to replace the previous addressing architecture of
                                            classful network design in the Internet. Its goal was to slow the growth of
                                            routing tables on routers across the Internet, and to help slow the rapid
                                            exhaustion of IPv4 addresses.[1][2]

                                            IP addresses are described as consisting of two groups of bits in the
                                            address: the most significant bits are the network prefix, which identifies
                                            a whole network or subnet, and the least significant set forms the host
                                            identifier, which specifies a particular interface of a host on that
                                            network. This division is used as the basis of traffic routing between IP
                                            networks and for address allocation policies.

                                            Whereas classful network design for IPv4 sized the network prefix as one or
                                            more 8-bit groups, resulting in the blocks of Class A, B, or C addresses,
                                            Classless Inter-Domain Routing allocates address space to Internet service
                                            providers and end users on any address-bit boundary. In IPv6, however, the
                                            interface identifier has a fixed size of 64 bits by convention, and smaller
                                            subnets are never allocated to end users.

                                            CIDR encompasses several concepts. It is based on the variable-length subnet
                                            masking (VLSM) technique, which allows the specification of arbitrary-length
                                            prefixes. CIDR introduced a new method of representation for IP addresses,
                                            now commonly known as CIDR notation, in which an address or routing prefix
                                            is written with a suffix indicating the number of bits of the prefix, such
                                            as 192.0.2.0/24 for IPv4, and 2001:db8::/32 for IPv6. CIDR introduced an
                                            administrative process of allocating address blocks to organizations based
                                            on their actual and short-term projected needs. The aggregation of multiple
                                            contiguous prefixes resulted in supernets in the larger Internet, which
                                            whenever possible are advertised as aggregates, thus reducing the number of
                                            entries in the global routing table.

                                            <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Sources(Wikipedia)</a>


                                        </div>
                                    </form>
                                </div>

                                <div className="card-body">

                                    {
                                        this.state.ipStart && !this.state.cidrNotValid && (
                                            <div>

                                                <h1>First Ip: {this.state.ipStart}</h1>
                                                <h1>Last Ip: {this.state.ipEnd}</h1>
                                            </div>
                                        )

                                    }

                                </div>


                            </div>

                        </div>

                    </div>

        );
    }
}

export default Cidr;
