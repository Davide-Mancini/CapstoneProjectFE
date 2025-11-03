import { configureStore, combineReducers } from "@reduxjs/toolkit";
import newsReducer from "../reducers/newsReducer";
import signInReducer from "../reducers/signInReducer";

const combineReducer = combineReducers({
  news: newsReducer,
  signIn: signInReducer,
});

const store = configureStore({
  reducer: combineReducer,
});
export default store;
