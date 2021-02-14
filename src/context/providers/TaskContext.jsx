import React, { useState } from "react";
import { dashContext } from "../dashContext";

const TaskContext = ({ children }) => {
  const [getTodos, setTodos] = useState([]);
  const [getTodo, setTodo] = useState("");
  // new task
  const handleCreateNewTodo = () => {
    const todos = [...getTodos];
    const todo = {
      id: Math.floor(Math.random() * 10000),
      text: getTodo,
      completed: false,
    };
    if (getTodo !== "" && getTodo !== " ") {
      todos.push(todo);
      setTodos(todos);
      setTodo("");
    }
  };
  // completed task
  const handleCompletedTodo = id => {
    const todos = [...getTodos];
    const todoIndex = todos.findIndex(t => t.id === id);
    const todo = todos[todoIndex];
    todo.completed = !todo.completed;
    todos[todoIndex] = todo;
    setTodos(todos);
  };
  // delete task
  const handleDeleteTodo = id => {
    const todos = [...getTodos];
    const filteredTodos = todos.filter(t => t.id !== id);
    setTodos(filteredTodos);
  };
  // input task
  const handleTodoInput = event => {
    setTodo(event.target.value);
  };
  return (
    <dashContext.Provider
      value={{
        getTodos,
        getTodo,
        handleCreateNewTodo,
        handleTodoInput,
        handleCompletedTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </dashContext.Provider>
  );
};

export default TaskContext;
