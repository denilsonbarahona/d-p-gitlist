import { SAVE_SESSION, SIGN_OUT } from "../types";
import {
  deleteSessionStorage,
  setSessionStorage,
} from "../../../../shared/utils/sessionStorage";

const saveSession = (payload) => ({ type: SAVE_SESSION, payload });
const signOut = (_) => ({ type: SIGN_OUT });

export const deleteSession = () => (dispatch) => {
  deleteSessionStorage("login");
  dispatch(signOut());
};

export const searchUser = (username) => async (dispatch, _, extraArgument) => {
  const { services } = extraArgument;
  const response = await services.searchUser(username);
  if (response.error === false) {
    setSessionStorage("login", response);
    dispatch(saveSession(response));
  }
};
