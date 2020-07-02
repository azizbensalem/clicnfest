import {
ADD_PRODUIT,
REMOVE_PRODUIT,
SUB_QUANTITY_PRODUIT,
ADD_QUANTITY_PRODUIT,
GET_PRODUIT,
} from "./action-types/produit-actions";
import UserService from "../../Services/UserService";

export function fetchProducts() {
  return (dispatch) => {
    return UserService.getProduit()
      .then(((response) => {
        dispatch(fetchPostsSuccess(response.data));
      }))
  };
}

export const fetchPostsSuccess = posts => {
  return {
    type: GET_PRODUIT,
    payload: {
      posts,
    },
  };
};

export const addProduit = (id) => {
  return {
    type: ADD_PRODUIT,
    id,
  };
};
//remove item action
export const removeProduit = (id) => {
  return {
    type: REMOVE_PRODUIT,
    id,
  };
};
//subtract qt action
export const subtractQuantityProduit = (id) => {
  return {
    type: SUB_QUANTITY_PRODUIT,
    id,
  };
};
//add qt action
export const addQuantityProduit = (id) => {
  return {
    type: ADD_QUANTITY_PRODUIT,
    id,
  };
};
