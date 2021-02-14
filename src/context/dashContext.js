import { createContext } from 'react'

export const dashContext = createContext({
    blogListProvider: [],
    coursesProvider: [],
    currentPage: 1,
    setCurrentPage: () => { },
    handlePageChange: () => { },
    perPage: "",
    coursesIndex: [],
    blogListIndex: [],
    getTodos: [],
    getTodo: "",
    handleCreateNewTodo: () => { },
    handleTodoInput: () => { },
    handleCompletedTodo: () => { },
    handleDeleteTodo: () => { }
});

