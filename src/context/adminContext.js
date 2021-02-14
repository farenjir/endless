import { createContext } from 'react'

export const adminContext = createContext({
    currentPage: 1,
    setCurrentPage: () => { },
    handlePageChange: () => { },
    perPage: "",
    coursesProvider: [],
    currentCourse: {},
    openNewCourseModal: () => { },
    openEditCourseModal: () => { },
    openDeleteCourseModal: () => { },
    coursesIndex: [],
    filteredCourses: [],
    setCourseSearch: "",
    sortCoursesAsc: () => { },
    sortCoursesDes: () => { },
    validator: null,
    blogListProvider: [],
    currentSinglePost: {},
    openNewSinglePostModal: () => { },
    openEditSinglePostModal: () => { },
    openDeleteSinglePostModal: () => { },
    blogListIndex: [],
    filteredBlogList: [],
    setBlogListSearch: "",
    blogValidator: null,
});

