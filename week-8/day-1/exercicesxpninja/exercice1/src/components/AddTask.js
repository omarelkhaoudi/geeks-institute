import { useState } from "react";
import { useTasks } from "../TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="task-button">
        Add
      </button>
    </form>
  );
}
