import { SAVE_SESSION } from "../types";
import { getSessionStorage } from "@shared/utils/sessionStorage";

const session = JSON.parse(getSessionStorage("login"));

const initialState = {
  user: { ...session },
  goToHome: session ? true : false,
};

const LoginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SAVE_SESSION:
      return { ...state, user: { ...actions.payload }, goToHome: true };
    default:
      return state;
  }
};

export default LoginReducer;
