import React from "react";
import DatePicker from "./components/DatePicker";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">🗓️ Daily Planner</h1>
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-2xl space-y-6">
        <DatePicker />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
