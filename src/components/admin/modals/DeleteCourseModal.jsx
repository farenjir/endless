import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useDispatch } from "react-redux";
import { handleCourseDelete } from "../../../store/actions/course";

const DeleteCourseModal = ({ showModal, closeModal, course }) => {
  const dispatch = useDispatch();
  return (
    <DialogOverlay isOpen={showModal} onDismiss={closeModal}>
      <DialogContent
        style={{
          border: "solid 5px hsla(0, 0%, 0%, 0.5)",
          borderRadius: "10px",
          boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
        }}
      >
        <div className="card text-center">
          <h3 className="pt-3 text-primary">{course.title}</h3>
          <hr />
          <p>
            {" "}
            مطمئن هستی می خوای دوره{" "}
            <span className="text-info">{course.title}</span> رو پاک کنی؟
          </p>
        </div>
        <div className="d-flex justify-content-start align-items-center mt-3 mb-2">
          <button
            className="btn btn-outline-warning btn-sm mx-1"
            onClick={closeModal}
          >
            انصراف
          </button>
          <button
            type="submit"
            className="btn btn-danger btn-sm mx-1"
            onClick={() =>
              dispatch(handleCourseDelete(course._id)) && closeModal()
            }
          >
            حذف دوره
          </button>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export default DeleteCourseModal;
