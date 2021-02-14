import { combineReducers } from "redux"
// reducers
import { PostsReducer } from "./posts"
import { PostReducer } from "./post"
import { CourseReducer } from "./course"
import { CoursesReducer } from "./courses"
import { userReducer } from "./user"
import { usersReducer } from "./users"

// combine Reducers
export const reducers = combineReducers({
    posts: PostsReducer,
    courses: CoursesReducer,
    post: PostReducer,
    course: CourseReducer,
    user: userReducer,
    users: usersReducer,
})