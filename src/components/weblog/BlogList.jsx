import React, { useState } from "react";
import { Link } from "react-router-dom";
// import config from "../../services/config.json";
// redux
import { useSelector } from "react-redux";
// utils
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import Helmet from "react-helmet";

const BlogList = () => {
  // get blogList
  const blogList = useSelector(state => state.posts);
  // pagination
  const [perPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  // paginate utils
  const weblogList = paginate(blogList, currentPage, perPage);
  return (
    <main>
      <div className="container pt-3">
        <Helmet>
          <title>اندلس | خبرنامه</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-info">وبلاگ اندلس</h2>
          <p className="w-75 mx-auto text-success">
            تاکنون مجموعه اندلس توانسته با تولید{" "}
            <span className="badge-info badge-pill badge">
              {blogList.length}
            </span>{" "}
            مطلب آموزشی در زمینه ارزدیجیتال شما عزیزان را در این مسیر آگاه نماید
          </p>
        </div>
        <div className="bg-white p-5">
          <div className="row">
            {/* <!-- blog post from SERVER--> */}
            {weblogList.map(post => (
              <div key={post._id} className="row my-3 weblog-bg-card">
                <div className="col-lg-4 m-0 p-0">
                  <Link to={`/blog-post/${post._id}`}>
                    <img
                      className="rounded img-fluid"
                      src="assets/images/imageAple.jpg"
                      alt="تصویر پست یافت نشد"
                    />
                  </Link>
                </div>
                <div className="col-lg-8 p-4 text-right">
                  <h4>{post.title}</h4>
                  <div className="info">
                    <span className="text-muted">
                      {post.date} نوشته شده در تاریخ :{" "}
                    </span>
                    <span className="text-muted">
                      {post.date} توسط :{" "}
                      <p>
                        <Link to={post.writer}>{post.writer}</Link>
                      </p>
                    </span>
                  </div>
                  <p>{post.info}</p>
                  <Link to={`/blog-post/${post._id}`}>
                    <button
                      className="btn btn-outline-primary btn-sm mt-3"
                      type="button"
                    >
                      بیشتر بدانید
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            {/* <!-- /blog post from SERVER --> */}
          </div>
        </div>
        <Pagination
          objLength={blogList.length}
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default BlogList;
