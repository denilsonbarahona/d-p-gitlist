import { setSessionStorage, getSessionStorage } from "../utils/sessionStorage";

const useSessionStorage = () => {
  const saveSessionStorage = (key, value = {}) => {
    setSessionStorage(key, JSON.stringify(value));
    return true;
  };

  const getItemInSessionStorage = (key) => {
    return getSessionStorage(key);
  };

  return {
    saveSessionStorage,
    getItemInSessionStorage,
  };
};

export default useSessionStorage;
