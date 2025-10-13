import React from "react";

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks || tasks.length === 0) return <p className="text-sm text-gray-500">No tasks for this day.</p>;

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="p-3 border rounded flex justify-between items-start">
          <div>
            <div className="font-semibold">{task.title}</div>
            {task.description && <div className="text-sm text-gray-600">{task.description}</div>}
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-1 border rounded" onClick={() => onEdit(task)}>Edit</button>
            <button className="px-2 py-1 border rounded" onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
