import React from "react";
import posts from "./posts.json";

const PostList = () => {
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Hi This is a Title</h1>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "25px" }}>
          <h2 style={{ fontWeight: "bold" }}>{post.title}</h2>
          <p style={{ color: "#333", fontSize: "15px" }}>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
