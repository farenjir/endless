import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
// utils
import React from "react";
import Helmet from "react-helmet";

const Profile = () => {
  const user = useSelector((state) => state.user);
  // validation user login
  if (isEmpty(user)) return <Redirect to="/" />;
  return (
    <main>
      <div className="container">
        <Helmet>
          <title> اندلس | حساب کاربری</title>
        </Helmet>
        <div className="d-flex flex-column text-right">
          <div className="container-fluid">
            <div className="row mt-4">
              <div className="col-lg-4">
                <div className="card mb-3">
                  <div className="card-body text-center shadow">
                    <img
                      className="rounded-circle mb-3 mt-4"
                      src="/assets/images/redux.svg"
                      width="160"
                      height="190"
                      alt="تصویر شما یافت نشد"
                    />
                    <div className="mb-3">
                      <button className="btn btn-primary btn-sm" type="button">
                        ذخیره عکس
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col">
                    <div className="card shadow mb-3">
                      <div className="card-header py-3">
                        <p className="text-primary m-0 font-weight-bold">
                          ذخیره اطلاعات
                        </p>
                      </div>
                      <div className="card-body">
                        <form style={{ direction: "rtl" }}>
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group">
                                <label for="username">
                                  <strong>نام کامل</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder={user.fullname}
                                  name="username"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label for="email">
                                  <strong>آدرس ایمیل</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="email"
                                  placeholder={user.email}
                                  name="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group">
                                <label for="first_name">
                                  <strong> کلمه عبور جدید</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="password"
                                  placeholder=""
                                  name="first_name"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label for="last_name">
                                  <strong>تکرار کلمه عبور</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="password"
                                  placeholder=""
                                  name="last_name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              className="btn btn-primary btn-sm"
                              type="submit"
                            >
                              ذخیره اطلاعات
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="card shadow">
                      <div className="card-header py-4">
                        <p className="text-primary m-0 font-weight-bold">
                          اطلاعات تماس
                        </p>
                      </div>
                      <div className="card-body">
                        <form style={{ direction: "rtl" }}>
                          <div className="form-group">
                            <label for="address">
                              <strong>آدرس</strong>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="جنت آباد , کاشانی , پلاک 8"
                              name="address"
                            />
                          </div>
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group">
                                <label for="city">
                                  <strong>شهر</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="تهران"
                                  name="city"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label for="country">
                                  <strong>استان</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="تهران"
                                  name="country"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              className="btn btn-primary btn-sm"
                              type="submit"
                            >
                              ذخیره اطلاعات
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Profile;
