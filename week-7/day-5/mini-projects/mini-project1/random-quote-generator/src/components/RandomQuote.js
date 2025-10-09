import React, { Component } from 'react';
import quotes from '../quotes';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: this.getRandomQuote(),
      bgColor: this.getRandomColor()
    };
  }

  // Get a random color
  getRandomColor = () => {
    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Get a random quote
  getRandomQuote = (prevQuote) => {
    let randomQuote;
    do {
      randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (randomQuote === prevQuote);
    return randomQuote;
  };

  // Generate a new quote
  handleNewQuote = () => {
    const newQuote = this.getRandomQuote(this.state.currentQuote);
    const newColor = this.getRandomColor();
    this.setState({ currentQuote: newQuote, bgColor: newColor });
  };

  render() {
    const { currentQuote, bgColor } = this.state;
    const appStyle = {
      backgroundColor: bgColor,
      color: bgColor,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.5s ease'
    };

    const boxStyle = {
      background: '#fff',
      padding: '30px',
      borderRadius: '10px',
      width: '400px',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
    };

    const buttonStyle = {
      backgroundColor: bgColor,
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px'
    };

    return (
      <div style={appStyle}>
        <div style={boxStyle}>
          <h2 style={{ color: bgColor }}>"{currentQuote.text}"</h2>
          <p>— {currentQuote.author}</p>
          <button style={buttonStyle} onClick={this.handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
