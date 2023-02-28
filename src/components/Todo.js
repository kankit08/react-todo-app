import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Todo = ({ text, todos, todo, setTodos }) => {
  const toastMessage = () => {
    toast.success("TODO task deleted successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const deleteHandler = () => {
    setTodos(todos.filter((elm) => elm.id !== todo.id));
    toastMessage();
    <ToastContainer />;
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="complete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
