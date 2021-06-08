import React, { useState,useEffect  } from "react";
import { useDispatch } from "react-redux";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { handlePostUpdate } from "../../../store/actions/post";

const EditPostModal = ({ showModal, closeModal, post }) => {
  // getState
  const [singlePostId, setSinglePostId] = useState();
  //   states
  const [title, setTitle] = useState();
  const [writer, setWriter] = useState();
  const [info, setInfo] = useState();
  const [imageUrl, setImageUrl] = useState();
  const dispatch = useDispatch();
  //   useEffect on Post
  useEffect(() => {
    setSinglePostId(post._id);
    setTitle(post.title);
    setWriter(post.writer);
    setInfo(post.info);
    setImageUrl(post.imageUrl);
    // resetData
    return () => {
      setSinglePostId();
      setTitle();
      setWriter();
      setInfo();
      setImageUrl();
    };
  }, [post]);
  // handels
  const handleSubmit = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("title", title);
    data.append("writer", writer);
    if (event.target.imageUrl.files[0]) {
      data.append("imageUrl", event.target.imageUrl.files[0]);
    } else {
      data.append("imageUrl", imageUrl);
    }
    data.append("info", info);
    dispatch(handlePostUpdate(singlePostId, data));
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
              placeholder="عنوان پست"
              aria-describedby="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              type="text"
              name="writer"
              style={{ marginBottom: 3 }}
              className="form-control"
              placeholder="نویسنده"
              aria-describedby="writer"
              value={writer}
              onChange={e => setWriter(e.target.value)}
            />
            <textarea
              name="info"
              placeholder="توضیحات پست"
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

export default EditPostModal;
