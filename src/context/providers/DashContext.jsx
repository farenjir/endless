import React, { useState } from "react";
import { useSelector } from "react-redux";
import { paginate } from "../../utils/paginate";
import { dashContext } from "../dashContext";

const DashContext = ({ children }) => {
  // get courses
  const coursesProvider = useSelector(state => state.courses);
  const blogListProvider = useSelector(state => state.posts);
  // pagination
  const [perPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  // paginate utils
  const coursesIndex = paginate(coursesProvider, currentPage, perPage);
  const blogListIndex = paginate(blogListProvider, currentPage, perPage);
  return (
    <dashContext.Provider
      value={{
        coursesProvider,
        blogListProvider,
        perPage,
        currentPage,
        handlePageChange,
        coursesIndex,
        blogListIndex
      }}
    >
      {children}
    </dashContext.Provider>
  );
};
export default DashContext;
