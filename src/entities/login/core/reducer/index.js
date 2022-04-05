import { SAVE_SESSION, SIGN_OUT } from "../types";
import { getSessionStorage } from "@shared/utils/sessionStorage";

const session = getSessionStorage("login");

const initialState = {
  user: { ...session },
  goToHome: session ? true : false,
};

const LoginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SAVE_SESSION:
      return { ...state, user: { ...actions.payload }, goToHome: true };
    case SIGN_OUT:
      return { user: {}, goToHome: false };
    default:
      return state;
  }
};

export default LoginReducer;
