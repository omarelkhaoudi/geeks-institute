import React, { Component } from "react";
import "./Exercise.css";

class Exercise extends Component {
  render() {
    const headerStyle = {
      color: "black",
      textAlign: "center",
      padding: "10px",
      fontFamily: "Arial",
    };

    const formStyle = {
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "20px",
    };

    const imgStyle = {
      display: "block",
      margin: "10px auto",
      width: "400px",
      height: "200px",
    };

    const ulStyle = {
      width: "200px",
      margin: "0 auto",
      textAlign: "left",
    };

    return (
      <div className="container">
        <h2 style={headerStyle}>This is a Header</h2>
        <p className="para">This is a Paragraph</p>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          This is a Link
        </a>

        <h3 style={formStyle}>This is a Form:</h3>
        <form style={formStyle}>
          Enter your name: <br />
          <input type="text" /> <button type="submit">Submit</button>
        </form>

        <h3 style={{ textAlign: "center" }}>Here is an Image:</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
          style={imgStyle}
        />

        <h3 style={{ textAlign: "center" }}>This is a List:</h3>
        <ul style={ulStyle}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
