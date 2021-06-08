import React, { useState } from "react";
// antDesign
import { Steps } from "antd";
import { Fragment } from "react";
const CourseProgress = () => {
  const [current, setCurrent] = useState(0);
  const { Step } = Steps;
  const onChange = current => {
    setCurrent({ current });
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-3 my-1 ">
          <div className="card shadow border-left-danger p-3">
            <Steps current={current} onChange={onChange} direction="vertical">
              <Step title=" قدم 1" description="نمونه هدف گذاری" />
              <Step title=" قدم دوم" description="نمونه هدف گذاری" />
              <Step title=" قدم سوم" description="نمونه هدف گذاری" />
            </Steps>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-3 my-1 ">
          <div className="card shadow border-left-danger p-3">
            <Steps current={current} onChange={onChange} direction="vertical">
              <Step title="قدم 1" description="نمونه هدف گذاری" />
              <Step title=" قدم دوم" description="نمونه هدف گذاری" />
              <Step title=" قدم سوم" description="نمونه هدف گذاری" />
            </Steps>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CourseProgress;
