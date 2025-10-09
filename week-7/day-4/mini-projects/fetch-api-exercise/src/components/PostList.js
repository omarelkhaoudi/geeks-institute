import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => this.setState({ errorMsg: 'Error fetching posts' }));
  }

  render() {
    const { posts, errorMsg } = this.state;

    return (
      <div style={{ padding: '20px', border: '1px solid lightgray', borderRadius: '10px' }}>
        <h2>📬 Posts List</h2>
        {posts.length ? (
          <ul>
            {posts.slice(0, 10).map(post => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading posts...</p>
        )}
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </div>
    );
  }
}

export default PostList;
