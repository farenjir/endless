import React from "react";
import { Link } from "react-router-dom";
// utils
import Helmet from "react-helmet";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <main>
      <Helmet>
        <title> اندلس | تماس با تیم ما</title>
      </Helmet>
      {/* contactForm */}
      <ContactForm />
      {/* contactForm */}
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
      <section>
        <div className="container mt-5 mb-3">
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
      {/* <!-- img-info Section --> */}
      <section>
        <div className="container">
          <div className="row mb-3">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="assets/images/customer-img.jpg"
                  className="rounded-circle img-about"
                  alt="img-teacher"
                />
              </div>
            </div>
            <div className="text-center my-3 px-3 px-md-5">
              <p>
                Hello! I am <strong>John Smith</strong>. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Odio, cum? I work as
                interface and front end developer. I have passion for pixel
                perfect, minimal and easy to use interfaces.
              </p>
              <Link className="btn btn-outline-success" role="button" href="#">
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /img-info Section --> */}
    </main>
  );
};

export default ContactUs;
