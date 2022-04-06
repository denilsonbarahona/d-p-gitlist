export const getRepos = (url) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return { data: data, error: false };
    })
    .catch((e) => {
      return { message: e.message, error: true };
    });
};
