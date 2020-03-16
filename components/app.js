import {useDispatch, useSelector} from 'react-redux'
import ResultsContent from './results-content'
import GoogleMap from './google-map'
import IntroductionText from './introduction-text'
import React from "react";
import SearchBar from './search-bar'

export default () => {
    const isLoadingGetInfoIp = useSelector(state => state.isLoadingGetInfoIp);
    return (
        <div>

            <div className="container-fluid">
                <div className="mx-auto" style={{width: "400px"}}>

                    <img src="/static/assets/assets/img/getinfoip.png" style={{width: "400px", margin: '0 auto'}}
                         className="img-fluid"
                         alt="getinfoip logo"/>
                </div>

                <div className="card-deck mb-3 text-center">

                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h1 className="my-0 font-weight-lighter ">Search with your current IP</h1>
                        </div>
                        <div className="card-body">
                            <SearchBar/>
                        </div>
                        <div className="card-body">

                            {
                                isLoadingGetInfoIp ? false : (
                                    <div>
                                        <ResultsContent/>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h1 className="my-0 font-weight-lighter">Google Map</h1>
                        </div>


                        <div className="embed-responsive embed-responsive-1by1">
                            <div className="embed-responsive-item">
                                {isLoadingGetInfoIp ? false : (
                                    <div>
                                        <GoogleMap/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
                <IntroductionText/>


            </div>
        </div>
    )
}
