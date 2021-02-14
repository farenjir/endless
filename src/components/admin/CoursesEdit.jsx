import React, { useContext } from "react";
import config from "../../services/config.json";
import Pagination from "../common/Pagination";
import { adminContext } from "../../context/adminContext";

const CoursesEdit = () => {
  // context
  const context = useContext(adminContext);
  const {
    coursesProvider,
    currentPage,
    perPage,
    handlePageChange,
    coursesIndex,
    openNewCourseModal,
    openEditCourseModal,
    openDeleteCourseModal,
    filteredCourses,
    setCourseSearch,
    sortCoursesAsc,
    sortCoursesDes,
  } = context;
  return (
    <div class="row">
      <div class="col text-right">
        <h2>مدیریت دوره های مجموعه اندلس</h2>
        <p>
          تاکنون مجموعه اندلس توانسته{" "}
          <strong className="badge badge-pill badge-primary">
            {coursesProvider.length}
          </strong>{" "}
          دوره در زمینه های طراحی و گرافیک تولید نماید
        </p>
        <div class="panel panel-default panel-table">
          <div class="panel-heading">
            <div class="row my-3">
              <div class="col-12 col-md-6 offset-md-6">
                <button
                  type="button"
                  class="btn btn-sm btn-primary"
                  onClick={openNewCourseModal}
                >
                  <em class="fa fa-plus-circle mx-2"></em>
                  ساخت دوره جدید
                </button>
              </div>
            </div>
          </div>
          <div class="panel-body">
            <table
              class="table table-striped table-bordered table-list"
              style={{ direction: "ltr" }}
            >
              <thead>
                <tr>
                  <th>اصلاح دوره</th>
                  <th className="d-none d-md-table-cell">زمان دوره</th>
                  <th className="d-none d-md-table-cell">عکس دوره</th>
                  <th>مدرس</th>
                  <th>
                    <button
                      className="btn btn-sm mx-1"
                      style={{
                        margin: "0",
                        padding: "0",
                        outline: "none",
                      }}
                      onClick={sortCoursesAsc}
                    >
                      <em className="fa fa-arrow-alt-circle-down text-success"></em>
                    </button>
                    <button
                      className="btn btn-sm mx-1"
                      style={{
                        margin: "0",
                        padding: "0",
                        outline: "none",
                      }}
                      onClick={sortCoursesDes}
                    >
                      <em className="fa fa-arrow-alt-circle-up text-success"></em>
                    </button>
                    <small> (تومان)</small> قیمت
                  </th>
                  <th className="d-none d-md-table-cell">توضیحات</th>
                  <th>نام دوره</th>
                </tr>
              </thead>
              <tbody>
                {coursesIndex.map(course => (
                  <tr key={course._id}>
                    <td align="center">
                      <button
                        class="btn btn-success mx-1 my-1 my-md-0"
                        onClick={() => openEditCourseModal(course)}
                      >
                        <em class="fa fa-edit"></em>
                      </button>
                      <button
                        class="btn btn-danger mx-1"
                        onClick={() => openDeleteCourseModal(course)}
                      >
                        <em class="fa fa-trash"></em>
                      </button>
                    </td>
                    <td className="d-none d-md-table-cell">{course.date}</td>
                    <td className="d-none d-md-table-cell" align="center">
                      <a
                        href={`${config.localApi}/${course.imageUrl}`}
                        target="_blank"
                        class="btn btn-info my-1 my-md-0"
                      >
                        <em class="fa fa-image"></em>
                      </a>
                    </td>
                    <td>{course.teacher}</td>
                    <td className="text-danger">
                      {course.price === 0 ? "رایگان" : course.price}
                    </td>
                    <td
                      className="d-none d-md-table-cell"
                      style={{ maxWidth: "200px" }}
                    >
                      <span
                        class="d-inline-block text-truncate"
                        style={{ maxWidth: "180px" }}
                      >
                        {course.info}
                      </span>
                    </td>
                    <td className="text-primary">{course.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="navbar d-flex justify-content-between align-items-center footer">
              <div class="form-inline">
                <input
                  class="form-control"
                  type="search"
                  placeholder=" جستجو دوره"
                  aria-label="Search"
                  onChange={e => setCourseSearch(e.target.value)}
                />
                <button class="btn btn-outline-primary disabled">
                  <em class="fa fa-search"></em>
                </button>
              </div>
              <Pagination
                objLength={filteredCourses.length}
                currentPage={currentPage}
                perPage={perPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoursesEdit;
