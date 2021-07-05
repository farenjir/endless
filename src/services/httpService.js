import axios from "axios"
// toast error message
import { errorMessage } from "../utils/messageToast";

// set defaults for SERVER
axios.defaults.headers.post["Content-Type"] = "application/json";
// check token
const token = localStorage.getItem("token")
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
// interseptors
axios.interceptors.response.use(null, error => {
    const expectedErrors =
        (error.response &&
            error.response.status) >= 400 &&
        error.response.status < 500
    // contorol unExpecteErrors
    if (!expectedErrors) {
        errorMessage("مشکلی از جانب سرور رخ داده است")
    }
    // return promis for error AXIOS
    return Promise.reject(error)
})

// export config to use in PROJECT
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}
