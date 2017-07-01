import React, { Component } from 'react';
import Home from '../components/Home'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>NEWSFEED</h1>
        </div>
          <Home />
      </div>
    );
  }
}

export default App;
