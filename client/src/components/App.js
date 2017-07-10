import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './Routes'
import Header from './Header'
import Navbar from '../containers/Navbar'
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
