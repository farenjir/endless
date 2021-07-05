import React from "react";

const BuyVip = () => {
  return (
    <section>
      <div class="container">
        <div class="block-heading text-center py-4">
          <h2>خرید اشتراک ویژه</h2>
          <p>
            تاکنون مجموعه اندلس توانسته دوره در زمینه های طراحی و گرافیک تولید
            نماید
          </p>
        </div>
        <div class="row justify-content-center text-right">
          <div class="col-12 col-md-5 col-lg-4 p-2 ">
            <div class="clean-pricing-item clean-pricing-item-normal">
              <div class="heading">
                <h3>معمولی</h3>
              </div>
              <p>
                با خرید دوره های اندلس به محتوای آموزشی کاربردی دسترسی دارید
              </p>
              <div>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>دسترسی به : </small>
                  <span>
                    <span className="badge-primary badge-pill badge">4</span>{" "}
                    دوره
                  </span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>اعتبار دوره : </small>
                  <span>180 روز</span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>پشتیبانی آنلاین :</small>
                  <span>دارد</span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>قیمت :</small>
                  <span>200/000 <small>تومان</small></span>
                </h5>
              </div>
              <button class="btn btn-outline-primary btn-block" type="button">
                خرید
              </button>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-4 p-2 ">
            <div class="clean-pricing-item clean-pricing-item-suggest">
              <div class="ribbon">
                <span>پیشنهاد اندلس</span>
              </div>
              <div class="heading">
                <h3>ویژه</h3>
              </div>
              <p>
                با خرید دوره های اندلس به محتوای آموزشی کاربردی دسترسی دارید
              </p>
              <div>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>دسترسی به : </small>
                  <span>
                    <span className="badge-success badge-pill badge">12</span>{" "}
                    دوره
                  </span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>اعتبار دوره : </small>
                  <span>180 روز</span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>پشتیبانی آنلاین :</small>
                  <span>دارد</span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>قیمت :</small>
                  <span>200/000 <small>تومان</small></span>
                </h5>
              </div>
              <button class="btn btn-outline-success btn-block" type="button">
                خرید
              </button>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-4 p-2 ">
            <div class="clean-pricing-item clean-pricing-item-pro">
              <div class="heading">
                <h3>نامحدود</h3>
              </div>
              <p>
                با خرید دوره های اندلس به محتوای آموزشی کاربردی دسترسی دارید
              </p>
              <div>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>دسترسی به : </small>
                  <span>
                    <span className="badge-danger badge-pill badge">15</span>{" "}
                    دوره
                  </span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>اعتبار دوره : </small>
                  <span>180 روز</span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>پشتیبانی آنلاین :</small>
                  <span>دارد</span>
                </h5>
                <h5 className="d-flex justify-content-between align-items-center my-3">
                  <small>قیمت :</small>
                  <span>200/000 <small>تومان</small></span>
                </h5>
              </div>
              <button class="btn btn-outline-danger btn-block" type="button">
                خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BuyVip;
