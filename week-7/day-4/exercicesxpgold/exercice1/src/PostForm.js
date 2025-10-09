import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: ''
    };
  }

  // 🔹 Met à jour le state quand l'utilisateur tape dans les champs
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // 🔹 Envoie les données au serveur
  handleSubmit = (e) => {
    e.preventDefault();

    const { user, email } = this.state;
    const data = { user, email };

    console.log("📤 Sending data:", data);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log("✅ Server response:", result);
      })
      .catch(error => {
        console.error("❌ Error:", error);
      });
  };

  render() {
    const { user, email } = this.state;

    return (
      <div style={{
        width: '350px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>POST JSON Data</h2>

        <form onSubmit={this.handleSubmit}>
          <label>User:</label>
          <input
            type="text"
            name="user"
            value={user}
            onChange={this.handleChange}
            placeholder="Enter username"
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter email"
            style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4f46e5',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
