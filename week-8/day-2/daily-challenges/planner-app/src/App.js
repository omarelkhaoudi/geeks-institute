import React, { useState } from "react";
import { connect } from "react-redux";
import DatePicker from "./components/DatePicker";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { addTask, editTask, deleteTask } from "./redux/actions";
import "./App.css";

function App({ selectedDay, tasksByDay, addTask, editTask, deleteTask }) {
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const tasks = tasksByDay[selectedDay] || [];

  const handleAdd = (task) => {
    addTask(selectedDay, task);
    setShowForm(false);
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  const handleUpdate = (task) => {
    editTask(selectedDay, task.id, { title: task.title, description: task.description });
    setTaskToEdit(null);
    setShowForm(false);
  };

  const handleDelete = (taskId) => {
    deleteTask(selectedDay, taskId);
  };

  return (
    <div className="app-container">
      <h1>Daily Planner</h1>
      <DatePicker />

      <button
        onClick={() => { setTaskToEdit(null); setShowForm(true); }}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Add Task
      </button>

      {showForm && (
        <TaskForm
          initial={taskToEdit || { title: "", description: "" }}
          onSubmit={taskToEdit ? handleUpdate : handleAdd}
          onCancel={() => { setTaskToEdit(null); setShowForm(false); }}
        />
      )}

      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedDay: state.selectedDay,
  tasksByDay: state.tasksByDay,
});

export default connect(mapStateToProps, { addTask, editTask, deleteTask })(App);
