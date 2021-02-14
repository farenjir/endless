import React, { useState } from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// utils
import Helmet from "react-helmet";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/Pagination";

const Courses = () => {
  // get courses
  const courses = useSelector(state => state.courses);
  // pagination
  const [perPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  // paginate utils
  const coursesIndex = paginate(courses, currentPage, perPage);

  return (
    <main>
      <div className="container-md pt-3">
        <Helmet>
          <title>اندلس | دوره ها</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-info">دوره های آموزشی اندلس</h2>
          <p className="w-75 mx-auto text-success">
            تاکنون مجموعه اندلس توانسته با تولید{" "}
            <span className="badge-info badge-pill badge">
              {courses.length}
            </span>{" "}
            مطلب آموزشی در زمینه های طراحی و گرافیک گامی درجهت پیشرفت شما عزیزان
            بردارد
          </p>
        </div>
        <div className="bg-white">
          <div className="row mb-5">
            {/* <!-- courses from SERVER--> */}
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
            {/* <!-- / courses from SERVER --> */}
          </div>
        </div>
        <Pagination
          objLength={courses.length}
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Courses;
