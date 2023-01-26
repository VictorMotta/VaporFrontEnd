import axios from "axios";

const BASE_URL = "http://localhost:5000";

function singUp(body) {
  return axios.post(`${BASE_URL}/sign-up`, body);
}

const apiAuth = {
  singUp,
};

export default apiAuth;
