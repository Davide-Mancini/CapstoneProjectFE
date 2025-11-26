import { MODIFICA_UTENTE } from "../actions/modificheUserAction";

const initialState = {
  profile: null,
};
const modificheUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFICA_UTENTE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
export default modificheUserReducer;
