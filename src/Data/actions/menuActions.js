import {
  ADD_MENU,
  REMOVE_MENU,
  SUB_QUANTITY_MENU,
  ADD_QUANTITY_MENU,
  GET_MENU,
} from "./action-types/menu-actions";
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

export const addMenu = (id) => {
  return {
    type: ADD_MENU,
    id,
  };
};
//remove item action
export const removeMenu = (id) => {
  return {
    type: REMOVE_MENU,
    id,
  };
};
//subtract qt action
export const subtractQuantityMenu = (id) => {
  return {
    type: SUB_QUANTITY_MENU,
    id,
  };
};
//add qt action
export const addQuantityMenu = (id) => {
  return {
    type: ADD_QUANTITY_MENU,
    id,
  };
};
