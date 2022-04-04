import { SAVE_REPOS } from "../types";

const initialState = {
  repos: [],
};

const ProfileReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SAVE_REPOS:
      return { ...state, repos: actions.payload };
    default:
      return state;
  }
};

export default ProfileReducer;
