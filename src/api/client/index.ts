import Cookies from 'universal-cookie';

const storage = {
  get: (key: string) => window.localStorage.getItem(key),
  set: (key: string, val: string) => window.localStorage.setItem(key, val),
  remove: (key: string) => window.localStorage.removeItem(key),
};

const setToken = (token: string) => {
  storage.set('@Token', token);
};

const getToken = () => storage.get('@Token');

const clearToken = () => {
  storage.remove('@Token');
};

const setUserRole = (userRole: string) => {
  storage.set('@Role', userRole);
};

const getUserRole = () => storage.get('@Role');

const clearUserRole = () => {
  storage.remove('@Role');
};

const token = async () => storage.get('@Token');

// set cookies
const setCookie = (key: string, val: string) => {
  const cookies = new Cookies();

  return cookies.set(key, val, { maxAge: 172800 }); // set cookie value for two days
};

// get cookies
const getCookie = (key: string) => {
  const cookies = new Cookies();

  return cookies.get(key);
};

export default {
  // ...request,
  storage,
  token,
  clearToken,
  getToken,
  setToken,
  getCookie,
  setCookie,
  setUserRole,
  getUserRole,
  clearUserRole,
};
