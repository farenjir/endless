import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { createNewPost } from "../../../actions/posts";
import { adminContext } from "../../../context/adminContext";

const AddPostModal = ({ showModal, closeModal }) => {
  const [title, setTitle] = useState();
  const [writer, setWriter] = useState();
  const [info, setInfo] = useState();
  //validator
  const [imageUrl, setImageUrl] = useState();
  const [, forceUpdate] = useState();
  const context = useContext(adminContext);
  const { blogValidator } = context;

  // handels
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    try {
      if (blogValidator.current.allValid()) {
        let data = new FormData();
        data.append("title", title);
        data.append("writer", writer);
        data.append("imageUrl", event.target.imageUrl.files[0]);
        data.append("info", info);
        //Dispatch
        dispatch(createNewPost(data));
        closeModal();
      } else {
        blogValidator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <DialogOverlay
      isOpen={showModal}
      onDismiss={closeModal}
      style={{ direction: "rtl" }}
    >
      <DialogContent
        style={{
          border: "solid 5px hsla(0, 0%, 0%, 0.5)",
          borderRadius: "10px",
          boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
        }}
      >
        <div className="inner form-layer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              style={{ marginBottom: 3 }}
              className="form-control"
              placeholder="عنوان پست"
              aria-describedby="title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                blogValidator.current.showMessageFor("title");
              }}
            />
            <small className="text-danger">
              {blogValidator.current.message("title", title, "required|min:8")}
            </small>
            <input
              type="text"
              name="writer"
              style={{ marginBottom: 3 }}
              className="form-control mt-2"
              placeholder="نویسنده"
              aria-describedby="writer"
              value={writer}
              onChange={e => {
                setWriter(e.target.value);
                blogValidator.current.showMessageFor("writer");
              }}
            />
            <small className="text-danger">
              {blogValidator.current.message("writer", writer, "required")}
            </small>
            <textarea
              name="info"
              placeholder="توضیحات دوره"
              className="form-control mt-2"
              style={{ marginBottom: 3 }}
              value={info}
              onChange={e => {
                setInfo(e.target.value);
                blogValidator.current.showMessageFor("info");
              }}
            />
            <small className="text-danger">
              {blogValidator.current.message("info", info, "required|min:10")}
            </small>
            <input
              type="file"
              name="imageUrl"
              className="form-control mt-2"
              aria-describedby="imageUrl"
              onChange={() => {
                setImageUrl(true);
                blogValidator.current.showMessageFor("imageUrl");
              }}
            />
            <small className="text-danger">
              {blogValidator.current.message("imageUrl", imageUrl, "required")}
            </small>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <button type="submit" className="btn btn-success btn-sm mx-1">
                ثبت پست
              </button>
              <button
                className="btn btn-outline-warning btn-sm mx-1"
                onClick={closeModal}
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export default AddPostModal;
