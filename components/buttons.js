import React from 'react'
import {useDispatch} from 'react-redux'
import {fetchMyIp, fetchMyIpAndGetInfoIp} from "../actions/actions-creators";

export default () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(fetchMyIp())}>Fetch my Ip</button>
            <button onClick={() => dispatch(fetchMyIpAndGetInfoIp())}>Fetch my Ip And Get info ip</button>
        </div>
    )
}
