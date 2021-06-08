import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
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
      {/* <!-- end selling section --> */}
    </section>
  );
};
export default Features;
