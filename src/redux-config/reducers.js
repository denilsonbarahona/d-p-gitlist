import { combineReducers } from "redux";
import LoginReducer from "../entities/login/core/reducer";
import ProfileReducer from "../entities/profile/core/reducer";

export default combineReducers({
  LoginReducer,
  ProfileReducer,
});
