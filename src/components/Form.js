import React from "react";
import plusImg from "../images/plus.png";

import "../styles/Form.css";

export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus
}) {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 }
      ]);
      setInputText("");
    }
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="form">
      <input
        placeholder="Enter the work"
        className="form__input"
        onChange={handleInputText}
        value={inputText}
      />
      <button classname="button button-add" onClick={handleAddTodo}>
        <img alt="" src={plusImg} className="button-add__img" />
      </button>
      <div>
        <select onChange={handleStatus} className="form__select">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
