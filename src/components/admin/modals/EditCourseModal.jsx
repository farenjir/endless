import React, { useState,useEffect  } from "react";
import { useDispatch } from "react-redux";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { handleCourseUpdate } from "../../../actions/courses";

const EditCourseModal = ({ showModal, closeModal, course }) => {
  // getState
  const [courseId, setCourseId] = useState();
  //   states
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [info, setInfo] = useState();
  const [imageUrl, setImageUrl] = useState();
  const dispatch = useDispatch();
  //   useEffect on Course
  useEffect(() => {
    setCourseId(course._id);
    setTitle(course.title);
    setPrice(course.price);
    setInfo(course.info);
    setImageUrl(course.imageUrl);
    // resetData
    return () => {
      setCourseId();
      setTitle();
      setPrice();
      setInfo();
      setImageUrl();
    };
  }, [course]);
  // handels
  const handleSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("title", title);
    data.append("price", price);
    if (event.target.imageUrl.files[0]) {
      data.append("imageUrl", event.target.imageUrl.files[0]);
    } else {
      data.append("imageUrl", imageUrl);
    }
    data.append("info", info);
    dispatch(handleCourseUpdate(courseId, data));
    closeModal();
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
              onChange={e => setTitle(e.target.value)}
            />
            <input
              type="text"
              name="price"
              style={{ marginBottom: 3 }}
              className="form-control"
              placeholder="قیمت دوره به تومان"
              aria-describedby="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <textarea
              name="info"
              placeholder="توضیحات دوره"
              className="form-control"
              style={{ marginBottom: 3 }}
              value={info}
              onChange={e => setInfo(e.target.value)}
            />
            <input
              type="file"
              name="imageUrl"
              className="form-control my-3"
              aria-describedby="imageUrl"
            />
            <div className="d-flex justify-content-end align-items-center">
              <button type="submit" className="btn btn-success btn-sm mx-1">
                به روزرسانی
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

export default EditCourseModal;
