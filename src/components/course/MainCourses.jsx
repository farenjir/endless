import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paginate } from "../../utils/paginate";

const MainCourses = () => {
  const courses = useSelector(state => state.courses);
  const coursesIndex = paginate(courses, 1, 6);
  return (
    <Fragment>
      {/* <!-- MainBlog --> */}
      <section className="skilld my-5">
        <div className="container-md">
          <div className="col-12">
            {/* <!-- title section --> */}
            <div className="col-12 mt-5 mb-3">
              <div className="row text-right">
                <div className="col-12 mx-3">
                  <h3>
                    <Link to="/courses" className="text-success">
                      دوره های اندلس
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* <!-- title section --> */}
            <div className="row">
              {/* <!-- course from SERVER --> */}
              {coursesIndex.map(course => (
                <div key={course._id} className="col-12 col-md-6 col-lg-4">
                  <div className="card-site">
                    <div className="card-site__item swiper-slide">
                      <div className="card-site__img">
                        <Link to={`/course/${course._id}`}>
                          <img
                            src="assets/images/imageAple.jpg"
                            alt="تصویر دوره یافت نشد"
                          />
                        </Link>
                      </div>
                      <div className="row card-site__body">
                        <div className="col-12">
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="#!">
                              <i className="fab fa-facebook card-site__icon"></i>
                            </a>
                            <div>
                              <a href="#!">
                                <i className="fab fa-instagram card-site__icon"></i>
                              </a>
                              <span className="mx-1">
                                <small className="badge badge-pill badge-danger">
                                  30
                                </small>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 text-center card-site__body-title">
                          <h6> {course.title}</h6>
                          <span className="col-12 text-center card-site__body-info text-muted">
                            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
                            برای پر کردن می نماید عنوان عنصری از ترکیب بندی برای
                            پر
                          </span>
                        </div>
                        <div className="col-12 card-site__body-vip">
                          <div className="pb-3">
                            <a href="#!" className="card-site__body-vip__link">
                              <span>
                                دسترسی برای اعضای ویژه
                                <i className="fa fa-star"></i>
                              </span>
                            </a>
                          </div>
                          <div className="row d-flex justify-content-between align-items-center mx-1">
                            <div className="card-site__body-price">
                              <span>
                                <small>تومان</small>{" "}
                                <strong>
                                  {course.price === 0 ? "رایگان" : course.price}
                                </strong>
                              </span>
                            </div>
                            <div className="card-site__body-time">
                              <span>
                                <small>زمان دوره :</small> <strong>1:33</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <!-- end course --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end MainBlog --> */}
    </Fragment>
  );
};
export default MainCourses;
