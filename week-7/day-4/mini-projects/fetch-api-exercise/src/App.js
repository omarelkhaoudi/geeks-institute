import React from 'react';
import UsersList from './components/UsersList';
import PostList from './components/PostList';

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🌐 Fetch Data from API</h1>
      <UsersList />
      <PostList />
    </div>
  );
}

export default App;
