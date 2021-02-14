import React from "react";

const HomeHeader = () => {
  return (
    <header className="header">
      <div className="row height-max align-items-center">
        <div className="col-md-9 ml-auto text-right pr-5">
          <h5 className="title-heading d-inline-block p-2 text-uppercase">
            Endless Universe
          </h5>
          <h2 className="title text-uppercase">the Best Place to Learn</h2>
          <button className="btn btn-success text-white mb-2">
            <i className="mx-1 fas fa-home"></i>buy fullPackage UTS
          </button>
          <br />
          <button className="btn btn-outline-light ">
            <i className="mx-1 fas fa-home"></i>download 3tree free
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
