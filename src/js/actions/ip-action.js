import {SET_IP, SET_OWN_IP} from "../constants/action-types";

export function setIpSearch(payload) {
  return { type: SET_IP, payload };
}

export function setOwnIp(payload) {
  return { type: SET_OWN_IP, payload };
}