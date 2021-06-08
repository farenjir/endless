import { combineReducers } from "redux";
// reducers
import { PostReducer, PostsReducer } from "./post";
import { CourseReducer, CoursesReducer } from "./course";
import { userReducer } from "./user";

// combine Reducers
export const reducers = combineReducers({
  post: PostReducer,
  posts: PostsReducer,
  course: CourseReducer,
  courses: CoursesReducer,
  user: userReducer,
});
