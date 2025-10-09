import React, { Component } from 'react';
import './Calculator.css'; // Assure-toi que le chemin est correct

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      operation: 'add',
      result: null
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOperationChange = (e) => {
    this.setState({ operation: e.target.value });
  };

  calculate = () => {
    const { number1, number2, operation } = this.state;
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      this.setState({ result: 'Please enter valid numbers' });
      return;
    }

    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operation';
    }

    this.setState({ result });
  };

  render() {
    const { number1, number2, operation, result } = this.state;

    return (
      <div className="calculator-container">
        <div className="calculator-card">
          <div className="calculator-header">
            <h1 className="calculator-title">
              🧮 React Calculator
            </h1>
            <p className="calculator-subtitle">Simple and Stylish Calculator</p>
          </div>

          <div className="calculator-body">
            <div className="input-group">
              <label className="input-label">First Number</label>
              <input
                type="number"
                name="number1"
                value={number1}
                onChange={this.handleChange}
                placeholder="Enter first number"
                className="calculator-input"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Operation</label>
              <select
                value={operation}
                onChange={this.handleOperationChange}
                className="calculator-select"
              >
                <option value="add">➕ Add</option>
                <option value="subtract">➖ Subtract</option>
                <option value="multiply">✖️ Multiply</option>
                <option value="divide">➗ Divide</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Second Number</label>
              <input
                type="number"
                name="number2"
                value={number2}
                onChange={this.handleChange}
                placeholder="Enter second number"
                className="calculator-input"
              />
            </div>

            <div className="button-group">
              <button
                onClick={this.calculate}
                className="btn btn-calculate"
              >
                Calculate
              </button>
            </div>

            {result !== null && (
              <div className="result-container">
                <div className="result-label">Result</div>
                <div className="result-value">{result}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
