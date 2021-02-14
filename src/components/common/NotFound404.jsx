import React from "react";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NotFound404 = () => {
  const user = useSelector(state => state.user);
  return (
    <div class="not-found">
      <div class="mt-5">
        <div class="error mx-auto" data-text="404">
          <p class="m-0">404</p>
        </div>
        <p class="text-dark mb-5 lead">صفحه مورد نظر یافت نشد</p>
        <p class="text-black-50 mb-0">
          ! صفحه مورد نظر شما حذف و یا وجود ندارد
        </p>
        <div className="my-2">
          <Link to="/">← بازگشت به صفحه اصلی</Link>
        </div>
        {!isEmpty(user) ? (
          <Link className="text-success" to="/dashboard">← بازگشت به داشبورد</Link>
        ) : null}
      </div>
    </div>
  );
};
export default NotFound404;
