import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverTest: null
    };
  }

  async componentDidMount() {
    try {
      const testFetch = await fetch('/api/v1/test');
      const res = await testFetch.json();
      this.setState({ serverTest: res.status });
    } catch (err) {
      this.setState({ serverTest: 'faiiled'});
      throw err;
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Fetching from server: <span style={{
            color: 'green',
            fontSize: '30px'
          }}>{this.state.serverTest}</span>
        </p>
      </div>
    );
  }
}

export default App;
