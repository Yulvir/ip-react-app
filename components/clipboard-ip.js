import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useDispatch, useSelector} from 'react-redux'
import {setCopied} from "../actions/actions";


export default () => {
    const copied = useSelector(state => state.copied);
    const myIp = useSelector(state => state.myIp);
    const dispatch = useDispatch();

    const displayTitle = () => {

        return (
            <div className="alert alert-light" role="alert">
                <CopyToClipboard text={myIp}
                                 onCopy={() => dispatch(setCopied())}>
                    <h2>Your ip is {myIp}</h2>
                </CopyToClipboard>
            </div>
        )
    };


    return (
        <div>
            {displayTitle()}
            {copied ? <span style={{color: 'red'}}>Copied</span> : null}

        </div>
    )
}
