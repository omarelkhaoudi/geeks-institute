import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(error => console.error(error));
  }

  render() {
    const { users } = this.state;

    return (
      <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ textAlign: 'center' }}>Users List</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map(user => (
            <li key={user.id} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
