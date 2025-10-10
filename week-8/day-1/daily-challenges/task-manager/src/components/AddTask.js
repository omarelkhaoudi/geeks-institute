import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const { dispatch } = useTasks();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TASK", payload: text });
      setText("");
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
