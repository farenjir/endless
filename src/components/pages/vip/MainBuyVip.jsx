import React, { Fragment } from "react";
import BuyVip from "./BuyVip";

const MainBuyVip = () => {
  return (
    <Fragment>
      {/* charts vip */}
      <div style={{ direction: "rtl" }}>
        <BuyVip />
      </div>
      {/* charts vip */}
      <section>
        <div className="py-5 d-flex align-items-center">
          {/* <!-- section info --> */}
          <div className="container">
            <div className="text-center mt-5">
              <h2>امکانات اشتراک ویژه</h2>
            </div>
            <div className="row">
              <div className="col-md-4 my-3">
                <div className="col-md-12 d-flex align-items-start justify-content-center">
                  <i className="fas fa-user-circle icon-feature"></i>
                </div>
                <div className="text-center col-md-12 my-4 px-5">
                  <h5 className="text-info">Bootstrap 4</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="col-md-12 d-flex align-items-start justify-content-center">
                  <i className="fas fa-user-circle icon-feature"></i>
                </div>
                <div className="text-center col-md-12 my-4 px-5">
                  <h5 className="text-info">Bootstrap 4</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="col-md-12 d-flex align-items-start justify-content-center">
                  <i className="fas fa-user-circle icon-feature"></i>
                </div>
                <div className="text-center col-md-12 my-4 px-5">
                  <h5 className="text-info">Bootstrap 4</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- /section info --> */}
          </div>
        </div>
      </section>
      {/* <!-- end selling section --> */}
    </Fragment>
  );
};
export default MainBuyVip;
