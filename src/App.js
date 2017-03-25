import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Drag and drop some images below</h2>
        </div>

        <Gallery />

      </div>
    );
  }
}

export default App;
