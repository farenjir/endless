import React, { useEffect } from "react";
// import config from "../../services/config.json"
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getSinglePost } from "../../actions/post";
import Helmet from "react-helmet";
import { singlePostIdValidator } from "../../utils/idValidator";

const BlogPost = props => {
  const singlePost = useSelector(state => state.post);
  const dispatch = useDispatch();
  // after mount
  useEffect(() => {
    if (singlePostIdValidator(props.match.params.id)) {
      dispatch(getSinglePost(props.match.params.id));
    }
  }, []);
  // idValidator
  if (!singlePostIdValidator(props.match.params.id)) {
    return <Redirect exact to="/notfound" />;
  }
  return (
    <main>
      <div className="container pt-2 mb-0">
        <Helmet>
          <title>اندلس | خبرنامه</title>
        </Helmet>
        <div className=" bg-light">
          <img
            className="rounded img-fluid w-100"
            src="/assets/images/imageAple.jpg"
            alt="تصویر پست یافت نشد"
          />
          <div className="info-top p-3 text-center">
            <h3 className=" text-info">{singlePost.title}</h3>
            <div className="post-info">
              <span className="text-muted">
                {singlePost.date} نویسنده :{" "}
                <Link to={singlePost.writer}>{singlePost.writer}</Link>
              </span>
            </div>
            <p className=" font-weight-bold text-right text-justify">
              <p className="pt-4 text-dark">{singlePost.info}</p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
              درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا
              با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
              طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می
              توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
              سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
              اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
              استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
              تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
              می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
              فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
              زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
              مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته
              اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
