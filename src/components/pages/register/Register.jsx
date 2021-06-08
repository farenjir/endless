import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { userContext } from "../../../context/userContext";
// utils
import { isEmpty } from "lodash";
import { Helmet } from "react-helmet";

const Register = ({ user }) => {
  // contextApi
  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    email,
    setEmail,
    password,
    setPassword,
    repeatPass,
    policy,
    setPolicy,
    setRepeatPass,
    handleRegister,
    validator,
  } = useContext(userContext);
  // check user login
  if (!isEmpty(user)) return <Redirect to="/" />;
  // return .............................................
  return (
    <main>
      <div className="container pt-1">
        <Helmet>
          <title> اندلس | ثبت نام</title>
        </Helmet>
        {/* <!-- regestre section --> */}
        <section>
          <div className="col-md-10 mx-auto">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-10 mx-auto">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-5">
                          ساخت حساب کاربری جدید
                        </h4>
                      </div>
                      <form
                        className="user"
                        style={{ direction: "rtl" }}
                        onSubmit={e => handleRegister(e)}
                      >
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              className="form-control form-control-user"
                              type="text"
                              placeholder="نام "
                              name="first_name"
                              value={firstname}
                              onChange={e => setFirstname(e.target.value)}
                            />
                            <small className="text-right mx-3 mt-1 py-0 text-danger form-inline">
                              {validator.current.message(
                                "first_name",
                                firstname,
                                "required"
                              )}
                            </small>
                          </div>
                          <div className="col-sm-6 ">
                            <input
                              className="form-control form-control-user"
                              type="text"
                              placeholder="نام خانوادگی"
                              name="last_name"
                              value={lastname}
                              onChange={e => setLastname(e.target.value)}
                            />
                            <small className="text-right mx-3 mt-1 py-0 text-danger form-inline">
                              {validator.current.message(
                                "last_name",
                                lastname,
                                "required"
                              )}
                            </small>
                          </div>
                        </div>
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
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
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
                            <div>
                              {repeatPass === password ? null : (
                                <small className="text-right mx-3 mt-1 py-0 text-warning form-inline d-none d-md-block">
                                  کلمه های عبور باید یکسان باشند
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <input
                              className="form-control form-control-user"
                              type="password"
                              placeholder="تکرار کلمه عبور"
                              name="password_repeat"
                              value={repeatPass}
                              onChange={e => setRepeatPass(e.target.value)}
                            />
                            <small className="text-right mx-3 mt-1 py-0 text-danger form-inline">
                              {validator.current.message(
                                "password_repeat",
                                repeatPass,
                                "required|min:8"
                              )}
                            </small>
                            <div>
                              {repeatPass === password ? null : (
                                <small className="text-right mx-3 mt-1 py-0 text-warning form-inline d-md-none">
                                  کلمه های عبور باید یکسان باشند
                                </small>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small text-right mx-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                با قوانین سایت موافقم
                              </label>
                              <input
                                type="checkbox"
                                name="policy"
                                className="form-check-input mx-2"
                                value={policy}
                                onChange={e =>
                                  setPolicy(e.currentTarget.checked)
                                }
                              />
                              <small className="mt-1 py-0 text-danger form-inline text-right">
                                {validator.current.message(
                                  "policy",
                                  policy,
                                  "required"
                                )}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="col-8 mx-auto">
                          <button
                            className="btn btn-primary btn-block text-white btn-user"
                            type="submit"
                          >
                            ثبت نام
                          </button>
                          <hr />
                          <Link
                            className="btn btn-primary btn-block text-white btn-google btn-user"
                            role="button"
                          >
                            ثبت نام توسط حساب گوگل
                            <i className="fab fa-google mx-2"></i>
                          </Link>
                          <hr />
                        </div>
                      </form>
                      <div className="text-center">
                        <Link to="/laws" className="small">
                          قوانین و مقررات سایت
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link to="/login" className="small">
                          قبلا ثبت نام کردید ! ورود به سایت
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /regestre section --> */}
      </div>
    </main>
  );
};

export default Register;
