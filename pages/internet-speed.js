import Link from 'next/link'
import React from "react";
import InternetTest from '../components/internet-test'


class InternetSpeed extends React.Component {
    static async getInitialProps({reduxStore, req}) {
        const isServer = !!req;

        if (isServer) {
            console.log("is server")
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
                        <InternetTest/>

                    </div>

                </div>

            </div>

        )
    }

}

export default InternetSpeed;