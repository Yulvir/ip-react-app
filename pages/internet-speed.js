import Link from 'next/link'
import React from "react";

var speedTest = require('speedtest-net');
var test = speedTest();


class InternetSpeed extends React.Component {
    static async getInitialProps({reduxStore, req}) {
        const isServer = !!req;

        if (isServer) {

            // Fired when download speed is found
            require('speedtest-net')().on('downloadspeed', speed => {
                console.log('Download speed:', (speed * 125).toFixed(2), 'KB/s');
            });
            // Fired when upload speed is found
            require('speedtest-net')().on('uploadspeed', speed => {
                console.log('Upload speed:', (speed * 125).toFixed(2), 'KB/s');
            });

            require('speedtest-net')().on('downloadspeedprogress', speed => {
                console.log('Download speed (in progress):', (speed * 125).toFixed(2), 'KB/s');
            });
            require('speedtest-net')().on('uploadspeedprogress', speed => {
                console.log('Upload speed (in progress):', (speed * 125).toFixed(2), 'KB/s');
            });
        }

        return {}
    }


    render() {

        return (
            <div className="container-fluid">


                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h4 className="my-0 font-weight-lighter ">Internet Speed Test</h4>
                        </div>
                        <div className="card-body">

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-success btn-rounded btn-sm"
                                        type="submit">Start Speed Test
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }

}

export default InternetSpeed;