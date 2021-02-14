import React, { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// router
import { Switch, Route, Redirect } from "react-router-dom";
// context
import UserContext from "../context/providers/UserContext";
import DashContext from "../context/providers/DashContext";
import BlogContext from "../context/providers/BlogContext";
import TaskContext from "../context/providers/TaskContext";
import CoursesContext from "../context/providers/CoursesContext";
// jwt
import { addUser, clearUser } from "../actions/user";
import { isEmpty } from "lodash";
// utils
import { decodeToken } from "../utils/decodeToken";
//Layouts
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashboard from "../components/home/Dashboard";
import MainLayout from "../components/layouts/MainLayout";
import MainContent from "../components/home/MainContent";
// adminDash
import WeblogEdit from "../components/admin/WeblogEdit";
import CoursesEdit from "../components/admin/CoursesEdit";
import UserManage from "../components/admin/UserManage";
// user dashboard
import BuyVip from "../components/vip/BuyVip";
import DashCourses from "../components/course/dashboard/DashCourses";
import DashTask from "../components/task/DashTask";
// other pages
import Logout from "../components/login/Logout";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";
import Register from "../components/register/Register";
import BlogList from "../components/weblog/BlogList";
import About from "../components/about/About";
import ContactUs from "../components/contact/ContactUs";
import Laws from "../components/laws/Laws";
import BlogPost from "../components/weblog/BlogPost";
import ForgetPass from "../components/login/ForgetPass";
import Courses from "../components/course/Courses";
import Course from "../components/course/Course";
import NotFound404 from "../components/common/NotFound404";
import DashBlog from "../components/weblog/dashboard/DasBlog";
import MainBuyVip from "../components/vip/MainBuyVip";
// get users for dashAdmin
import { getAllUsers } from "../actions/users";
import { store } from "../store/index";

const Endless = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  // initialize users for AdminDashboard
  if (!isEmpty(user) && user.isAdmin) {
    store.dispatch(getAllUsers());
  }
  // check token
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = decodeToken(token);
        const dateNow = Math.floor(Date.now() / 1000);
        if (decodedToken.payload.exp < dateNow) {
          localStorage.removeItem("token");
          dispatch(clearUser());
        } else {
          dispatch(addUser(decodedToken.payload.user));
        }
      }
    };
    checkToken();
  }, []);
  return (
    <Switch>
      <Route path={["/dashboard"]}>
        {/* dashboard ........................................ */}
        <DashboardLayout>
          <Route
            path="/dashboard"
            exact
            render={() =>
              !isEmpty(user) ? <Dashboard /> : <Redirect to="/" />
            }
          />
          <Route
            path="/dashboard/tasks"
            render={() =>
              isEmpty(user) ? (
                <Redirect to="/" />
              ) : (
                <TaskContext>
                  <DashTask />
                </TaskContext>
              )
            }
          />
          <Route
            path="/dashboard/vip"
            render={() => (!isEmpty(user) ? <BuyVip /> : <Redirect to="/" />)}
          />
          <Route
            path="/dashboard/courses"
            render={() =>
              !isEmpty(user) ? (
                <DashContext>
                  <DashCourses />
                </DashContext>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/dashboard/weblog"
            render={() =>
              !isEmpty(user) ? (
                <DashContext>
                  <DashBlog />
                </DashContext>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/dashboard/editcourses"
            render={() =>
              !isEmpty(user) && user.isAdmin ? (
                <CoursesContext>
                  <CoursesEdit />
                </CoursesContext>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/dashboard/editweblog"
            render={() =>
              !isEmpty(user) && user.isAdmin ? (
                <BlogContext>
                  <WeblogEdit />
                </BlogContext>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/dashboard/usermanager"
            render={() =>
              !isEmpty(user) && user.isAdmin ? (
                <UserManage />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </DashboardLayout>
      </Route>
      <Route path={["/"]}>
        {/*  Main pages ........................................ */}
        <MainLayout>
          <Switch>
            <Route path="/forget-pass" component={ForgetPass} />
            <Route path="/blog-post/:id" component={BlogPost} />
            <Route path="/course/:id" component={Course} />
            <Route path="/buy-vip" component={MainBuyVip} />
            <Route path="/laws" component={Laws} />
            <Route path="/about-us" component={About} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/weblog" component={BlogList} />
            <Route path="/courses" component={Courses} />
            <Route path="/profile" component={Profile} />
            <Route
              path="/register"
              render={() => (
                <UserContext>
                  <Register user={user} />
                </UserContext>
              )}
            />
            <Route
              path="/login"
              render={() => (
                <UserContext>
                  <Login user={user} />
                </UserContext>
              )}
            />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={MainContent} />
            <Route path="*" exact component={NotFound404} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Endless;
