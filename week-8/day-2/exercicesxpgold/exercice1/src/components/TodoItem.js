export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '8px' }}>
        {todo.text}
      </span>
      <button onClick={onRemove} style={{ marginLeft: 'auto', color: 'red' }}>
        Supprimer
      </button>
    </li>
  );
}
