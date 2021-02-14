import React, { Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import { dashContext } from "../../../context/dashContext";
import Pagination from "../../common/Pagination";
import DashNavBlog from "./DashNavBlog";

const DashBlog = () => {
  const context = useContext(dashContext);
  const {
    blogListProvider,
    blogListIndex,
    currentPage,
    perPage,
    handlePageChange,
  } = context;
  return (
    <Fragment>
      {/* navbar */}
      <DashNavBlog />
      {/* /navbar */}
      <div className="container-xl-dashboard mt-5">
        <div className="row" style={{ direction: "ltr" }}>
          {blogListIndex.map(post => (
            <div key={post._id} className="text-right col-12 col-md-6 col-lg-4">
              <div className="mx-auto">
                <Link to={`/blog-post/${post._id}`}>
                  <img
                    className="img-fluid rounded mb-2"
                    // src={`${config.localApimage}/${post.imageUrl}`}
                    src="/assets/images/react-img.png"
                    alt="تصویر پست یافت نشد"
                  />
                </Link>
                <h6 className=" text-uppercase font-weight-bold my-2">
                  {post.title}
                </h6>
                <div className="iskill-under mb-4"></div>
                <div className="clearfix"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="navbar d-flex justify-content-center align-items-center footer mt-5">
        <Pagination
          objLength={blogListProvider.length}
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
};
export default DashBlog;
