import React from "react";
import { Helmet } from "react-helmet";
// main components ( Childeren )
import HomeHeader from "./main/HomeHeader";
import HomeTitel from "./main/HomeTitle";
// blog Component
import MainBlog from "../weblog/MainBlog";
// suggest components
import SellSugest from "../common/Suggest";
import MainCourses from "../course/MainCourses";
import CourseSuggest from "../course/CourseSuggest";

const MainContent = () => {
  return (
    <main>
      <Helmet>
        <title>خودآموز اندلس</title>
      </Helmet>
      <HomeHeader />
      <CourseSuggest />
      <HomeTitel />
      <MainCourses />
      <SellSugest />
      <MainBlog />
    </main>
  );
};

export default MainContent;
