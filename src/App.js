import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./styles/App.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  }, [status, todos]);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function getLocalTodos() {
    const localTodos = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(localTodos));
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
