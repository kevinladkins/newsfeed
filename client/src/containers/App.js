import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './Routes'
import Header from '../components/Header'
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
