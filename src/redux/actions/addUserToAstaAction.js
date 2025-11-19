export const ADD_USER_TO_ASTA = "ADD_USER_TO_ASTA";

export const addUserToAstaAction = (sessioneAsta) => ({
  type: ADD_USER_TO_ASTA,
  payload: sessioneAsta,
});
