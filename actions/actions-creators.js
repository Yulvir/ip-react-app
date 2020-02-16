import BASE_URL from "../components/config";
import fetch from "cross-fetch";
import publicIp from "public-ip";
import {
    getInfoIpError,
    getInfoIpRequest,
    getInfoIpSuccess, getLocationInfoError, getLocationInfoRequest, getLocationInfoSuccess,
    getMyIpError,
    getMyIpRequest,
    getMyIpSuccess,
} from "./actions";

export const fetchMyIp = () => {
    return async (dispatch) => {
        dispatch(getMyIpRequest());
        const ipv4 = await publicIp.v4() || "";
        console.log(ipv4);
        if (ipv4) {
            return dispatch(getMyIpSuccess(ipv4));
        } else {
            return dispatch(getMyIpError(["Error fetching my ip"]));
        }
    };
};


export const getInfoIp = (ip) => {
    return async (dispatch) => {
        dispatch(getInfoIpRequest());
        const url = `${BASE_URL}/ip_info?ip=${ip}`;

        const response = await fetch(url);
        console.log("Status code HTTP Flask: " + response.status);
        const json = await response.json();
        if (response.status === 200) {
            console.log(json);
            return dispatch(getInfoIpSuccess(json));
        } else {
            return dispatch(getInfoIpError(["Get info ip error"]));
        }
    };
};

export const getLocationResults = (location) => {
    return async (dispatch) => {
        dispatch(getLocationInfoRequest());
        const url = `${BASE_URL}/location_info`;
        console.log(location);
        const response = await fetch(url, {method: "POST", body: JSON.stringify(location), headers: {"Content-Type": "application/json"}});
        console.log("Geolocation Status code HTTP Flask: " + response.status);
        const json = await response.json();
        console.log(json);
        if (response.status === 200) {
            console.log(json);
            return dispatch(getLocationInfoSuccess(json));
        } else {
            return dispatch(getLocationInfoError(["Get info ip error"]));
        }
    };
};


// Now we can combine them
export function setGetInfoIpResults() {
    // Again, Redux Thunk will inject dispatch here.
    // It also injects a second argument called getState() that lets us read the current state.

    return function (dispatch, getState) {
        console.log("Submitting ip from search bar");
        console.log(getState().ip);
        return dispatch(getInfoIp(getState().ip))
    }
}

// Now we can combine them
export function setGetLocationResults() {
    // Again, Redux Thunk will inject dispatch here.
    // It also injects a second argument called getState() that lets us read the current state.

    return function (dispatch, getState) {
        console.log("Submitting ip from search bar");
        console.log(getState().location);
        return dispatch(getLocationResults(getState().location))
    }
}

// Now we can combine them
export function fetchMyIpAndGetInfoIp() {
    // Again, Redux Thunk will inject dispatch here.
    // It also injects a second argument called getState() that lets us read the current state.
    return function (dispatch, getState) {
        // Remember I told you dispatch() can now handle thunks?
        return dispatch(fetchMyIp()).then(() => {
            // Assuming this is where the fetched user got stored
            const myIp = getState().myIp;
            const ip = getState().ip;
            let targetIp = myIp;
            if (ip !== "") {
                targetIp = ip
            }
            console.log("TARGET IP IS " + targetIp);
            console.log(targetIp);
            // Assuming it has a "postIDs" field:
            // And we can dispatch() another thunk now!
            return dispatch(getInfoIp(targetIp))
        }).catch(reason => console.log(reason))
    }
}


//REDUX-THUNK actions


//
// export function getInfoIp(ip) {
//   return function(dispatch) {
//     dispatch(setInfoIp(ip));
//
//   }
// }