import { useRef, useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { dispatch } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleSave = () => {
    const newText = inputRef.current.value;
    if (newText.trim()) {
      dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: newText } });
    }
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          ref={inputRef}
          defaultValue={task.text}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
      ) : (
        <span onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
          {task.text}
        </span>
      )}

      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
          Delete
        </button>
      </div>
    </li>
  );
}
