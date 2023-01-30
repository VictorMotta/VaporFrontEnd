import axios from "axios";
import { BASE_URL } from "../constants/urls";

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
  return axios.post(`${BASE_URL}/checkout`, body, createConfig(token));
}

function getProduct(id) {
  return axios.get(`${BASE_URL}/products/${id}`);
}

function getProductsPromo() {
  return axios.get(`http://localhost:5000/products?promo=true`);
}

function getFiveProducts(currentOffset) {
  return axios.get(`http://localhost:5000/products?offset=${currentOffset}&limit=5`);
}

export const apiVapor = {
  addProductVapor,
  finishOrder,
  getProduct,
  getProductsPromo,
  getFiveProducts,
};
