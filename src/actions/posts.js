import { deletePost, getPosts, newPost, updatePost } from "../services/postServices"
import { successMessage, warningMessage } from "../utils/messageToast";

export const getAllPosts = () => {
    return async dispatch => {
        const { data } = await getPosts();
        try {
            await dispatch({
                type: "INIT_POSTS",
                payload: data.posts
            });
        } catch (ex) {
            console.log(ex)
        }
    }
}

export const createNewPost = (post) => {
    return async (dispatch, getState) => {
        const posts = [...getState().posts]
        try {
            const { data, status } = await newPost(post);
            if (status === 201) successMessage("پست با موفقیت ساخته شد");
            await dispatch({
                type: "ADD_POST",
                payload: [...posts, data.post],
            });
        } catch (ex) {
            await dispatch({
                type: "ADD_POST",
                payload: [...posts],
            });
        }
    };
};

export const handlePostUpdate = (postId, updatedPost) => {
    return async (dispatch, getState) => {
        const posts = [...getState().posts]
        const filteredPosts = posts.filter(post => post._id !== postId)
        try {
            const { data, status } = await updatePost(postId, updatedPost)
            await dispatch({
                type: "UPDATE_POST",
                payload: [data.post, ...filteredPosts],
            });
            if (status === 200) {
                successMessage("پست با موفقیت به روزرسانی شد")
            }
        } catch (ex) {
            await dispatch({ type: "UPDATE_POST", payload: [...posts] });
        }
    }
}

export const handlePostDelete = (postId) => {
    return async (dispatch, getState) => {
        const posts = [...getState().posts]
        const filteredPosts = posts.filter(post => post._id !== postId)
        try {
            await dispatch({
                type: "DELETE_POST",
                payload: [...filteredPosts]
            })
            const { status } = await deletePost(postId)
            if (status === 200) {
                warningMessage("دوره با موفقیت حذف شد")
            }
        } catch (ex) {
            await dispatch({
                type: "DELETE_POST",
                payload: [...posts]
            })
        }
    }
}
