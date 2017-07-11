import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Form from '../components/common/Form'


import * as userActions from '../actions/usersActions'

class Signup extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.passwordConfirm) {
      this.props.actions.createUser(this.state, this.props.history)
      this.setState({
        email: '',
        password: '',
        passwordConfirm: ''
      })
    } else {
      this.setState({
        message: "Passwords must match"
      })
    }
  }


  render() {
    const fields = [
      {label: "Email",
       type: "email",
       name: "email",
       value: this.state.email
     },
      {label: "Password",
       type: "password",
       name: "password",
       value: this.state.password
     },
     {label: "Confirm Password",
      type: "password",
      name: "passwordConfirm",
      value: this.state.passwordConfirm
     }

    ]

    return (
      <div>
        <h2>Sign Up</h2>
        <Form
         fields={fields}
         handleChange={this.handleChange}
         handleSubmit={this.handleSubmit}
         submitValue="Sign Up"
         message={this.props.message}
        />
        <span className="message">{this.state.message}</span>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions:
    bindActionCreators(userActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {message: state.message}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
