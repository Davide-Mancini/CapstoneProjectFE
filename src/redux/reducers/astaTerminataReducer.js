import { ASTA_TERMINATA } from "../actions/astaTerminataAction";

const initialState = {
  ultimoAcquisto: null,
};

export const astaTerminataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASTA_TERMINATA:
      return {
        ...state,
        ultimoAcquisto: action.payload,
      };
    default:
      return state;
  }
};
