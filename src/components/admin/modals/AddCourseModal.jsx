import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { createNewCourse } from "../../../actions/courses";
import { adminContext } from "../../../context/adminContext";

const AddCourseModal = ({ showModal, closeModal }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [info, setInfo] = useState();
  //validation
  const [imageUrl, setImageUrl] = useState();
  const [, forceUpdate] = useState();
  const context = useContext(adminContext);
  const { validator } = context;
  // handels
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    try {
      if (validator.current.allValid()) {
        let data = new FormData();
        data.append("title", title);
        data.append("price", Number.parseInt(price));
        data.append("imageUrl", event.target.imageUrl.files[0]);
        data.append("info", info);
        //Dispatch
        dispatch(createNewCourse(data));
        closeModal();
      } else {
        validator.current.showMessages();
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
              placeholder="عنوان دوره"
              aria-describedby="title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                validator.current.showMessageFor("title");
              }}
            />
            <small className="text-danger">
              {validator.current.message("title", title, "required|min:8")}
            </small>
            <input
              type="text"
              name="price"
              style={{ marginBottom: 3 }}
              className="form-control mt-2"
              placeholder="قیمت دوره به تومان"
              aria-describedby="price"
              value={price}
              onChange={e => {
                setPrice(e.target.value);
                validator.current.showMessageFor("price");
              }}
            />
            <small className="text-danger">
              {validator.current.message(
                "price",
                price,
                "required|integer|min:1"
              )}
            </small>
            <textarea
              name="info"
              placeholder="توضیحات دوره"
              className="form-control mt-2"
              style={{ marginBottom: 3 }}
              value={info}
              onChange={e => {
                setInfo(e.target.value);
                validator.current.showMessageFor("info");
              }}
            />
            <small className="text-danger">
              {validator.current.message("info", info, "required|min:10")}
            </small>
            <input
              type="file"
              name="imageUrl"
              className="form-control mt-2"
              aria-describedby="imageUrl"
              onChange={() => {
                setImageUrl(true);
                validator.current.showMessageFor("imageUrl");
              }}
            />
            <small className="text-danger">
              {validator.current.message("imageUrl", imageUrl, "required")}
            </small>
            <div className="d-flex justify-content-end align-items-center mt-2">
              <button type="submit" className="btn btn-success btn-sm mx-1">
                ثبت دوره
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

export default AddCourseModal;
