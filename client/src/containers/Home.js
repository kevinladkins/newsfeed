import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import HomePage from '../components/Home'

class Home extends Component {



  render() {
    const LoginWithProps = (props) => {
      return (
        <Login
          history={this.props.history}
          {...props}
        />
      );
    }
    return(
      <div>
        <HomePage />
        <LoginWithProps/>
      </div>
    )
  }

}

export default Home
