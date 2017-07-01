import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Home from '../components/Home'
import Header from '../components/Header'
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Home />
        </div>
      </Router>
    );
  }
}

export default App;
