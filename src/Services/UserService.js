import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:56407/api/";

const getProduit = () => {
  return axios.get(API_URL + "Produit", { headers: authHeader() });
};

export default {
  getProduit,
};
