import React, { Component } from 'react';
import axios from 'axios';
import './PostWithAxios.css';

class PostWithAxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      title: '',
      body: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId, title, body } = this.state;
    const data = { userId, title, body };
    console.log("📤 Sending data:", data);

    axios.post("https://jsonplaceholder.typicode.com/posts", data)
      .then(response => {
        console.log("✅ Server response:", response.data);
      })
      .catch(error => {
        console.error("❌ Error:", error);
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div className="post-form-container">
        <h2>POST JSON with Axios</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="userId"
            placeholder="Enter User ID"
            value={userId}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />
          <textarea
            name="body"
            placeholder="Enter Body Content"
            value={body}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostWithAxios;
