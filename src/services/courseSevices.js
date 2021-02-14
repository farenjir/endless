import config from "./config.json";
import http from "./httpService";

export const getCourses = () => {
    return http.get(`${config.localApi}/courses`)
}

export const getCourse = (courseId) => {
    return http.get(`${config.localApi}/course/${courseId}`)
}

export const newCourse = (course) => {
    return http.post(`${config.localApi}/course`, course);
};

export const deleteCourse = (courseId) => {
    return http.delete(`${config.localApi}/course/${courseId}`);
};

export const updateCourse = (courseId, course) => {
    return http.put(`${config.localApi}/course/${courseId}`, course);
};
