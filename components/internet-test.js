import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startDownloadAndUploadTests} from "../actions/actions-creators";
import InternetTestResults from "../components/internet-test-results"

export default () => {
    const dispatch = useDispatch();

    const startInternetSpeedTest = () => {
            // Runs 5 times, with values of step 0 through 4.
            dispatch(startDownloadAndUploadTests());
    };

    return (
        <div className="card-body">
            <p>Start your internet test speed right now</p>
            <div>
                <button style={{fontSize: "15px"}}
                        className="btn btn-outline-success btn-rounded btn-sm my-md-n2"
                        type="submit" onClick={startInternetSpeedTest}>Start Speed Test
                </button>
            </div>
            <InternetTestResults/>


        </div>
    )
}