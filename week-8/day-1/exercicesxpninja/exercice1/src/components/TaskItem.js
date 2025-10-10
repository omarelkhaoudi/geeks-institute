import { useTasks } from "../TaskContext";

export default function TaskItem({ task }) {
  const { dispatch } = useTasks();

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
        {task.text}
      </span>
      <button
        onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
        className="delete-btn"
      >
        ❌
      </button>
    </li>
  );
}
