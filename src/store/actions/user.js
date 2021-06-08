import { getUsers } from "../../services/userServices";

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_USER",
        payload: user,
      });
    } catch (ex) {
      console.log("SET_USER", ex);
    }
  };
};
export const clearUser = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "CLEAR_USER",
        payload: {},
      });
    } catch (ex) {
      console.log("CLEAR_USER", ex);
    }
  };
};

// users ****************************
export const getAllUsers = () => {
  return async (dispatch) => {
    const { data } = await getUsers();
    try {
      await dispatch({
        type: "INIT_USERS",
        payload: data.users,
      });
    } catch (ex) {
      console.log("INIT_USERS", ex);
    }
  };
};
