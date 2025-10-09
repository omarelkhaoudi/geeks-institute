import React, { Component } from 'react';
import countries from './countries';
import './AutoCompletedText.css';

class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = countries.sort().filter(v => regex.test(v));
    }
    this.setState({ suggestions, text: value });
  };

  suggestionSelected = (value) => {
    this.setState({
      text: value,
      suggestions: []
    });
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) return null;

    return (
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => this.suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;

    return (
      <div className="autocomplete-container">
        <input
          type="text"
          value={text}
          onChange={this.onTextChanged}
          placeholder="Type a country name..."
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompletedText;
