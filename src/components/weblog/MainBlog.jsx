import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import config from "../../services/config.json";
// redux
import { useSelector } from "react-redux";
// utils
import { paginate } from "../../utils/paginate";

const MainBlog = () => {
  // get blogList
  const blogList = useSelector(state => state.posts);
  const indexBlogList = paginate(blogList, 1, 3);
  return (
    <Fragment>
      {/* <!-- MainBlog --> */}
      <section className="skilld pt-3">
        <div className="container">
          <div className="col-12">
            {/* <!-- title section --> */}
            <div className="col-12 mt-5 mb-3">
              <div className="row text-right">
                <div className="col-12 mx-3 text-success">
                  <h3><Link to="/weblog">وبلاگ اندلس</Link></h3>
                </div>
              </div>
            </div>
            {/* <!-- title section --> */}
            <div className="container">
              <div className="row">
                {/* <!-- blogPost from SERVER --> */}
                {indexBlogList.map(post => (
                  <div
                    key={post._id}
                    className="text-right col-12 col-md-6 col-lg-4"
                  >
                    <div className="mx-auto">
                      <Link
                        to={`/blog-post/${post._id}`}
                      >
                        <img
                          className="img-fluid rounded mb-2"
                          // src={`${config.localApimage}/${post.imageUrl}`}
                          src="assets/images/react-img.png"
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
                {/* <!-- end blogPost --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end MainBlog --> */}
    </Fragment>
  );
};

export default MainBlog;
