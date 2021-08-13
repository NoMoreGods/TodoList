import React from "react";
import Delete from "../images/delete.png";
import Undone from "../images/close.png";
import Done from "../images/done.png";
import "../styles/Todo.css";

export default function Todo({ text, todo, todos, setTodos }) {
  const handleDeleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const handleCheckTodo = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo__item${todo.completed ? "_completed" : ""}`}>
        {text}
      </li>
      <div className="button-wrapper">
        <button classname=" button_checked" onClick={handleCheckTodo}>
          {todo.completed ? (
            <img alt="" src={Done} />
          ) : (
            <img alt="" src={Undone} />
          )}
        </button>
        <button classname="button button_delete" onClick={handleDeleteTodo}>
          <img alt="" src={Delete} />
        </button>
      </div>
    </div>
  );
}
