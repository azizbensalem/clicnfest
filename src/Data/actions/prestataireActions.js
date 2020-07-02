import {
  ADD_PRESTATAIRE,
  REMOVE_PRESTATAIRE,
  SUB_QUANTITY_PRESTATAIRE,
  ADD_QUANTITY_PRESTATAIRE,
  GET_PRESTATAIRE,
} from "./action-types/prestataire-actions";
import UserService from "../../Services/UserService";

// export const fetchPosts = () => {
//   UserService.getProduit().then((response) => {
//     fetchPostsSuccess(response.data);
//   });
// };

// export const fetchPostsSuccess = (posts) => {
//   return {
//     type: GET_PRODUIT,
//     payload: {
//       posts,
//     },
//   };
// };

export const addPrestataire = (id) => {
  return {
    type: ADD_PRESTATAIRE,
    id,
  };
};
//remove item action
export const removePrestataire = (id) => {
  return {
    type: REMOVE_PRESTATAIRE,
    id,
  };
};
//subtract qt action
export const subtractQuantityPrestataire = (id) => {
  return {
    type: SUB_QUANTITY_PRESTATAIRE,
    id,
  };
};
//add qt action
export const addQuantityPrestataire = (id) => {
  return {
    type: ADD_QUANTITY_PRESTATAIRE,
    id,
  };
};
