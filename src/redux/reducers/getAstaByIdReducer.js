import { GET_ASTA_BY_ID } from "../actions/getAstaByIdActions";
export const SET_ASTA_WS = "SET_ASTA_WS";
const initialState = {
  asta: {},
};
export const getAstaByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASTA_BY_ID:
      return {
        ...state,
        asta: action.payload,
      };
    case SET_ASTA_WS:
      return {
        ...state,
        asta: action.payload,
      };
    default:
      return state;
  }
};
