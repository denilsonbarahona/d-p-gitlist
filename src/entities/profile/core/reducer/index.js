import { SAVE_REPOS, SET_NEW_PAGE, RENDER_FILTER } from "../types";

const initialState = {
  repos: [],
  data: [],
  page: 0,
};

const ProfileReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SAVE_REPOS:
      return { ...state, repos: actions.payload, data: actions.payload };
    case SET_NEW_PAGE:
      return { ...state, page: actions.payload };
    case RENDER_FILTER:
      return { ...state, repos: actions.payload, page: 0 };
    default:
      return state;
  }
};

export default ProfileReducer;
