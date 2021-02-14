import React from "react";
import Helmet from "react-helmet";

const Laws = () => {
  return (
    <main>
      {/* <!-- skills section --> */}
      <Helmet>
        <title>اندلس | قوانین سایت</title>
      </Helmet>
      <section>
        <div className="container py-5">
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
      </section>
      {/* <!-- /skills section --> */}
      {/* <!-- selling section --> */}
      <section>
        <div className="sells py-5 d-flex align-items-center">
          {/* <!-- section info --> */}
          <div className="container">
            <div className="text-center mt-5">
              <h2>Special Skills</h2>
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
      {/*   <!-- info section --> */}
      <section>
        <div className="container">
          <div className="my-5 text-center">
            <h2>Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 my-3">
              <div className="row">
                <div className="col-2 d-flex align-items-start justify-content-center">
                  <i className="mx-1 fas fa-user-circle icon-feature"></i>
                </div>
                <div className="col-10">
                  <h5 className="text-info">Bootstrap 4</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 my-3">
              <div className="row">
                <div className="col-2 d-flex align-items-start justify-content-center">
                  <i className="mx-1 fas fa-user-circle icon-feature"></i>
                </div>
                <div className="col-10">
                  <h5 className="text-info">Bootstrap 4</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*   <!-- /info section --> */}
    </main>
  );
};

export default Laws;
