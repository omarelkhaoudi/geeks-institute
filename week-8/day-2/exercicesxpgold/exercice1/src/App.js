import CategoryList from './components/CategoryList';

function App() {
  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Todo List avec Catégories</h1>
      <CategoryList />
    </div>
  );
}

export default App;
