import TaskItem from "./TaskItem";
import { useTasks } from "../TaskContext";

export default function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) return <p>No tasks yet!</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
