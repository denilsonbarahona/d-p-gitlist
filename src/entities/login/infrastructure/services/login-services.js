const url = process.env.URL;

export const searchUser = (userName) => {
  return fetch(`${url}users/${userName}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.message === "Not Found")
        return { message: "Repository Not Found", error: true };
      return { ...data, error: false };
    })
    .catch((e) => {
      return { message: e.message, error: true };
    });
};
