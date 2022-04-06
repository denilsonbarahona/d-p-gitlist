import { SAVE_REPOS, SET_NEW_PAGE, RENDER_FILTER } from "../types";

export const saveRepos = (payload) => ({ type: SAVE_REPOS, payload });
export const changePage = (payload) => ({ type: SET_NEW_PAGE, payload });
export const renderFinder = (payload) => ({ type: RENDER_FILTER, payload });

function createPagination(data) {
  const pagination = new Array();
  do {
    pagination.push(data.splice(0, 10));
  } while (data.length);

  return pagination;
}

function getFilterData(data, value, filterFunction) {
  const flatted = data.flat();
  let filtered = [...flatted];
  if (value !== "all") {
    filtered = flatted.filter(filterFunction);
  }
  return createPagination(filtered);
}

function getSortedFunction(value) {
  switch (value) {
    case "stars":
      return (a, b) => b.stargazers_count - a.stargazers_count;
    case "last updated":
      return (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at);
    default:
      return (a, b) => a.name - b.name;
  }
}

export const searchRepos = (value) => async (dispatch, getState) => {
  const { data } = getState().ProfileReducer;
  const flatted = data.flat();
  const filtered = flatted.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
  const Pagination = createPagination(filtered);
  dispatch(renderFinder(Pagination));
};

export const filterTypeRepos = (value) => async (dispatch, getState) => {
  const { data } = getState().ProfileReducer;
  const pagination = getFilterData(data, value, (item) => item[value] === true);
  dispatch(renderFinder(pagination));
};

export const filterLanguageRepos = (value) => async (dispatch, getState) => {
  const { data } = getState().ProfileReducer;
  const pagination = getFilterData(
    data,
    value,
    (item) => item.language?.toLowerCase() === value
  );
  dispatch(renderFinder(pagination));
};

export const sortRepos = (value) => async (dispatch, getState) => {
  const { data } = getState().ProfileReducer;
  const flatted = data.flat();
  const sortedFunction = getSortedFunction(value);
  flatted.sort(sortedFunction);
  const sorted = createPagination(flatted);
  dispatch(renderFinder(sorted));
};

export const getRepos = (url) => async (dispatch, getState, extraArgument) => {
  const { services } = extraArgument;
  const { data, error } = await services.getRepos(url);

  if (!error) {
    const Pagination = createPagination(data);
    dispatch(saveRepos(Pagination));
  }
};
