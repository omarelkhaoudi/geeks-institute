// src/components/AddTodo.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todos/todoSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="add-todo">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
