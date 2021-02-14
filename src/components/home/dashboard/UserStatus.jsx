import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'

const UserStatus =({courses})=>{
    return(
        <Fragment>
        <div className="d-sm-flex justify-content-between align-items-center mb-4">
          <h3 className="text-dark mb-0 text-right">داشبورد</h3>
          <Link
            className="btn btn-primary btn-sm d-none d-sm-inline-block"
            to="/contact-us"
          >
            درخواست مشاوره
            <i className="fas fa-download fa-sm text-white-50 mx-2"></i>
          </Link>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3 mb-4">
            <div className="card shadow border-left-primary py-2">
              <div className="card-body">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2 text-right">
                    <div className="text-uppercase text-primary font-weight-bold text-xs mb-1">
                      <span>کیف پول</span>
                    </div>
                    <div className="text-dark font-weight-bold h5 mb-0">
                      <span>
                        400/000 <small>(تومان)</small>
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-4">
            <div className="card shadow border-left-success py-2">
              <div className="card-body">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2 text-right">
                    <div className="text-uppercase text-success font-weight-bold text-xs mb-1">
                      <span>کاربر ویژه</span>
                    </div>
                    <div className="text-dark font-weight-bold h5 mb-0">
                    <Link to="/dashboard/vip">فعال سازی </Link>
                      <span>
                        <small>
                          <span className="badge-pill badge-success badge">
                            {courses.length}
                          </span>{" "}
                          دوره کاربردی !
                        </small>
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-4">
            <div className="card shadow border-left-info py-2">
              <div className="card-body">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2 text-right">
                    <div className="text-uppercase text-info font-weight-bold text-xs mb-1">
                      <span>دوره های شما</span>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="text-dark font-weight-bold h5 mb-0 mr-3">
                          <small className="text-muted">
                            تا کنون{" "}
                            <strong className="badge badge-info badge-pill">
                              4
                            </strong>{" "}
                            دوره خرید کردید
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-4">
            <div className="card shadow border-left-warning py-2">
              <div className="card-body">
                <div className="row align-items-center no-gutters">
                  <div className="col mr-2 text-right">
                    <div className="text-uppercase text-warning font-weight-bold text-xs mb-1">
                      <span>تیکت های فعال</span>
                    </div>
                    <div className="text-dark font-weight-bold h5 mb-0">
                      <small classNameName="text-muted">تیکت فعالی ندارید !</small>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
}
export default UserStatus