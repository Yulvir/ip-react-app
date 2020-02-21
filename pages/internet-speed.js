import Link from 'next/link'
import React from "react";
import InternetTest from '../components/internet-test'
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

        }

        return {}
    }


    startInternetSpeedTest = () => {

    };

    render() {

        return (
            <div className="container-fluid">


                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h4 className="my-0 font-weight-lighter ">Internet Speed Test</h4>
                        </div>
                        <InternetTest/>

                    </div>

                </div>

            </div>

        )
    }

}

export default InternetSpeed;