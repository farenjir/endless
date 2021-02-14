import React, { useContext } from "react";
import config from "../../services/config.json";
import Pagination from "../common/Pagination";
import { adminContext } from "../../context/adminContext";

const WeblogEdit = () => {
  // context
  const context = useContext(adminContext);
  const {
    blogListProvider,
    currentPage,
    perPage,
    handlePageChange,
    blogListIndex,
    openNewSinglePostModal,
    openEditSinglePostModal,
    openDeleteSinglePostModal,
    filteredBlogList,
    setBlogListSearch,
  } = context;
  return (
    <div class="row">
      <div class="col text-right">
        <p></p>
        <h2>مدیریت وبلاگ مجموعه اندلس</h2>
        <p>
          تاکنون مجموعه اندلس توانسته{" "}
          <strong className="badge badge-pill badge-primary">
            {blogListProvider.length}
          </strong>{" "}
          پست در زمینه های طراحی و گرافیک تولید نماید
        </p>
        <div class="panel panel-default panel-table">
          <div class="panel-heading">
            <div class="row my-3">
              <div class="col-6 text-right offset-6">
                <button
                  type="button"
                  class="btn btn-sm btn-primary"
                  onClick={openNewSinglePostModal}
                >
                  <em class="fa fa-plus-circle mx-2"></em>
                  ساخت پست جدید
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
                  <th>اصلاح پست</th>
                  <th className="d-none d-md-table-cell">زمان ارسال</th>
                  <th>عکس</th>
                  <th>نویسنده</th>
                  <th className="d-none d-md-table-cell">توضیحات</th>
                  <th>عنوان پست</th>
                </tr>
              </thead>
              <tbody>
                {blogListIndex.map(post => (
                  <tr key={post._id}>
                    <td align="center">
                      <button
                        class="btn btn-success mx-1 my-1 my-md-0"
                        onClick={() => openEditSinglePostModal(post)}
                      >
                        <em class="fa fa-edit"></em>
                      </button>
                      <button
                        class="btn btn-danger mx-1"
                        onClick={() => openDeleteSinglePostModal(post)}
                      >
                        <em class="fa fa-trash"></em>
                      </button>
                    </td>
                    <td className="d-none d-md-table-cell">{post.date}</td>
                    <td align="center">
                      <a
                        href={`${config.localApi}/${post.imageUrl}`}
                        target="_blank"
                        class="btn btn-info my-1 my-md-0"
                      >
                        <em class="fa fa-image"></em>
                      </a>
                    </td>
                    <td className="text-danger">{post.writer}</td>
                    <td
                      className="d-none d-md-table-cell"
                      style={{ maxWidth: "300px" }}
                    >
                      <span
                        class="d-inline-block text-truncate"
                        style={{ maxWidth: "250px" }}
                      >
                        {post.info}
                      </span>
                    </td>
                    <td className="text-primary">{post.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="navbar d-flex justify-content-between align-items-center footer">
              <div class="form-inline">
                <input
                  class="form-control"
                  type="search"
                  placeholder=" جستجو خبرنامه"
                  aria-label="Search"
                  onChange={e => setBlogListSearch(e.target.value)}
                />
                <button class="btn btn-outline-primary disabled">
                  <em class="fa fa-search"></em>
                </button>
              </div>
              <Pagination
                objLength={filteredBlogList.length}
                currentPage={currentPage}
                perPage={perPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeblogEdit;
