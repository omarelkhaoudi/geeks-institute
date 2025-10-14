import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CategorySelector = ({ onSelect }) => {
  const categories = useSelector((state) => state.tracker.categories);
  const [selected, setSelected] = useState(1);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setSelected(value);
    onSelect(value);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>📁 Select Category</h2>
      <select
        value={selected}
        onChange={handleChange}
        style={{ padding: '8px', borderRadius: '6px', fontSize: '16px' }}
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
