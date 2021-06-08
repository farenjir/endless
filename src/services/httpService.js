import axios from "axios";
// toast error message
import { errorMessage } from "../utils/messageToast";

// set baseUrl 
// axios.defaults.baseURL = `${config.localhost}`

// set defaults for postMethod
axios.defaults.headers.post["Content-Type"] = "application/json";
// check token
const token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// interseptors
axios.interceptors.response.use(null, (error) => {
  // console.log(error.response);
  // console.log(error.response.status);
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  // contorol unExpecteErrors
  if (!expectedErrors) {
    errorMessage("مشکلی از جانب سرور رخ داده است");
  }
  // return promis for errors
  return Promise.reject(error);
});

// export config
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
