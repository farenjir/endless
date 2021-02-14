import React from "react";
// import { useSelector } from "react-redux";

const UserManage = () => {
  // const users = useSelector(state => state.users);
  return (
    <div class="row">
      <div class="col text-right">
        <h1>مدیریت کاربران مجموعه اندلس</h1>
        <div class="panel panel-default panel-table">
          <div class="panel-heading">
            <div class="row my-3">
              <div class="col-6 text-right offset-6">
                <button type="button" class="btn btn-sm btn-primary btn-create">
                  ساخت عضو جدید
                </button>
              </div>
            </div>
          </div>
          <div class="panel-body">
            <table
              class="table table-striped table-bordered table-list"
              style={{ direction: "ltr" }}
            >
              <thead>
                <tr>
                  <th>اصلاح کاربر</th>
                  <th>ایمیل</th>
                  <th>عنوان</th>
                  <th>نام</th>
                </tr>
              </thead>
              <tbody>
                {/* {users.map(user => (
                  <tr>
                    <td align="center">
                      <button class="btn btn-success mx-1 my-1 my-md-0">
                        <em class="fa fa-cog"></em>
                      </button>
                      <button class="btn btn-danger mx-1">
                        <em class="fa fa-trash"></em>
                      </button>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.title}</td>
                    <td>{user.fullname}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserManage;
