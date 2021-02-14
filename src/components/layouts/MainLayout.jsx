import React, { Fragment } from "react";
//common components
import Footer from "../common/Footer";
import TopNav from "../common/TopNav";

const MainLayout = props => {
  return (
    <Fragment>
      <TopNav />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
