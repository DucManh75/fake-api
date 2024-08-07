import axios from "axios";

const GetAllProduct = () => {
  return axios.get("https://fakestoreapi.com/products");
};

export { GetAllProduct };
