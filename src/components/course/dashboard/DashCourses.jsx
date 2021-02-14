import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { dashContext } from "../../../context/dashContext";
import Pagination from "../../common/Pagination";
import DashNavCourses from "./DashNavCourses";

const DashCourses = () => {
  const context = useContext(dashContext);
  const {
    coursesProvider,
    currentPage,
    perPage,
    handlePageChange,
    coursesIndex,
  } = context;
  return (
    <Fragment>
      {/* navbar */}
      <DashNavCourses />
      {/* /navbar */}
      <div className="container-xl-dashboard">
        <div className="row" style={{ direction: "ltr" }}>
          {coursesIndex.map(course => (
            <div key={course._id} className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card-site">
                <div className="card-site__item swiper-slide">
                  <div className="card-site__img">
                    <Link to={`/course/${course._id}`}>
                      <img
                        src="/assets/images/imageAple.jpg"
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
                        طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای
                        عنوان عنصری از ترکیب بندی برای پر
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
                            {course.price === 0 ? (
                              "رایگان"
                            ) : (
                              <span>
                                <small>تومان</small>{" "}
                                <strong>{course.price}</strong>
                              </span>
                            )}
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
        </div>
      </div>
      <div className="navbar d-flex justify-content-center align-items-center footer mt-5">
        <Pagination
          objLength={coursesProvider.length}
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
};
export default DashCourses;
