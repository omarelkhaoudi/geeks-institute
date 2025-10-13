// src/components/TodoItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../Features/todos/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
    </li>
  );
}
