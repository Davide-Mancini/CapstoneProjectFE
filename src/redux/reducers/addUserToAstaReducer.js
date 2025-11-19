import { ADD_USER_TO_ASTA } from "../actions/addUserToAstaAction";

const initialState = {
  asta: null,
};
export const addUserToAstaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_TO_ASTA:
      return {
        ...state,
        asta: action.payload,
      };
    default:
      return state;
  }
};
