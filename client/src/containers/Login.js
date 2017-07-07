import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {history} from 'react-router-dom'

import * as sessionsActions from '../actions/sessionsActions';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.loginUser(this.state, this.props.history)
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    debugger
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email: </label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br />
        <label>Password: </label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
        <input type="Submit" value="Log In" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions:
    bindActionCreators(sessionsActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Login)
