import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashTopNav = () => {
  const user = useSelector(state => state.user);
  return (
    <nav>
      <div className="d-flex justify-content-end align-items-center navbar navbar-light navbar-expand bg-white shadow topbar static-top">
        <ul class="nav navbar-nav flex-nowrap">
          <li class="nav-item dropdown no-arrow mx-1">
            <div class="nav-item dropdown no-arrow">
              <Link
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                to="#"
              >
                <span class="badge badge-danger badge-counter">3+</span>
                <i class="fas fa-bell fa-fw"></i>
              </Link>
              <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
                <h6 class="dropdown-header">اعلان ها</h6>
                <Link class="d-flex align-items-center dropdown-item" to="#">
                  <div class="mr-3">
                    <div class="bg-primary icon-circle">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span class="small text-gray-500">December 12, 2019</span>
                    <p>A new monthly report is ready to download!</p>
                  </div>
                </Link>
                <Link class="d-flex align-items-center dropdown-item" to="#">
                  <div class="mr-3">
                    <div class="bg-success icon-circle">
                      <i class="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span class="small text-gray-500">December 7, 2019</span>
                    <p>$290.29 has been deposited into your account!</p>
                  </div>
                </Link>
                <Link class="d-flex align-items-center dropdown-item" to="#">
                  <div class="mr-3">
                    <div class="bg-warning icon-circle">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span class="small text-gray-500">December 2, 2019</span>
                    <p>
                      Spending Alert: We've noticed unusually high spending for
                      your account.
                    </p>
                  </div>{" "}
                </Link>
                <Link
                  class="text-center dropdown-item small text-gray-500"
                  to="#"
                >
                  موت کردن اعلان ها
                </Link>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown no-arrow mx-1">
            <div class="nav-item dropdown no-arrow">
              <Link
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                to="#"
              >
                <i class="fas fa-envelope fa-fw"></i>
                <span class="badge badge-danger badge-counter">7</span>
              </Link>
              <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
                <h6 class="dropdown-header">پیام ها</h6>
                <Link class="d-flex align-items-center dropdown-item" to="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="assets/images/customer-img.jpg"
                      alt="IMG"
                    />
                    <div class="bg-success status-indicator"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">
                      <span>
                        Hi there! I am wondering if you can help me with a
                        problem I've been having.
                      </span>
                    </div>
                    <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                  </div>
                </Link>
                <Link class="d-flex align-items-center dropdown-item" to="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="assets/images/customer-img.jpg"
                      alt="IMG"
                    />
                    <div class="status-indicator"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">
                      <span>
                        I have the photos that you ordered last month!
                      </span>
                    </div>
                    <p class="small text-gray-500 mb-0">Jae Chun - 1d</p>
                  </div>
                </Link>
                <Link
                  class="text-center dropdown-item small text-gray-500"
                  to="#"
                >
                  نمایش همه پیام ها
                </Link>
              </div>
            </div>
            <div
              class="shadow dropdown-list dropdown-menu dropdown-menu-right"
              aria-labelledby="alertsDropdown"
            ></div>
          </li>
          <li class="nav-item dropdown no-arrow mx-1">
            <div class="nav-item dropdown no-arrow">
              <Link
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                to="/cart"
              >
                <i class="fas fa-shopping-bag fa-fw"></i>
                <span class="badge badge-danger badge-counter">2</span>
              </Link>
            </div>
          </li>
          <div class="d-none d-sm-block topbar-divider"></div>
          <li class="nav-item dropdown no-arrow">
            <div class="nav-item dropdown no-arrow">
              <Link
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="mx-2 text-gray-600 small">{user.fullname}</span>
                <img
                  class="border rounded-circle img-profile"
                  src="assets/images/customer-img.jpg"
                  alt="IMG"
                />
              </Link>
              <div class="dropdown-menu dropdown-menu-user shadow dropdown-menu-right animated--grow-in">
                <Link class="dropdown-item" to="/profile">
                  <i class="fas fa-user fa-sm fa-fw mx-2 text-gray-400"></i>
                  حساب کاربری
                </Link>
                <Link class="dropdown-item" to="/contact-us">
                  <i class="fas fa-cogs fa-sm fa-fw mx-2 text-gray-400"></i>
                  تماس با ما
                </Link>
                <Link class="dropdown-item" to="/contact-us">
                  <i class="fas fa-list fa-sm fa-fw mx-2 text-gray-400"></i>
                  انتقاد و پیشنهاد
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/logout">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mx-2 text-gray-400"></i>
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
