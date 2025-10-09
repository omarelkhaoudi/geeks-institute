import React, { Component } from 'react';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoaded: true }))
      .catch(error => console.log('Error:', error));
  }

  render() {
    const { users, isLoaded } = this.state;

    if (!isLoaded) {
      return <div style={{ padding: '20px' }}>Loading...</div>;
    }

    return (
      <div style={{ padding: '20px', border: '1px solid lightgray', borderRadius: '10px' }}>
        <h2>👤 Users List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
