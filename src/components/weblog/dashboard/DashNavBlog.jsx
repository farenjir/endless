import React from "react";

const DashNavBlog = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon btn-sm"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav text-center font-weight-bold">
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">
              جدید
            </a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">
              ویژه{" "}
            </a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">
              موردعلاقه
            </a>
          </li>
        </ul>
      </div>
      <form className="form-inline my-1 d-none d-md-inline-block">
        <input
          className="form-control"
          type="search"
          placeholder=" جستجو خبر"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary disabled" type="button">
          <em className="fa fa-search"></em>
        </button>
      </form>
    </nav>
  );
};
export default DashNavBlog;
