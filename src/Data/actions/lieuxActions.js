import {
  ADD_LIEUX,
  REMOVE_LIEUX,
  GET_LIEUX,
} from "./action-types/lieux-actions";
import UserService from "../../Services/UserService";

export function fetchLieux() {
  return (dispatch) => {
    return UserService.getLieux()
      .then(((response) => {
        dispatch(fetchLieuxSuccess(response.data));
      }))
  };
}

export const fetchLieuxSuccess = posts => {
  return {
    type: GET_LIEUX,
    payload: {
      posts,
    },
  };
};

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
