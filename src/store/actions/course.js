import {
  getCourse,
  deleteCourse,
  getCourses,
  newCourse,
  updateCourse,
} from "../../services/courseSevices";
import { successMessage, warningMessage } from "../../utils/messageToast";

export const getSingleCourse = (courseId) => {
  return async (dispatch) => {
    const { data } = await getCourse(courseId);
    dispatch({
      type: "GET_COURSE",
      payload: data.course,
    });
  };
};

// courses **************************

export const getAllCourses = () => {
  return async (dispatch) => {
    const { data } = await getCourses();
    try {
      await dispatch({
        type: "INIT_COURSES",
        payload: data.courses,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};
export const createNewCourse = (course) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    try {
      const { data, status } = await newCourse(course);
      if (status === 201) successMessage("دوره با موفقیت ساخته شد");
      await dispatch({
        type: "ADD_COURSE",
        payload: [data.course, ...courses],
      });
    } catch (ex) {
      await dispatch({
        type: "ADD_COURSE",
        payload: [...courses],
      });
    }
  };
};

export const handleCourseUpdate = (courseId, updatedCourse) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    const filteredCourses = courses.filter((course) => course._id !== courseId);
    try {
      const { data, status } = await updateCourse(courseId, updatedCourse);
      await dispatch({
        type: "UPDATE_COURSE",
        payload: [data.course, ...filteredCourses],
      });
      if (status === 200) {
        successMessage("دوره با موفقیت به روزرسانی شد");
      }
    } catch (ex) {
      await dispatch({ type: "UPDATE_COURSE", payload: [...courses] });
    }
  };
};

export const handleCourseDelete = (courseId) => {
  return async (dispatch, getState) => {
    const courses = [...getState().courses];
    const filteredCourses = courses.filter((course) => course._id !== courseId);
    try {
      await dispatch({
        type: "DELETE_COURSE",
        payload: [...filteredCourses],
      });
      const { status } = await deleteCourse(courseId);
      if (status === 200) {
        warningMessage("دوره با موفقیت حذف شد");
      }
    } catch (ex) {
      await dispatch({
        type: "DELETE_COURSE",
        payload: [...courses],
      });
    }
  };
};
