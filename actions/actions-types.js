const prefix = "MyIp";

export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',

    VALID_IP: `${prefix} VALID IP`,
    SET_IP_COPIED: `${prefix} SET IP COPIED`,
    SET_LOCATION: `${prefix} SET LOCATION`,
    SET_IP: `${prefix} SET IP`,
    SET_MY_IP: `${prefix} SET MY IP`,

    IP_IS_VALID: `${prefix} Valid ip`,
    SET_START_IP_VALIDATION: `${prefix} Set Start Ip Validation`,
    IP_NOT_VALID: `${prefix} Ip not Valid`,

    GET_INFO_IP_REQUEST: `${prefix} Get Info Ip Request`,
    GET_INFO_IP_SUCCESS: `${prefix} Get Info Ip Success`,
    GET_INFO_IP_ERROR: `${prefix} Get Info Ip Error`,

    GET_LOCATION_INFO_REQUEST: `${prefix} Get Location Info Request`,
    GET_LOCATION_INFO_SUCCESS: `${prefix} Get Location Info Success`,
    GET_LOCATION_INFO_ERROR: `${prefix} Get Location Info Error`,

    GET_MY_IP_REQUEST: `${prefix} Get My Ip Request`,
    GET_MY_IP_SUCCESS: `${prefix} Get My Ip Success`,
    GET_MY_IP_ERROR: `${prefix} Get My Ip Error`,

    START_DOWNLOAD_TEST: `${prefix} Start Download Test`,
    START_UPLOAD_TEST: `${prefix} Start Upload Test`,

    SET_DOWNLOAD_SPEED: `${prefix} Set Download Speed`,
    SET_UPLOAD_SPEED: `${prefix} Set Upload Speed`,

    SET_PROGRESS_DOWNLOAD_SPEED : `${prefix} Set Progress Download Speed`,
    SET_PROGRESS_UPLOAD_SPEED : `${prefix} Set Progress Upload Speed`,

    SET_CLIENT_REQUEST : `${prefix} Set Client Request`,
        START_GETTING_NEWS : `${prefix} Start Getting News`,
    FINISH_GETTING_NEWS : `${prefix} Finish Getting News`,
    ERROR_GETTING_NEWS : `${prefix} Error Getting News`
};
