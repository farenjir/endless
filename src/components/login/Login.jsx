import React, { useContext } from "react";
// router
import { Link, Redirect } from "react-router-dom";
import { userContext } from "../../context/userContext";
// utils
import { isEmpty } from "lodash";
import { Helmet } from "react-helmet";

const Login = ({user}) => {
  // contextApi
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    validator,
  } = useContext(userContext);
  // check user login
  if (!isEmpty(user)) return <Redirect to="/" />;
  // return .............................................
  return (
    <main>
      <div className="container pt-3">
        <Helmet>
          <title>اندلس | ورود</title>
        </Helmet>
        {/* <!-- info section --> */}
        <section>
          <div className="container">
            <div className="text-center">
              <h2>Features</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- /info section --> */}
        {/* <!-- login section --> */}
        <section>
          <div className="row justify-content-center">
            <div className="col-md-10 mx-auto">
              <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-flex">
                      <div
                        className="flex-grow-1 bg-login-image"
                        style={{
                          backgroundImage:
                            "url(assets/images/car-american-img.jpeg)",
                        }}
                      ></div>
                    </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h4 className="text-dark mb-4">
                            {" "}
                            ورود به حساب کاربری
                          </h4>
                        </div>
                        <form
                          className="user"
                          style={{ direction: "rtl" }}
                          onSubmit={e => handleLogin(e)}
                        >
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              type="email"
                              aria-describedby="emailHelp"
                              placeholder="آدرس ایمیل"
                              name="email"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                            />
                            <small className="text-right mx-3 mt-1 py-0 text-danger form-inline">
                              {validator.current.message(
                                "email",
                                email,
                                "required|email"
                              )}
                            </small>
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              type="password"
                              placeholder="کلمه عبور"
                              name="password"
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                            />
                            <small className="text-right mx-3 mt-1 py-0 text-danger form-inline">
                              {validator.current.message(
                                "password",
                                password,
                                "required|min:8"
                              )}
                            </small>
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small text-right mx-3">
                              <div className="form-check">
                                <input
                                  className="form-check-input custom-control-input"
                                  type="checkbox"
                                />
                                <label className="form-check-label custom-control-label">
                                  حساب من رو ذخیره کن
                                </label>
                              </div>
                            </div>
                          </div>
                          <button
                            className="mt-5 btn btn-primary btn-block text-white btn-user"
                            type="submit"
                          >
                            ورود
                          </button>
                          <hr />
                          <Link
                            className="btn btn-primary btn-block text-white btn-google btn-user"
                            role="button"
                          >
                            ورود با حساب گوگل
                            <i className="fab fa-google mx-2"></i>
                          </Link>
                          <hr />
                        </form>
                        <div className="text-center">
                          <Link to="/forget-pass" className="small">
                            کلمه عبور رو فراموش کردید ؟
                          </Link>
                        </div>
                        <div className="text-center">
                          <Link to="/register" className="small">
                            ساخت حساب کاربری جدید !{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /login section --> */}
      </div>
    </main>
  );
};

export default Login;
