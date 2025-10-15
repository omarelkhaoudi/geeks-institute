import { connect } from 'react-redux';
import { addCategory, addTodo, toggleTodo, removeTodo } from '../redux/actions';
import { useState } from 'react';
import Category from './Category';

function CategoryList({ categories, addCategory, addTodo, toggleTodo, removeTodo }) {
  const [name, setName] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addCategory(name);
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleAddCategory} style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nouvelle catégorie"
          style={{ flex: 1, padding: '6px' }}
        />
        <button type="submit" style={{ background: '#28a745', color: 'white', border: 'none', padding: '6px 10px' }}>
          Ajouter
        </button>
      </form>

      {categories.map((cat) => (
        <Category
          key={cat.id}
          category={cat}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({ categories: state.categories });
const mapDispatchToProps = { addCategory, addTodo, toggleTodo, removeTodo };

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
