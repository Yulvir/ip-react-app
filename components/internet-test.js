import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {startDownloadTest, startDownTest, startUpTest} from "../actions/actions-creators";
import {startUploadTest} from "../actions/actions-creators";

export default () => {
  const dispatch = useDispatch();
  const downloadSpeed = useSelector(state => state.downloadSpeed);
  const uploadSpeed = useSelector(state => state.uploadSpeed);


  const startInternetSpeedTest = () => {

      dispatch(startDownTest());
      dispatch(startUpTest());
  };

  return (
    <div className="card-body">
                            <p>Start your internet test speed right now</p>
                            <div>
                                <button style={{fontSize: "15px"}}
                                        className="btn btn-outline-success btn-rounded btn-sm my-md-n2"
                                        type="submit" onClick={startInternetSpeedTest} >Start Speed Test
                                </button>
                            </div>

        <p>Download Speed: {downloadSpeed.toString()}</p>
        <p>Upload Speed: {uploadSpeed.toString()}</p>

                        </div>
  )
}