import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

function TaskForm() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.tasks.selectedDay);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    dispatch(addTask({ day: selectedDay, task: newTask }));
    setTaskText("");
  };

  return (
    <form
      onSubmit={handleAddTask}
      className="flex items-center justify-between space-x-3"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-grow p-2 border border-indigo-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
