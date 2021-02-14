import { getCourse } from "../services/courseSevices"

export const getSingleCourse = (courseId) => {
    return async dispatch => {
        const { data } = await getCourse(courseId)
        dispatch({
            type: "GET_COURSE",
            payload: data.course
        })
    }
}