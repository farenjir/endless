import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      {/* <!-- footer --> */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="mb-4 text-center">
                <img
                  src="/assets/images/redux.svg"
                  alt="companyLogo"
                  height="200px"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mt-3">
              <div>
                <span className="fas fa-home"> </span>
                <p>
                  <span>21 Revolution Street</span> Paris, France
                </p>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <p> +1 555 123456</p>
              </div>
              <div>
                <i className="fa fa-envelope footer-contacts-icon"></i>
                <p>
                  {" "}
                  <Link href="#" target="_blank">
                    support@company.com
                  </Link>
                </p>
              </div>
              <div>
                <Link href="#" className="nav-icon">
                  <i className="fab fa-2x fa-facebook mx-2 text-primery"></i>
                </Link>
                <Link href="#" className="nav-icon">
                  <i className="fab fa-2x fa-instagram mx-2 text-danger"></i>
                </Link>
                <Link href="#" className="nav-icon">
                  <i className="fab fa-2x fa-twitter mx-2 text-info"></i>
                </Link>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-sm-6 col-md-3 mt-3">
              <div className="d-flex justify-content-end justify-content-md-center">
                <ul className="list-unstyled">
                  <li>
                    <h4>لیست دوره ها</h4>
                  </li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mt-3">
              <h4>عضویت در خبرنامه</h4>
              <p>
                {" "}
                برای دستیابی به وبلاگ و دوره های جدید در خبرنامه سایت اندلس عضو
                شوید برای دستیابی به وبلاگ و دوره های جدید در خبرنامه سایت اندلس
                عضو شوید
              </p>
              <form className="user" style={{ direction: "rtl" }}>
                <div className="form-group">
                  <input
                    className="form-control form-control-user"
                    type="email"
                    aria-describedby="emailHelp"
                    placeholder="ایمیل خود را وارد کنید"
                    name="email"
                  />
                </div>
                {/* <!-- <button className="btn w-25  btn-outline-primary btn-block btn-user" type="submit">Send</button> --> */}
              </form>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- end footer --> */}
    </Fragment>
  );
};

export default Footer;
