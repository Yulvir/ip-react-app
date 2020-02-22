import React from 'react'
import {useSelector} from "react-redux";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

export default () => {
    const downloadSpeed = useSelector(state => state.downloadSpeed);
    const uploadSpeed = useSelector(state => state.uploadSpeed);
    const percentage = 66;
    // https://www.npmjs.com/package/react-circular-progressbar
    return (
        <div style={{marginTop: "5%"}}>
        {
            downloadSpeed && (

                <ul>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Download Speed
                    <h4><span className="badge badge-primary badge-pill">{downloadSpeed.toString()} (MBps)</span></h4>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Upload Speed
                    <h4><span className="badge badge-primary badge-pill">{uploadSpeed.toString()} (MBps)</span></h4>
                </li>
                </ul>

        )

}
</div>
)
}
