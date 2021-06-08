import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

const ContactForm = () => {
  // userName
  const user = useSelector(state => state.user);
  return (
    <section>
      {/* <!-- contactUs section --> */}
      <div className="container pt-4 pb-0">
        <div className="row text-center d-block">
          <div className="px-3 px-md-5">
            <h5>
              {" "}
              سلام{" "}
              <strong> {isEmpty(user) ? "کاربر" : `${user.fullname}`} </strong>
              عزیز
            </h5>
            <p className="text-success">
              تیم پشتیبانی اندلس همه روزه در خدمت شما هست
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-10 mx-auto">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-flex">
                  <div
                    className="flex-grow-1 bg-login-image"
                    style={{
                      backgroundImage: "url(assets/images/react-img.png)",
                    }}
                  ></div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h4 className="text-dark mb-4">تماس با ما</h4>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          className="form-control form-control-user text-right"
                          type="text"
                          name="full_name"
                          placeholder="نام کامل"
                          value={user.fullname}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control form-control-user text-right"
                          type="email"
                          name="email"
                          placeholder="ایمیل"
                          value={user.email}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control form-control-user text-right"
                          type="text"
                          placeholder="عنوان"
                          name="subject"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control text-right"
                          type="text"
                          name="info"
                          placeholder="متن ..."
                        />
                      </div>
                      <hr />
                      <button
                        className="btn btn-primary btn-block text-white btn-user mt-2"
                        type="submit"
                      >
                        ارسال
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /contactUs section --> */}
    </section>
  );
};
export default ContactForm;
