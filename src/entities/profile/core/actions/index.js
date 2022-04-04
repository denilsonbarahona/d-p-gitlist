import { SAVE_REPOS } from "../types";

export const saveRepos = (payload) => ({ type: SAVE_REPOS, payload });

export const getRepos = (url) => async (dispatch, getState, extraArgument) => {
  const { services } = extraArgument;
  const { data, error } = await services.getRepos(url);
  const Pagination = [];
  if (!error) {
    do {
      Pagination.push(data.splice(0, 10));
    } while (data.length);

    dispatch(saveRepos(Pagination));
  }
};
