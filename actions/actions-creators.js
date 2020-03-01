import BASE_URL from "../components/config";
import fetch from "cross-fetch";
import publicIp from "public-ip";
import {
    errorGettingNews, finishGettingNews,
    getInfoIpError,
    getInfoIpRequest,
    getInfoIpSuccess, getLocationInfoError, getLocationInfoRequest, getLocationInfoSuccess,
    getMyIpError,
    getMyIpRequest,
    getMyIpSuccess, setDownloadSpeed, setMyIp, setUploadSpeed, startDownloadTest, startGettingNews, startUploadTest,
} from "./actions";

const NetworkSpeed = require('network-speed');
const testNetworkSpeed = new NetworkSpeed();


export const fetchMyIp = () => {
    return async (dispatch) => {
        dispatch(getMyIpRequest());
        const ipv4 = await publicIp.v4() || "";
        if (ipv4) {
            return dispatch(getMyIpSuccess(ipv4));
        } else {
            return dispatch(getMyIpError(["Error fetching my ip"]));
        }
    };
};


export const startDownTest = () => {
    return async (dispatch) => {
        dispatch(startDownloadTest());

        // https://www.npmjs.com/package/network-speed

        const size = "300000000";
        const baseUrl = `https://eu.httpbin.org/stream-bytes/${size}`;
        const fileSizeInBytes = 50000000;
        const fileSizeInBytes2 = 300000000;
        const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
        console.log(speed);
        dispatch(setDownloadSpeed(speed.mbps / 8));

    };
};
export const startUpTest = () => {
    return async (dispatch) => {
        dispatch(startUploadTest());
        // https://www.npmjs.com/package/network-speed
        let options = {};
        console.log(BASE_URL);
            let hostName = "https://getinfoip.com";
            let path = "/api/catcher";

             options = {
            hostname: hostName,
            path: path,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (BASE_URL.includes("localhost")){

                    hostName = "localhost";
        port = 5000;
        path = "/catcher";
         options = {
            hostname: hostName,
            port: port,
            path: path,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        };
        }


        const fileSizeInBytes = 2000000;

        const fileSizeInBytes2 = 10000000;

        const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
        console.log(speed);
        dispatch(setUploadSpeed((speed.mbps / 8)))
    };
};


export const getInfoIp = (ip) => {
    return async (dispatch) => {
        dispatch(getInfoIpRequest());
        const url = `${BASE_URL}/ip_info?ip=${ip}`;

        const response = await fetch(url);
        const json = await response.json();
        if (response.status === 200) {
            return dispatch(getInfoIpSuccess(json));
        }
        else if (response.status === 404){
            return dispatch(getInfoIpError(`Ip ${ip} not found`));
        }
        else {
            return dispatch(getInfoIpError("Unknown error"));
        }
    };
};

export const getLocationResults = (location) => {
    return async (dispatch) => {
        dispatch(getLocationInfoRequest());
        const url = `${BASE_URL}/location_info`;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(location),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        if (response.status === 200) {
            return dispatch(getLocationInfoSuccess(json));
        } else {
            return dispatch(getLocationInfoError(["Get info ip error"]));
        }
    };
};

export const getNews = (query) => {
    return async (dispatch) => {
        dispatch(startGettingNews());
        const body = {phrase: query};
        const url = `${BASE_URL}/news`;
        console.log(url);
        const response = await fetch(url, {
            method: "GET",
        });
        const json = await response.json();
        if (response.status === 200) {
            console.log(json);
            return dispatch(finishGettingNews(json));
        } else {
            return dispatch(errorGettingNews([`Getting news error ${response.statusText}`]));
        }
    };
};

// Now we can combine them
export function setGetInfoIpResults() {
    // Again, Redux Thunk will inject dispatch here.
    // It also injects a second argument called getState() that lets us read the current state.

    return function (dispatch, getState) {
        return dispatch(getInfoIp(getState().ip))
    }
}

// Now we can combine them
export function setGetLocationResults() {
    // Again, Redux Thunk will inject dispatch here.
    // It also injects a second argument called getState() that lets us read the current state.

    return function (dispatch, getState) {
        return dispatch(getLocationResults(getState().location))
    }
}


export function startDownloadAndUploadTests() {
    return function (dispatch, getState) {
        // Remember I told you dispatch() can now handle thunks?
        return dispatch(startDownTest()).then(() => {
            // Assuming this is where the fetched user got stored

            // Assuming it has a "postIDs" field:
            // And we can dispatch() another thunk now!
            return dispatch(startUpTest())
        }).catch(reason => console.log(reason))
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
            // Assuming it has a "postIDs" field:
            // And we can dispatch() another thunk now!
            return dispatch(getInfoIp(targetIp))
        }).catch(reason => console.log(reason))
    }
}

// Now we can combine them
export function setMyIpAndGetInfoIp() {
    // Again, Redux Thunk will inject dispatch here.
    // It also injects a second argument called getState() that lets us read the current state.
    return function (dispatch, getState) {
        // Remember I told you dispatch() can now handle thunks?
        return dispatch(setMyIp()).then(() => {
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

