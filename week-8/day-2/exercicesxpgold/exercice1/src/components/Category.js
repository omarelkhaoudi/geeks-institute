import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default function Category({ category, addTodo, toggleTodo, removeTodo }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '6px', padding: '12px', marginBottom: '12px' }}>
      <h3>{category.name}</h3>
      <TodoForm onAdd={(text) => addTodo(category.id, text)} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {category.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(category.id, todo.id)}
            onRemove={() => removeTodo(category.id, todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
