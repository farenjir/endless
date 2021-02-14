import React, { useContext } from "react";
import { Fragment } from "react";
import { dashContext } from "../../context/dashContext";
import NavTask from "./NavTask";
import Todo from "./Todo";

const DashTask = () => {
  const context = useContext(dashContext);
  const {
    getTodo,
    getTodos,
    handleDeleteTodo,
    handleCompletedTodo,
    handleTodoInput,
    handleCreateNewTodo,
  } = context;
  return (
    <Fragment>
      {/* navTask */}
      <NavTask />
      {/* navTask */}
      <div className="container">
        {/* input task */}
        <div className="wrapper-task mt-3">
          <form
            className="form-inline justify-content-center"
            onSubmit={e => e.preventDefault()}
          >
            <div className="input-group w-100">
              <input
                type="text"
                className="form-control rounded"
                placeholder="اضافه کردن کار جدید"
                value={getTodo}
                onChange={handleTodoInput}
              />
              <div className="input-group-prepend">
                <button
                  type="submit"
                  className="btn btn-sm bg-transparent text-light"
                  onClick={handleCreateNewTodo}
                >
                  <i
                    className="fas fa-user"
                    style={{ color: "blue", opacity: ".5" }}
                  ></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* input task */}
        <div className="card-hover-shadow-2x my-5 card">
          <ul className="list-group-flush">
            {getTodos.length > 0 ? (
              getTodos.map(todo => (
                <li key={todo.id} className="list-group-item">
                  <Todo
                    text={todo.text}
                    isCompleted={todo.completed}
                    deleted={() => handleDeleteTodo(todo.id)}
                    completed={() => handleCompletedTodo(todo.id)}
                  />
                </li>
              ))
            ) : (
              <div className="alert alert-light mt-3">
                <p className="text-center">هیچ کاری ثبت نشده !</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default DashTask;
