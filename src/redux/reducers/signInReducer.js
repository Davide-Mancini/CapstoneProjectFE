import { SIGN_IN } from "../actions/signInAction";

const initialState = {
  signIn: false,
  user: null,
};
const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        signIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default signInReducer;
