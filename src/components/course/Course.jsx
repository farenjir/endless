import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCourse } from "../../actions/course";
import Helmet from "react-helmet";
import { courseIdValidator } from "../../utils/idValidator";
import { Redirect } from "react-router";

const Course = props => {
  const course = useSelector(state => state.course);
  const dispatch = useDispatch();
  // after mount
  useEffect(() => {
    if (courseIdValidator(props.match.params.id)) {
      dispatch(getSingleCourse(props.match.params.id));
    }
  }, []);
  // idValidator
  if (!courseIdValidator(props.match.params.id)) {
    return <Redirect exact to="/notfound" />;
  }
  
  return (
    <main>
      <div className="container pt-3 mb-0">
        <Helmet>
          <title>اندلس | دوره</title>
        </Helmet>
        <div className=" bg-light">
          <img
            className="rounded img-fluid w-100"
            src="/assets/images/imageAple.jpg"
            alt="تصویر دوره یافت نشد"
          />
          <div className="info-top p-3 text-center">
            <h3 className=" text-info">{course.title}</h3>
            <div className="post-info">
              <span className="text-muted">
                {course.date} نویسنده : <p>{course.price}</p>
              </span>
            </div>
            <p className=" font-weight-bold text-right text-justify">
              <p className="pt-4 text-dark">{course.info}</p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Course;
