import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashTopNav = () => {
  const user = useSelector((state) => state.user);
  return (
    <nav>
      <div className="d-flex justify-content-end align-items-center navbar navbar-light navbar-expand bg-white shadow topbar static-top">
        <ul className="nav navbar-nav flex-nowrap">
          <li className="nav-item dropdown no-arrow mx-1">
            <div className="nav-item dropdown no-arrow">
              <Link
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                to="#"
              >
                <span className="badge badge-danger badge-counter">3+</span>
                <i className="fas fa-bell fa-fw"></i>
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
                <h6 className="dropdown-header">اعلان ها</h6>
                <Link
                  className="d-flex align-items-center dropdown-item"
                  to="#"
                >
                  <div className="mr-3">
                    <div className="bg-primary icon-circle">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span className="small text-gray-500">
                      December 12, 2019
                    </span>
                    <p>A new monthly report is ready to download!</p>
                  </div>
                </Link>
                <Link
                  className="d-flex align-items-center dropdown-item"
                  to="#"
                >
                  <div className="mr-3">
                    <div className="bg-success icon-circle">
                      <i className="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span className="small text-gray-500">
                      December 7, 2019
                    </span>
                    <p>$290.29 has been deposited into your account!</p>
                  </div>
                </Link>
                <Link
                  className="d-flex align-items-center dropdown-item"
                  to="#"
                >
                  <div className="mr-3">
                    <div className="bg-warning icon-circle">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span className="small text-gray-500">
                      December 2, 2019
                    </span>
                    <p>
                      Spending Alert: We've noticed unusually high spending for
                      your account.
                    </p>
                  </div>{" "}
                </Link>
                <Link
                  className="text-center dropdown-item small text-gray-500"
                  to="#"
                >
                  موت کردن اعلان ها
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <div className="nav-item dropdown no-arrow">
              <Link
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                to="#"
              >
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter">7</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
                <h6 className="dropdown-header">پیام ها</h6>
                <Link
                  className="d-flex align-items-center dropdown-item"
                  to="#"
                >
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="assets/images/customer-img.jpg"
                      alt="IMG"
                    />
                    <div className="bg-success status-indicator"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">
                      <span>
                        Hi there! I am wondering if you can help me with a
                        problem I've been having.
                      </span>
                    </div>
                    <p className="small text-gray-500 mb-0">
                      Emily Fowler - 58m
                    </p>
                  </div>
                </Link>
                <Link
                  className="d-flex align-items-center dropdown-item"
                  to="#"
                >
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="assets/images/customer-img.jpg"
                      alt="IMG"
                    />
                    <div className="status-indicator"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">
                      <span>
                        I have the photos that you ordered last month!
                      </span>
                    </div>
                    <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                  </div>
                </Link>
                <Link
                  className="text-center dropdown-item small text-gray-500"
                  to="#"
                >
                  نمایش همه پیام ها
                </Link>
              </div>
            </div>
            <div
              className="shadow dropdown-list dropdown-menu dropdown-menu-right"
              aria-labelledby="alertsDropdown"
            ></div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <div className="nav-item dropdown no-arrow">
              <Link
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                to="/cart"
              >
                <i className="fas fa-shopping-bag fa-fw"></i>
                <span className="badge badge-danger badge-counter">2</span>
              </Link>
            </div>
          </li>
          <div className="d-none d-sm-block topbar-divider"></div>
          <li className="nav-item dropdown no-arrow">
            <div className="nav-item dropdown no-arrow">
              <Link
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                to="#"
              >
                <span className="mx-2 text-gray-600 small">
                  {user.fullname}
                </span>
                <img
                  className="border rounded-circle img-profile"
                  src="assets/images/customer-img.jpg"
                  alt="IMG"
                />
              </Link>
              <div className="dropdown-menu dropdown-menu-user shadow dropdown-menu-right animated--grow-in">
                <Link className="dropdown-item" to="/profile">
                  <i className="fas fa-user fa-sm fa-fw mx-2 text-gray-400"></i>
                  حساب کاربری
                </Link>
                <Link className="dropdown-item" to="/contact-us">
                  <i className="fas fa-cogs fa-sm fa-fw mx-2 text-gray-400"></i>
                  تماس با ما
                </Link>
                <Link className="dropdown-item" to="/contact-us">
                  <i className="fas fa-list fa-sm fa-fw mx-2 text-gray-400"></i>
                  انتقاد و پیشنهاد
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/logout">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mx-2 text-gray-400"></i>
                  خروج
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default DashTopNav;
