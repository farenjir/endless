import {
  getPost,
  deletePost,
  getPosts,
  newPost,
  updatePost,
} from "../../services/postServices";
import { successMessage, warningMessage } from "../../utils/messageToast";

export const getSinglePost = (postId) => {
  return async (dispatch) => {
    const { data } = await getPost(postId);
    try {
      await dispatch({ type: "GET_POST", payload: data.post });
    } catch (ex) {
      console.log("GET_POST", ex);
    }
  };
};

// posts *******************************

export const getAllPosts = () => {
  return async (dispatch) => {
    const { data } = await getPosts();
    try {
      await dispatch({
        type: "INIT_POSTS",
        payload: data.posts,
      });
    } catch (ex) {
      console.log("INIT_POSTS", ex);
    }
  };
};

export const createNewPost = (post) => {
  return async (dispatch, getState) => {
    const posts = [...getState().posts];
    try {
      const { data, status } = await newPost(post);
      if (status === 201) successMessage("پست با موفقیت ساخته شد");
      await dispatch({
        type: "ADD_POST",
        payload: [data.post, ...posts],
      });
    } catch (ex) {
      await dispatch({
        type: "ADD_POST",
        payload: [...posts],
      });
      console.log("ADD_POST", ex);
    }
  };
};

export const handlePostUpdate = (postId, updatedPost) => {
  return async (dispatch, getState) => {
    const posts = [...getState().posts];
    const filteredPosts = posts.filter((post) => post._id !== postId);
    try {
      const { data, status } = await updatePost(postId, updatedPost);
      await dispatch({
        type: "UPDATE_POST",
        payload: [data.post, ...filteredPosts],
      });
      if (status === 200) {
        successMessage("پست با موفقیت به روزرسانی شد");
      }
    } catch (ex) {
      await dispatch({ type: "UPDATE_POST", payload: [...posts] });
      console.log("UPDATE_POST", ex);
    }
  };
};

export const handlePostDelete = (postId) => {
  return async (dispatch, getState) => {
    const posts = [...getState().posts];
    const filteredPosts = posts.filter((post) => post._id !== postId);
    try {
      await dispatch({
        type: "DELETE_POST",
        payload: [...filteredPosts],
      });
      const { status } = await deletePost(postId);
      if (status === 200) {
        warningMessage("پست با موفقیت حذف شد");
      }
    } catch (ex) {
      await dispatch({
        type: "DELETE_POST",
        payload: [...posts],
      });
      console.log("DELETE_POST", ex);
    }
  };
};
