import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Helmet from "react-helmet";

const Profile = () => {
  const user = useSelector(state => state.user);
  // validation user login
  if (isEmpty(user)) return <Redirect to="/" />;
  return (
    <main>
      <div class="container">
        <Helmet>
          <title> اندلس | حساب کاربری</title>
        </Helmet>
        <div class="d-flex flex-column text-right">
          <div class="container-fluid">
             <div class="row mt-4">
              <div class="col-lg-4">
                <div class="card mb-3">
                  <div class="card-body text-center shadow">
                    <img
                      class="rounded-circle mb-3 mt-4"
                      src="/assets/images/redux.svg"
                      width="160"
                      height="190"
                      alt="تصویر شما یافت نشد"
                    />
                    <div class="mb-3">
                      <button class="btn btn-primary btn-sm" type="button">
                        ذخیره عکس
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="row">
                  <div class="col">
                    <div class="card shadow mb-3">
                      <div class="card-header py-3">
                        <p class="text-primary m-0 font-weight-bold">
                          ذخیره اطلاعات
                        </p>
                      </div>
                      <div class="card-body">
                        <form style={{ direction: "rtl" }}>
                          <div class="form-row">
                            <div class="col">
                              <div class="form-group">
                                <label for="username">
                                  <strong>نام کامل</strong>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder={user.fullname}
                                  name="username"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div class="form-group">
                                <label for="email">
                                  <strong>آدرس ایمیل</strong>
                                </label>
                                <input
                                  class="form-control"
                                  type="email"
                                  placeholder={user.email}
                                  name="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col">
                              <div class="form-group">
                                <label for="first_name">
                                  <strong> کلمه عبور جدید</strong>
                                </label>
                                <input
                                  class="form-control"
                                  type="password"
                                  placeholder=""
                                  name="first_name"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div class="form-group">
                                <label for="last_name">
                                  <strong>تکرار کلمه عبور</strong>
                                </label>
                                <input
                                  class="form-control"
                                  type="password"
                                  placeholder=""
                                  name="last_name"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <button
                              class="btn btn-primary btn-sm"
                              type="submit"
                            >
                              ذخیره اطلاعات
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="card shadow">
                      <div class="card-header py-4">
                        <p class="text-primary m-0 font-weight-bold">
                          اطلاعات تماس
                        </p>
                      </div>
                      <div class="card-body">
                        <form style={{ direction: "rtl" }}>
                          <div class="form-group">
                            <label for="address">
                              <strong>آدرس</strong>
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              placeholder="جنت آباد , کاشانی , پلاک 8"
                              name="address"
                            />
                          </div>
                          <div class="form-row">
                            <div class="col">
                              <div class="form-group">
                                <label for="city">
                                  <strong>شهر</strong>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder="تهران"
                                  name="city"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div class="form-group">
                                <label for="country">
                                  <strong>استان</strong>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder="تهران"
                                  name="country"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <button
                              class="btn btn-primary btn-sm"
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
