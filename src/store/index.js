import { applyMiddleware, compose, createStore } from "redux";
//reducers
import { reducers } from "../reducers";
// middleware
import thunk from "redux-thunk";
// init weblog
import { getAllCourses } from "../actions/courses";
import { getAllPosts } from "../actions/posts";

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
// initialize Courses for Main pages
store.dispatch(getAllCourses());
// initialize BlogPost for Main pages
store.dispatch(getAllPosts());
//subscribe most be diActive after eject project
store.subscribe(() => {
    console.log(store.getState());
})