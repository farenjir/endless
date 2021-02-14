import config from "./config.json";
import http from "./httpService";


export const getUsers = () => {
  return http.get(`${config.localApi}/users`);
}

export const registerUser = user => {
  return http.post(`${config.localApi}/register`, JSON.stringify(user));
};

export const loginUser = user => {
  return http.post(`${config.localApi}/login`, JSON.stringify(user));
};

export const forgetPassword = userEmail => {
  return http.post(`${config.localApi}/forgetpass`, JSON.stringify(userEmail));
};

