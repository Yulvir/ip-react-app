import { SET_LATLON } from "../constants/action-types";
export function addLatLon(payload) {
  return { type: SET_LATLON, payload };
}
