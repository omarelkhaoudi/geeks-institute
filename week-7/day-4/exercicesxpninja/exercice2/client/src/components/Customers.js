// src/components/Customers.js
import React, { Component } from 'react';

class Customers extends Component {
  state = {
    customers: [] // empty array to store customers
  };

  componentDidMount() {
    // Fetch data from backend
    fetch('http://localhost:5000/api/customers')
      .then(response => response.json())
      .then(data => this.setState({ customers: data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Customers List</h1>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
