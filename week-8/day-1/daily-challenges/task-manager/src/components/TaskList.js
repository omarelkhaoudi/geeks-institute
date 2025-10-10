import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { state, dispatch } = useTasks();

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "COMPLETED") return task.completed;
    if (state.filter === "ACTIVE") return !task.completed;
    return true;
  });

  return (
    <div>
      <div className="filters">
        <button onClick={() => dispatch({ type: "FILTER_TASKS", payload: "ALL" })}>
          All
        </button>
        <button
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: "ACTIVE" })}
        >
          Active
        </button>
        <button
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: "COMPLETED" })}
        >
          Completed
        </button>
      </div>

      <ul className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>No tasks found.</p>
        )}
      </ul>
    </div>
  );
}
