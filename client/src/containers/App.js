import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from '../components/Routes'
import Header from '../components/Header'
import Navbar from './Navbar'
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Navbar />
          <div className="body">
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
