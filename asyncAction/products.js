import axios from "axios";
import URL from "./url";

const getAllProducts = () => {
  return axios.get(`${URL}/products/all`);
};

const getSingleProduct = (id) => {
  return axios.get(`${URL}/products/${id}`);
};

export default { getAllProducts, getSingleProduct };
