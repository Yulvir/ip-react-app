import { SET_LATLON } from "../constants/action-types";
export function setLocationInfo(payload) {
  return { type: SET_LATLON, payload };
}

