import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
function addProductVapor(body, token) {
  return axios.post(`${BASE_URL}/products`, body, createConfig(token));
}

function finishOrder(body, token) {
  return axios.post(`${BASE_URL}/orders`, body, createConfig(token));
}

export const apiVapor = {
  addProductVapor,
  finishOrder,
};
