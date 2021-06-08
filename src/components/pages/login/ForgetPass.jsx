import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { forgetPassword } from "../../../services/userServices";
// utils
import SimpleReactValidator from "simple-react-validator";
import { errorMessage, successMessage } from "../../../utils/messageToast";
import Helmet from "react-helmet";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

const ForgetPass = props => {
  const user = useSelector(state => state.user);
  // set states
  const [email, setEmail] = useState("");
  // validator inputs
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "تکمیل این قسمت الزامی است",
        email: "ایمیل وارد شده صحیح نیست",
      },
    })
  );
  // reset data user
  const reset = () => {
    setEmail("");
  };
  // handels
  const handleSubmit = async event => {
    // preventDefualt none
    event.preventDefault();
    // get email values
    const userEmail = {
      email,
    };
    try {
      if (validator.current.allValid()) {
        const { status } = await forgetPassword(userEmail);
        if (status === 201) {
          successMessage("کلمه عبور برای شما ارسال شد");
          reset();
          // push user in HomePage
          props.history.push("/");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      errorMessage("ایمیل شما معتبر نیست");
      console.log(ex);
    }
  };
  // validation user login
  if (!isEmpty(user)) return <Redirect to="/" />;
  // return .............................................
  return (
    <main>
      <div className="container pt-5">
        <Helmet>
          <title>اندلس | بازیابی کلمه عبور</title>
        </Helmet>
        {/* <!-- info section --> */}
        <section>
          <div className="container">
            <div className="mt-5 text-center">
              <h2>بازیابی کلمه عبور</h2>
              <p>
                برای بازیابی کلمه عبور ایمیل خود را وارد نموده و پس از ارسال
                درخواست , بازیابی کلمه عبور به ایمیل شما ارسال خواهد شد
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
                            ایمیل خود را وارد کنید
                          </h4>
                        </div>
                        <form
                          className="user"
                          style={{ direction: "rtl" }}
                          onSubmit={handleSubmit}
                        >
                          <div className="form-group">
                            <input
                              className="form-control form-control-user text-right"
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
                          <button
                            className="btn btn-primary btn-block text-white btn-user"
                            type="submit"
                          >
                            ارسال درخواست
                          </button>
                          <hr />
                        </form>
                        <div className="text-center">
                          <Link to="/login" className="small">
                            بازگشت به صفحه ورود
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

export default ForgetPass;
