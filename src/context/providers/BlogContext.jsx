import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { paginate } from "../../utils/paginate";
import SimpleReactValidator from "simple-react-validator";
import { adminContext } from "../adminContext";
import AddPostModal from "../../components/admin/modals/AddPostModal";
import EditPostModal from "../../components/admin/modals/EditPostModal";
import DeletePostModal from "../../components/admin/modals/DeletePostModal";

const BlogContext = ({ children }) => {
  const blogListProvider = useSelector(state => state.posts);
  // states
  const [perPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [weblogList, setWeblogList] = useState([]);
  const [blogListSearch, setBlogListSearch] = useState("");
  const [currentSinglePost, setCurrentSinglePost] = useState({});
  const [editSinglePostModal, setEditSinglePostModal] = useState(false);
  const [deleteSinglePostModal, setDeleteSinglePostModal] = useState(false);
  const [newSinglePostModal, setNewSinglePostModal] = useState(false);
  // searching
  useEffect(() => {
    setWeblogList(blogListProvider);
  }, [blogListProvider]);
  // validator inputs
  const blogValidator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "تکمیل این قسمت الزامی است",
        min: "حداقل هشت کارکتر وارد کنید",
      },
    })
  );
  // new Post
  const openNewSinglePostModal = () => setNewSinglePostModal(true);
  const closeNewSinglePostModal = () => setNewSinglePostModal(false);
  // delete psot
  const openDeleteSinglePostModal = post => {
    setDeleteSinglePostModal(true);
    setCurrentSinglePost(post);
  };
  const closeDeleteSinglePostModal = () => {
    setDeleteSinglePostModal(false);
  };
  // post updateEdit
  const openEditSinglePostModal = post => {
    setEditSinglePostModal(true);
    setCurrentSinglePost(post);
  };
  const closeEditSinglePostModal = () => {
    setEditSinglePostModal(false);
  };
  // pagination
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  // filtered Courses in Search
  const filteredBlogList = weblogList.filter(post =>
    post.title.includes(blogListSearch)
  );
  // paginate utils
  const blogListIndex = paginate(filteredBlogList, currentPage, perPage);
  //   return ..........................................................
  return (
    <adminContext.Provider
      value={{
        blogListProvider,
        filteredBlogList,
        setBlogListSearch,
        currentPage,
        perPage,
        handlePageChange,
        blogListIndex,
        openNewSinglePostModal,
        openEditSinglePostModal,
        openDeleteSinglePostModal,
        blogValidator
      }}
    >
      <AddPostModal
        showModal={newSinglePostModal}
        closeModal={closeNewSinglePostModal}
      />
      <EditPostModal
        showModal={editSinglePostModal}
        closeModal={closeEditSinglePostModal}
        post={currentSinglePost}
      />
      <DeletePostModal
        showModal={deleteSinglePostModal}
        closeModal={closeDeleteSinglePostModal}
        post={currentSinglePost}
      />
      {children}
    </adminContext.Provider>
  );
};
export default BlogContext;
