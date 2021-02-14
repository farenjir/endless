import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { orderBy } from "lodash";
import { paginate } from "../../utils/paginate";
import SimpleReactValidator from "simple-react-validator";
import { adminContext } from "../adminContext";
import AddCourseModal from "../../components/admin/modals/AddCourseModal";
import EditCourseModal from "../../components/admin/modals/EditCourseModal";
import DeleteCourseModal from "../../components/admin/modals/DeleteCourseModal";

const CoursesContext = ({ children }) => {
  const coursesProvider = useSelector(state => state.courses);
  // states
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(7);
  const [courseList, setCourseList] = useState([]);
  const [courseSearch, setCourseSearch] = useState("");
  const [currentCourse, setCurrentCourse] = useState({});
  const [newCourseModal, setNewCourseModal] = useState(false);
  const [deleteCourseModal, setDeleteCourseModal] = useState(false);
  const [editCourseModal, setEditCourseModal] = useState(false);
  // searching
  useEffect(() => {
    setCourseList(coursesProvider);
  }, [coursesProvider]);
  // validator inputs
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "تکمیل این قسمت الزامی است",
        integer: "قیمت باید عدد باشد",
        min: "حداقل هشت کارکتر وارد کنید",
      },
    })
  );
  // new course
  const openNewCourseModal = () => setNewCourseModal(true);
  const closeNewCourseModal = () => setNewCourseModal(false);
  // delete course
  const openDeleteCourseModal = course => {
    setDeleteCourseModal(true);
    setCurrentCourse(course);
  };
  const closeDeleteCourseModal = () => {
    setDeleteCourseModal(false);
  };
  // course updateEdit
  const openEditCourseModal = course => {
    setEditCourseModal(true);
    setCurrentCourse(course);
  };
  const closeEditCourseModal = () => {
    setEditCourseModal(false);
  };
  // sorting table
  const sortCoursesAsc = () => {
    setCourseList(orderBy(courseList, "price", "asc"));
  };
  const sortCoursesDes = () => {
    setCourseList(orderBy(courseList, "price", "desc"));
  };
  // pagination
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  // filtered Courses in Search
  const filteredCourses = courseList.filter(course =>
    course.title.includes(courseSearch)
  );
  // paginate utils
  const coursesIndex = paginate(filteredCourses, currentPage, perPage);
  //   return ..........................................................
  return (
    <adminContext.Provider
      value={{
        coursesProvider,
        filteredCourses,
        setCourseSearch,
        currentPage,
        perPage,
        handlePageChange,
        coursesIndex,
        openNewCourseModal,
        openEditCourseModal,
        openDeleteCourseModal,
        sortCoursesDes,
        sortCoursesAsc,
        validator,
      }}
    >
      <AddCourseModal
        showModal={newCourseModal}
        closeModal={closeNewCourseModal}
      />
      <EditCourseModal
        showModal={editCourseModal}
        closeModal={closeEditCourseModal}
        course={currentCourse}
      />
      <DeleteCourseModal
        showModal={deleteCourseModal}
        closeModal={closeDeleteCourseModal}
        course={currentCourse}
      />
      {children}
    </adminContext.Provider>
  );
};
export default CoursesContext;
