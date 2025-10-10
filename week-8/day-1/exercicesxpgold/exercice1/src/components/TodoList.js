import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid"; // pour générer des IDs uniques

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: uuidv4(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <form onSubmit={handleAdd} className="todo-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
          className="todo-input"
        />
        <button type="submit" className="todo-button">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}
