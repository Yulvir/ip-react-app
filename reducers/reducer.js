// REDUCERS
import {actionTypes} from "../actions/actions-types";
import exampleInitialState from "../components/first-state";

function adaptLocationResponseSchema(payload, state) {
    const nan = "nan";
    console.log(state);
    const res = {
        match: {
            location: {
                longitude: state.location.lon,
                latitude: state.location.lat,
                time_zone: payload.location_info.time_zone ? payload.location_info.time_zone : nan
            },
            city: {
                names: {
                    en: payload.location_info.city ? payload.location_info.city : nan,
                }
            },
            continent: {
                names: {
                    en: payload.location_info.continent ? payload.location_info.continent : nan
                }
            },
            country: {
                names: {
                    en: payload.location_info.country ? payload.location_info.country : nan
                }
            },
            postal: {
                code: payload.location_info.postcode ? payload.location_info.postcode : nan
            }
        }
    };
    console.log(res);
    return res
}


function adaptGetInfoIpResponseSchema(payload) {
    const nan = "nan";
    const res = {
        match: {
            location: {
                longitude:   payload.match.location.longitude ?  payload.match.location.longitude: nan,
                latitude:  payload.match.location.latitude ?  payload.match.location.latitude: nan,
                time_zone:  payload.match.location.time_zone ?  payload.match.location.time_zone : nan
            },
            city: {
                names: {
                    en:  payload.match.city.names.en ?  payload.match.city.names.en  : nan,
                }
            },
            continent: {
                names: {
                    en:  payload.match.continent.names.en ?  payload.match.continent.names.en : nan
                }
            },
            country: {
                names: {
                    en:  payload.match.country.names.en ?  payload.match.country.names.en : nan
                }
            },
            postal: {
                code:  payload.match.postal.code ?  payload.match.postal.code : nan
            }
        }
    };
    console.log(res);
    return res
}

export const reducer = (state = exampleInitialState, action) => {


    switch (action.type) {

        case actionTypes.IP_NOT_VALID:
            return Object.assign({}, state, {
                ...state,
                ip: action.payload.ip,
                ipNotValid: action.payload.ipNotValid,
            });

        case actionTypes.SET_START_IP_VALIDATION:
            return Object.assign({}, state, {
                ...state,
                startedValidating: action.payload,
            });
        case actionTypes.SET_MY_IP:
            return Object.assign({}, state, {
                ...state,
                myIp: action.payload,
            });

        // SET MY LOCATION FROM BROWSER
        case actionTypes.GET_LOCATION_INFO_REQUEST:
            return Object.assign({}, state, {
                ...state,
                isLoadingGetInfoIp: true
            });

        case actionTypes.GET_LOCATION_INFO_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                results: adaptLocationResponseSchema(action.payload, state),
                isLoadingGetInfoIp: false
            });

        case actionTypes.GET_LOCATION_INFO_ERROR:
            return Object.assign({}, state, {
                ...state,
                isLoadingGetInfoIp: true
            });


        // GET MY IP
        case actionTypes.GET_MY_IP_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                myIp: action.payload,
                isLoadingMyIp: false
            });

        case actionTypes.GET_MY_IP_REQUEST:
            return Object.assign({}, state, {
                ...state,
                isLoadingMyIp: true
            });

        case actionTypes.GET_MY_IP_ERROR:
            return Object.assign({}, state, {
                ...state,
                isLoadingMyIp: true
            });


        case actionTypes.SET_IP_COPIED:
            return Object.assign({}, state, {
                ...state,
                copied: action.payload
            });

        case actionTypes.GET_INFO_IP_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                results: adaptGetInfoIpResponseSchema(action.payload),
                isLoadingGetInfoIp: false,
                isIpSearchError: false
            });
        case actionTypes.GET_INFO_IP_ERROR:
            return Object.assign({}, state, {
                ...state,
                isLoadingGetInfoIp: true,
                ipSearchError: action.payload,
                isIpSearchError: true
            });
        case actionTypes.GET_INFO_IP_REQUEST:
            return Object.assign({}, state, {
                ...state,
                isLoadingGetInfoIp: true
            });
        case actionTypes.SET_IP:
            return Object.assign({}, state, {
                ...state,
                ip: action.payload,
                isLoadingGetInfoIp: true
            });
        case actionTypes.SET_LOCATION:
            return Object.assign({}, state, {
                ...state,
                location: action.payload,
            });

        case actionTypes.SET_DOWNLOAD_SPEED:
            return Object.assign({}, state, {
                ...state,
                downloadSpeed: action.payload,
            });

        case actionTypes.START_GETTING_NEWS:
            return Object.assign({}, state, {
                ...state,
                errorGettingNews: false,
                isGettingNews: true
            });
        case actionTypes.FINISH_GETTING_NEWS:
            return Object.assign({}, state, {
                ...state,
                news: action.payload,
                isGettingNews: true,
                errorGettingNews: false,
            });
        case actionTypes.ERROR_GETTING_NEWS:
            return Object.assign({}, state, {
                ...state,
                news: action.payload,
                isGettingNews: false,
                errorGettingNews: true
            });

        case actionTypes.SET_UPLOAD_SPEED:
            return Object.assign({}, state, {
                ...state,
                uploadSpeed: action.payload,
            });

        default:
            return state
    }
};

