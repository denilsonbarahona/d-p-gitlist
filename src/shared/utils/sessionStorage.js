export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key) => {
  const item = sessionStorage.getItem(key);
  return JSON.parse(item);
};
