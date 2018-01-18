import React, { Component } from 'react';
import { ReplyBackForm } from './ReplyBackForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Intercom Assistant</h1>
        </header>
        <p className="App-intro">
          Reply back form
        </p>
        <ReplyBackForm />
      </div>
    );
  }
}

export default App;
