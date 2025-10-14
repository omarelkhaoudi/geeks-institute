import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🚀 Productivity Tracker</h1>
      <CategorySelector onSelect={setSelectedCategory} />
      <TaskList categoryId={selectedCategory} />
    </div>
  );
}

export default App;
