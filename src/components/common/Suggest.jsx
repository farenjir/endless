import React,{ Fragment } from "react";

const SellSugest = () => {
  return (
    <Fragment>
      {/* <!-- selling section --> */}
      <section>
        <div className="sells py-2 d-flex align-items-center">
          {/* <!-- section info --> */}
          <div className="container">
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
              <div className="col-12 pt-4">
                <button className="btn btn-block w-50 mx-auto btn-danger">
                  Buy This
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end selling section --> */}
    </Fragment>
  );
};

export default SellSugest;
