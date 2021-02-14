import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const HomeTitel = () => {
  return (
    <Fragment>
      {/* <!-- img show --> */}
      <section className="feature py-5">
        <div className="container">
          {/* <!-- title section --> */}
          <div className="col-12 mb-3">
            {/* <!-- section info --> */}
            <div className="row text-center">
              <div className="col-12">
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
              <div className="col-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, quo elit. Sapiente, quo
                </p>
                <h4>etur adipisicing elit. Sapiente</h4>
              </div>
            </div>
          </div>
          {/* <!-- title section --> */}
            <div className="col-12 col-md-9 mx-auto mb-3">
          <div className="row">
              {/* <!--featured img--> */}
              <div className="col-10 mx-auto col-lg-6 featured-img my-2 align-self-center">
                <div className="img-container">
                  <img
                    src="assets/images/car-american-img.jpeg"
                    alt=""
                    className="img-fluid featured-photo"
                  />
                  <Link href="#" className="featured-link">
                    <i className="fas fa-search"></i>
                  </Link>
                </div>
                <p className="w-100 text-center text-muted mx-auto">
                  Lorem ipsum dolor amet adipisicing elit.
                </p>
              </div>
              {/* <!--featured img--> */}
              <div className="col-10 mx-auto col-lg-6 featured-img my-3 align-self-center">
                <div className="img-container">
                  <img
                    src="assets/images/car-american-img.jpeg"
                    alt=""
                    className="img-fluid featured-photo"
                  />
                  <Link href="#" className="featured-link">
                    <i className="fas fa-search"></i>
                  </Link>
                </div>
                <p className="w-100 text-center text-muted mx-auto">
                  Lorem ipsum dolor amet adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end img show --> */}
      {/* <!-- selling section --> */}
      <section>
        <div className="sells py-5 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 mb-5">
                {/* <!-- section imgage --> */}
                <div className="row d-flex justify-content-around align-items-center">
                  <Link href="#">
                    <i className="fas fa-home"></i>
                  </Link>
                  <Link href="#">
                    <i className="fas fa-home"></i>
                  </Link>
                  <Link href="#">
                    <i className="fas fa-home"></i>
                  </Link>
                  <Link href="#">
                    <i className="fas fa-home"></i>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-7">
                {/* <!-- section info --> */}
                <div className="row text-center">
                  <div className="col-12">
                    <h3>Lorem ipsum dolor sit amet</h3>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, quo elit. Sapiente, quo
                    </p>
                    <h4>etur adipisicing elit. Sapiente</h4>
                  </div>
                  <div className="col-12 mt-3 d-flex justify-content-around">
                    <ul>
                      <li>Lorem ipsum dolor</li>
                      <li>Lorem ipsum dolor</li>
                      <li>Lorem ipsum dolor</li>
                      <li>Lorem ipsum dolor</li>
                      <li>Lorem ipsum dolor</li>
                    </ul>
                    <ul>
                      <li>Lorem ipsum dolor</li>
                      <li>Lorem ipsum dolor</li>
                      <li>Lorem ipsum dolor</li>
                      <li>Lorem ipsum dolor</li>
                      <li>Lorem ipsum dolor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end selling section --> */}
    </Fragment>
  );
};

export default HomeTitel;
