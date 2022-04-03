import { SAVE_SESSION } from "../types";

const saveSession = (payload) => ({ type: SAVE_SESSION, payload });

export const searchUser =
  (username) => async (dispatch, getState, extraArgument) => {
    const { services } = extraArgument;
    const response = await services.searchUser(username);
    if (response.error === false) {
      dispatch(saveSession(response));
    }
  };
