import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
    localStorage.setItem("authTokenCookbook", token);
  } else {
    delete axios.defaults.headers.common.Authorization;
    localStorage.removeItem("authTokenCookbook");
  }
};

export default setAuthToken;
