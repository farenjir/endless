import { getPost } from "../services/postServices"

export const getSinglePost = (postId) => {
    return async dispatch => {
        // get post from SERVER
        const { data } = await getPost(postId);
        // dispatch data
        await dispatch({ type: "GET_POST", payload: data.post });
    }
}

