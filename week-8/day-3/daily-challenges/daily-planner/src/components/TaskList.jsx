import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask, deleteTask } from "../features/tasks/taskSlice";

function TaskList() {
  const dispatch = useDispatch();
  const { tasksByDay, selectedDay } = useSelector((state) => state.tasks);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const tasks = tasksByDay[selectedDay] || [];

  const handleDelete = (id) => {
    dispatch(deleteTask({ day: selectedDay, id }));
  };

  const handleEdit = (id, text) => {
    setEditingTaskId(id);
    setEditedText(text);
  };

  const handleSave = (id) => {
    dispatch(editTask({ day: selectedDay, id, updatedText: editedText }));
    setEditingTaskId(null);
  };

  return (
    <div className="mt-4 space-y-3">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center italic">No tasks for this day</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center bg-indigo-50 border border-indigo-200 p-3 rounded-xl shadow-sm"
          >
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="flex-grow mr-2 p-1 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
            ) : (
              <span className="text-gray-700 font-medium">{task.text}</span>
            )}

            <div className="flex space-x-2">
              {editingTaskId === task.id ? (
                <button
                  onClick={() => handleSave(task.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(task.id, task.text)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
