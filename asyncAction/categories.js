import axios from "axios";
import URL from "./url";

const getAllCategories = () => {
  return axios.get(`${URL}/categories/all`);
};

const getSingleCategory = (id) => {
  return axios.get(`${URL}/categories/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllCategories, getSingleCategory };
