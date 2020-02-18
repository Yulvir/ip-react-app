
// ACTIONS
import {actionTypes} from "./actions-types";

export const validateIp = (ipNotValid, ip) => ({type: actionTypes.IP_NOT_VALID, payload: {ipNotValid: ipNotValid, ip: ip}});
export const setStartIpValidation = (hasStarted) => ({type: actionTypes.SET_START_IP_VALIDATION, payload: hasStarted});

export const setCopied = (copied) => ({type: actionTypes.SET_IP_COPIED, payload: copied});

export const getMyIpRequest = () => ({type: actionTypes.GET_MY_IP_REQUEST});
export const getMyIpSuccess = myIp => ({type: actionTypes.GET_MY_IP_SUCCESS, payload: myIp});
export const setMyIp = myIp => ({type: actionTypes.SET_MY_IP, payload: myIp});
export const getMyIpError = errors => ({type: actionTypes.GET_MY_IP_ERROR, errors});


export const getLocationInfoRequest = () => ({type: actionTypes.GET_LOCATION_INFO_REQUEST});
export const getLocationInfoSuccess = results => ({type: actionTypes.GET_LOCATION_INFO_SUCCESS, payload: results});
export const getLocationInfoError = errors => ({type: actionTypes.GET_LOCATION_INFO_ERROR, errors});

export const setLocation = location => ({type: actionTypes.SET_LOCATION, payload: location});


export const getInfoIpRequest = () => ({type: actionTypes.GET_INFO_IP_REQUEST});
export const getInfoIpSuccess = results => ({type: actionTypes.GET_INFO_IP_SUCCESS, payload: results});
export const getInfoIpError = errors => ({type: actionTypes.GET_INFO_IP_ERROR, errors});
