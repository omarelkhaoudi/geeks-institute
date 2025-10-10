import { TaskProvider } from "./TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
