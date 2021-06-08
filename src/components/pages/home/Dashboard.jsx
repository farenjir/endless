import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// components
import CourseProgress from "./dashboard/CourseProgress";
import UserStatus from "./dashboard/UserStatus";

const Dashboard = () => {
  const courses = useSelector(state => state.courses);
  return (
    <Fragment>
      <UserStatus courses={courses} />
      <CourseProgress />
    </Fragment>
  );
};
export default Dashboard;
