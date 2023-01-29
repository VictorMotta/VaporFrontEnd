import axios from "axios";

const BASE_URL = "http://localhost:5000";

function singUp(body, config) {
  return axios.post(`${BASE_URL}/sign-up`, body, config);
}

function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}

function signOut(config) {
  return axios.delete(`${BASE_URL}/sign-out`, config);
}

const apiAuth = {
  singUp,
  signIn,
  signOut,
};

export default apiAuth;
