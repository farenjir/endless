import React, { Fragment } from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const user = useSelector(state => state.user);
  return (
    <nav className="navbar navbar-main px-3 navbar-expand-md">
      <ul className="navbar-nav  log-cart">
        <li className="nav-item icon-under">
          {" "}
          <NavLink to="/" className="icon-brand-div mx-2">
            <i className="fas fa-infinity icon-brand"></i>
          </NavLink>
        </li>
        <li className="nav-item icon-under logo-cart-item">
          <NavLink
            to="/cart"
            activeStyle={{ color: "gold" }}
            className="nav-link  mx-2 mx-md-0"
          >
            <small>
              <i className="fas fa-shopping-cart mx-1"></i>
              <span className="font-weight-bolder">
                (<strong className="text-danger"> 3 </strong>)
              </span>
            </small>
          </NavLink>
        </li>
      </ul>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNav"
      >
        <span className="nav-icon">
          <i className="fas fa-bars"></i>
        </span>
      </button>
      {/* <!-- navbar collaps --> */}
      <div className="navbar-collapse collapse text-right mx-3" id="myNav">
        <ul className="navbar-nav mx-auto mt-3 mt-md-0">
          <li className="nav-item icon-under">
            <NavLink
              to="/laws"
              activeStyle={{ color: "gold" }}
              className="nav-link"
            >
              قوانین سایت
            </NavLink>
          </li>
          <li className="nav-item icon-under">
            <NavLink
              to="/contact-us"
              activeStyle={{ color: "gold" }}
              className="nav-link"
            >
              تماس با ما
            </NavLink>
          </li>
          <li className="nav-item icon-under">
            <NavLink
              to="/about-us"
              activeStyle={{ color: "gold" }}
              className="nav-link"
            >
              درباره ما
            </NavLink>
          </li>
          <li className="nav-item icon-under">
            <NavLink
              to="/buy-vip"
              activeStyle={{ color: "gold" }}
              className="nav-link"
            >
              خرید اشتراک
              <i className="fas fa-shopping-bag mx-1"></i>
            </NavLink>
          </li>
          <li className="nav-item icon-under">
            <NavLink
              to="/weblog"
              activeStyle={{ color: "gold" }}
              className="nav-link"
            >
              وبلاگ
              <i className="fas fa-newspaper mx-1"></i>
            </NavLink>
          </li>
          <li className="nav-item icon-under">
            <NavLink
              to="/courses"
              activeStyle={{ color: "gold" }}
              className="nav-link"
            >
              دوره ها
              {"  "}
              <i className="fas fa-link mx-1"></i>
            </NavLink>
          </li>
          {!isEmpty(user) ? (
            <li className="nav-item icon-under d-flex align-items-center justify-content-end  d-md-none">
              <NavLink
                to="/dashboard"
                activeStyle={{ color: "gold" }}
                className="nav-link d-md-none"
              >
                داشبورد
                <i className="fas fa-database mx-2"></i>
              </NavLink>
              <NavLink to="/logout" className="nav-link">
                <i class="fa fa-sign-out-alt mx-3" aria-hidden="true"></i>
              </NavLink>
              <NavLink
                to="/profile"
                activeStyle={{ color: "gold" }}
                className="nav-link"
              >
                {user.fullname}
                <i className="fas fa-user mx-2"></i>
              </NavLink>
            </li>
          ) : (
            <Fragment>
              <li className="nav-item icon-under d-md-none">
                <NavLink
                  to="/register"
                  activeStyle={{ color: "gold" }}
                  className="nav-link"
                >
                  ثبت نام
                  {"  "}
                  <i className="fas fa-user-plus mx-1"></i>
                </NavLink>
              </li>
              <li className="nav-item icon-under d-md-none">
                <NavLink
                  to="/login"
                  activeStyle={{ color: "gold" }}
                  className="nav-link"
                >
                  ورود
                  {"  "}
                  <i className="fas fa-user-check mx-1"></i>
                </NavLink>
              </li>
            </Fragment>
          )}
          {/* <li className="nav-item icon-under d-none d-md-block">
            <NavLink
              to="/"
              exact
              activeStyle={{ color: "gold" }}
              className="nav-link"
            >
              صفحه نخست
              {"  "}
              <i className="fa fa-home mx-1"></i>
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div className="d-none d-md-inline-block text-right">
        <ul className="navbar-nav mx-auto mt-3 mt-md-0">
          {isEmpty(user) ? (
            <Fragment>
              {"  "}
              <li className="nav-item icon-under">
                <NavLink
                  to="/login"
                  activeStyle={{ color: "gold" }}
                  className="nav-link"
                >
                  ورود
                  {"  "}
                  <i className="fas fa-user-check mx-1"></i>
                </NavLink>
              </li>
              {"  "}
              <li className="nav-item icon-under">
                <NavLink
                  to="/register"
                  activeStyle={{ color: "gold" }}
                  className="nav-link"
                >
                  ثبت نام
                  {"  "}
                  <i className="fa fa-user-plus mx-1"></i>
                </NavLink>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className="nav-item icon-under">
                <NavLink
                  to="/dashboard"
                  activeStyle={{ color: "gold" }}
                  className="nav-link"
                >
                  داشبورد <i className="fas fa-database mx-1"></i>
                </NavLink>
              </li>
              <li className="nav-item icon-under">
                <NavLink
                  to="/profile"
                  activeStyle={{ color: "gold" }}
                  className="nav-link"
                >
                  <span className="d-md-none d-lg-inline-block">
                    {user.fullname}
                  </span>
                  {""}
                  <i className="fas fa-user mx-1"></i>
                </NavLink>
              </li>
              <li className="nav-item icon-under">
                <NavLink to="/logout" className="nav-link">
                  <i class="fa fa-sign-out-alt" aria-hidden="true"></i>
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
