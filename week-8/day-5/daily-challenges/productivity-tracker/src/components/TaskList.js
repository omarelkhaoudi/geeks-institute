import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTasksByCategory,
  toggleTaskCompletion,
  editTask,
  selectCompletedTasks,
} from '../redux/trackerSlice';

const TaskList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => selectTasksByCategory(state, categoryId));
  const completedCount = useSelector(selectCompletedTasks);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const handleToggle = useCallback(
    (id) => dispatch(toggleTaskCompletion(id)),
    [dispatch]
  );

  const handleEdit = useCallback(
    (id) => {
      dispatch(editTask({ id, newTitle }));
      setEditingTaskId(null);
      setNewTitle('');
    },
    [dispatch, newTitle]
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>📝 Tasks</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              margin: '10px auto',
              width: '60%',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              background: task.completed ? '#e0ffe0' : '#fff',
            }}
          >
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <button onClick={() => handleEdit(task.id)}>Save</button>
              </div>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleToggle(task.id)}
                >
                  {task.title}
                </span>
                <button
                  style={{ marginLeft: '10px' }}
                  onClick={() => setEditingTaskId(task.id)}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <p>
        ✅ Completed Tasks: <strong>{completedCount}</strong>
      </p>
    </div>
  );
};

export default TaskList;
