import React from 'react'
import {useSelector} from "react-redux";

export default () => {
    const news = useSelector(state => state.news);

    console.log(news);
    // https://www.npmjs.com/package/react-circular-progressbar
    return (
        <div style={{marginTop: "5%"}}>
        {
            news && (

                <ul>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Download Speed
                    <h4><span className="badge badge-primary badge-pill">{news.toString()} (MBps)</span></h4>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Upload Speed
                    <h4><span className="badge badge-primary badge-pill">{news.toString()} (MBps)</span></h4>
                </li>
                </ul>

        )

}
</div>
)
}
