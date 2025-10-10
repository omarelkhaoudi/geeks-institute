export default function TodoItem({ todo, dispatch }) {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
        className="delete-btn"
      >
        ❌
      </button>
    </li>
  );
}
