import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nouvelle tâche"
        style={{ flex: 1, padding: '6px' }}
      />
      <button type="submit" style={{ background: '#007bff', color: 'white', border: 'none', padding: '6px 10px' }}>
        Ajouter
      </button>
    </form>
  );
}
