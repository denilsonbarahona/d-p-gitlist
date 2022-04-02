import { SAVE_SESSION } from "../types";

const initialState = {
  user: {},
  goToHome: false,
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
