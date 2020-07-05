import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:56407/api/";

const getProduit = () => {
  return axios.get(API_URL + "Produit", { headers: authHeader() });
};

const getLieux = () => {
  return axios.get(API_URL + "Lieux", { headers: authHeader() });
};

const postEvent = (description , theme, type, startDate, endDate, typeTicket, prixTicket, 
tarifTicket , produitId , quantite , prestataireId , menuId, lieuxId ) => {
  axios.post("http://localhost:56407/api/Evenements", {
    description: description,
  })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
}

export default {
  getProduit,
  getLieux,
  postEvent,
};
