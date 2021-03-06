import React from 'react'
import {useSelector} from 'react-redux'
import ClipBoardIp from "./clipboard-ip";
import IpSearchHandle from "./search-ip";
import GetLocationFromBrowser from "./get-location-from-browser";

export default () => {
    const ipNotValid = useSelector(state => state.ipNotValid);
    const isIpSearchError = useSelector(state => state.isIpSearchError);
    const ipSearchError = useSelector(state => state.ipSearchError);

    return (
        <div>
            {
                ipNotValid && (
                    <div className="alert alert-danger" role="alert">
                            Ip not valid
                        </div>
                )

            }{
                isIpSearchError && (
                    <div className="alert alert-danger" role="alert">
                           {ipSearchError}
                        </div>
                )

            }
            <ClipBoardIp/>
            <IpSearchHandle/>
            <GetLocationFromBrowser/>
        </div>
    )
}
