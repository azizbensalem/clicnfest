import { combineReducers } from "redux";
import lieux from "./lieuxReducer";
import produit from "./produitReducer";
import menu from "./menuReducer";
import prestataire from "./prestataireReducer";

export default combineReducers({
  produit,
  lieux,
  menu,
  prestataire,
});
