import Head from "next/head";
import React from "react";
import BASE_URL from '../config'


const Header = () => (
   <Head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description"
                          content="We geolocate any Ip through Maxmind Services. An IP address is an Internet Protocol Address. We also provide CIDR block utilities"/>
                    <meta name="author" content="getinfoip.com"/>
                    <title>Ip Translation Geographical Location Services for free</title>
                    <link href="/static/bootstrap/css/bootstrap.css" rel="stylesheet"/>
                    <script data-ad-client="ca-pub-1798210451736488" async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
                    <script src="/static/assets/assets/js/jquery.min.js"/>
                    <script src="/static/assets/assets/js/popper.js"/>
                    <script src="/static/bootstrap/js/bootstrap.min.js"/>

                    <link rel="shortcut icon" href={`${BASE_URL}/favicon.ico`} />
                    <link rel="apple-touch-icon" href={`${BASE_URL}/favicon.ico`} />
                    <link rel="apple-touch-icon" href={`${BASE_URL}/favicon.ico`} />
                    <link rel="apple-touch-icon" href={`${BASE_URL}/favicon.ico`} />
                    <link rel="apple-touch-icon" href={`${BASE_URL}/favicon.ico`} />

                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content={`${BASE_URL}/favicon.ico`}/>
                    <meta property="og:title" content= "Ip Translation Geographical Location Services for free"/>
                    <meta property="og:description" content="We geolocate any Ip through Maxmind Services. An IP address is an Internet Protocol Address. We also provide CIDR block utilities"/>
                    <meta property="og:site_name" content="getinfoip.com"/>
                    <meta property="og:url" content={`${BASE_URL}`} />

                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:image" content={`${BASE_URL}/favicon.ico`}/>
                    <meta name="twitter:creator" content="@getinfoip"/>
                    <meta name="twitter:site" content="@getinfoip"/>
                    <meta name="twitter:title" content="Ip Translation Geographical Location Services for free"/>
                    <meta name="twitter:description" content="We geolocate any Ip through Maxmind Services. An IP address is an Internet Protocol Address. We also provide CIDR block utilities"/>


                </Head>
);

export default Header;