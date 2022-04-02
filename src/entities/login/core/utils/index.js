export const setSessionStorage = (login) => {
  sessionStorage.setItem("login", JSON.stringify(login));
};
