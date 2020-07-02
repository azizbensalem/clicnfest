import {
  ADD_LIEUX,
  REMOVE_LIEUX,
//   GET_LIEUX,
} from "./action-types/lieux-actions";
// import UserService from "../../Services/UserService";

// export const fetchPosts = () => {
//   UserService.getProduit().then((response) => {
//     fetchPostsSuccess(response.data);
//   });
// };

// export const fetchPostsSuccess = (posts) => {
//   return {
//     type: FETCH_POSTS_SUCCESS,
//     payload: {
//       posts,
//     },
//   };
// };

export const addLieux = (id) => {
  return {
    type: ADD_LIEUX,
    id,
  };
};
//remove item action
export const removeLieux = (id) => {
  return {
    type: REMOVE_LIEUX,
    id,
  };
};
