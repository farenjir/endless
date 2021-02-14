import React from "react";

const NavTask = () => {
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
              کارهای امروز
            </a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">
              کارهای انجام نشده
            </a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">
            کارهای انجام شده
            </a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">
           زمانبندی کارها
            </a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">
            یادآوری کارها
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavTask;
