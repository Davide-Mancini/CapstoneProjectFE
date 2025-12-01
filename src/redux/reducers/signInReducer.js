import { SIGN_OUT } from "../actions/logoutAction";
import { RESET_LOGIN_SUCCESS, SIGN_IN } from "../actions/signInAction";

const initialState = {
  isAuthenticated: false,
  user: null,
  loginSuccess: false,
};
const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loginSuccess: true,
      };
    case SIGN_OUT:
      return {
        isAuthenticated: false,
        user: {},
        loginSuccess: false,
      };
    case RESET_LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: false,
      };
    default:
      return state;
  }
};
export default signInReducer;
