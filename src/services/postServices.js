import config from "./config.json";
import http from "./httpService";

export const getPosts = () => {
    return http.get(`${config.localApi}/posts`)
}

export const getPost = (postId) => {
    return http.get(`${config.localApi}/post/${postId}`)
}

export const newPost = (post) => {
    return http.post(`${config.localApi}/post`, post);
};

export const deletePost = (postId) => {
    return http.delete(`${config.localApi}/post/${postId}`);
};

export const updatePost = (postId, post) => {
    return http.put(`${config.localApi}/post/${postId}`, post);
};