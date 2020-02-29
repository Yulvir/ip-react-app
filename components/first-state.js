

const default_results = {
  match: {
    location : {
      longitude: "nan",
      latitude: "nan",
      time_zone: "nan"
    },
    city: {
      names: {
        en: "nan"
      }
    },
    continent: {
      names: {
        en: "nan"
      }
    },
    country: {
      names: {
        en: "nan"
      }
    },
    postal: {
      code: "nan"
    }
  }
};
const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0,
    isLoadingGetInfoIp: true,
    isLoadingMyIp: true,
    results: default_results,
    myIp: "",
    ipSearchError: "",
    isIpSearchError: false,
    ipNotValid: false,
    startedValidating: false,
    copied: false,
    ip: "",
    downloadSpeed: "",
    uploadSpeed: "",
    news: {},
    isGettingNews: false,
    errorGettingNews: false
};
export default exampleInitialState;
