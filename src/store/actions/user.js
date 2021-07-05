import { getUsers } from "../../services/userServices";

export const getAllUsers = () => {
  return async (dispatch) => {
    const { data } = await getUsers();
    try {
      await dispatch({
        type: "INIT_USERS",
        payload: data.users,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

// user ****************************
export const addUser = (user) => {
  return async (dispatch) => {
    await dispatch({
      type: "SET_USER",
      payload: user,
    });
  };
};
export const clearUser = () => {
  return async (dispatch) => {
    await dispatch({
      type: "CLEAR_USER",
      payload: {},
    });
  };
};
