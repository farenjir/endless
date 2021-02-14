import { getUsers } from "../services/userServices";

export const getAllUsers = () => {
    return async dispatch => {
        const { data } = await getUsers();
        try {
            await dispatch({
                type: "INIT_USERS",
                payload: data.users
            });
        } catch (ex) {
            console.log(ex)
        }
    }
}