import React, { Component } from "react";

class Child extends Component {
  state = { fadeOut: false };

  componentWillUnmount() {
    alert("The component named Child is unmounted!");
  }

  componentDidUpdate(prevProps) {
    if (this.props.startFade && !prevProps.startFade) {
      this.setState({ fadeOut: true });
    }
  }

  render() {
    return (
      <h1
        style={{
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "40px",
          opacity: this.state.fadeOut ? 0 : 1,
          transition: "opacity 1s ease-in-out",
        }}
      >
        Hello, World!
      </h1>
    );
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true, startFade: false };
  }

  deleteChild = () => {
    this.setState({ startFade: true });

    // On attend 1 seconde avant de supprimer le composant
    setTimeout(() => {
      this.setState({ show: false });
    }, 1000);
  };

  render() {
    const { show, startFade } = this.state;
    let myheader = show ? <Child startFade={startFade} /> : null;

    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {myheader}
        <button
          onClick={this.deleteChild}
          style={{
            marginTop: "30px",
            padding: "10px 20px",
            fontSize: "1rem",
            background: "linear-gradient(135deg, #4741FFFF 0%, #2BFF2FFF 100%)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Color;
