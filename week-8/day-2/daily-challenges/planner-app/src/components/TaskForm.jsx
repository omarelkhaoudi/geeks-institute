import React, { useState, useEffect } from "react";

export default function TaskForm({ initial, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initial.title);
  const [description, setDescription] = useState(initial.description);
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(initial.title);
    setDescription(initial.description);
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    onSubmit({ ...initial, title: title.trim(), description: description.trim() });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded shadow-lg p-4 w-11/12 max-w-md">
        <h3 className="text-lg font-semibold mb-2">{initial.id ? "Edit Task" : "Add Task"}</h3>
        {error && <div className="text-red-600 mb-2">{error}</div>}

        <div className="mb-2">
          <label className="block text-sm font-medium">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
          <button type="submit" className="px-3 py-1 border rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
