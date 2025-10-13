// src/App.js
import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>📝 Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
