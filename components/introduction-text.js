import React from 'react';
import Link from 'next/link';

export default () => {
        return (

            <div className="container-fluid">

                <div className="card-deck mb-3 text-center">

                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h1 className="my-0 font-weight-lighter text-dark ">What do we do?</h1>
                        </div>
                        <div className="card-body">
                            <h1>We geolocate any Ip through MaxMind Services. We also provide CIDR block utilities</h1>
                            <p>We are improving our website every day. Our goal is to provide an intuitive user interface where users can get data-driven answers </p>
                            <h2>Ip Geolocation Services</h2>
                            <p>Our backend is currently using MaxMind geolite2 databases. We enrich IP's with geolocation data and present it in a user friendly way.</p>
                            <Link href="/content" ><p>What is IP address?</p></Link>
                            <h2>CIDR Block calculation</h2>
                            <p>Give us a CIDR block and get the most important features of that CIDR block</p>
                            <Link href="/cidr" ><p>Try now</p></Link>
                        </div>

                    </div>

                </div>

            </div>

        );
}


