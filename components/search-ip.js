import React from 'react';
import {setStartIpValidation, validateIp} from "../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {setGetInfoIpResults} from "../actions/actions-creators";


export default () => {
    const dispatch = useDispatch();

    const ipNotValid = useSelector(state => state.ipNotValid);
    const startedValidating = useSelector(state => state.startedValidating);
    const myIp = useSelector(state => state.myIp);
    const ip = useSelector(state => state.ip);

    //update state with search value
    const handleSearch = (event) => {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(event.target.value)) {
            console.log("IP VALID");
            dispatch(validateIp(false, event.target.value));
        } else {
            console.log("IP NOT VALID");
            dispatch(validateIp(true, event.target.value));
        }
        dispatch(setStartIpValidation(true));
    };



    //submit a GET request
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ipNotValid);
        console.log(startedValidating);

        if (!ipNotValid && !!startedValidating) {
            dispatch(setGetInfoIpResults(ip))
        }
            else{
                dispatch(validateIp(true, ip));
            }

    };
    const displayInput = () => {
        return (
            <input className="form-control" type="text" aria-label="Search"
                   placeholder={"Your current IP \t ==> \t" + myIp}
                   onChange={handleSearch}/>
        )
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div style={{marginTop: "5%"}}>
                        <div className="input-group mb-3">
                            {displayInput()}
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-success btn-rounded btn-sm"
                                    type="submit">search
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}