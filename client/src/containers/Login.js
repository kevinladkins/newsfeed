import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Form from '../components/Form'


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
    const fields = [
      {label: "Email",
       type: "email",
       name: "email",
       value: this.state.email
     },
      {label: "Passsord",
       type: "password",
       name: "password",
       value: this.state.password
      }
    ]

    return (
      <Form
       fields={fields}
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}
       submitValue="Log In"
       message={this.props.auth.message}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

function mapDispatchToProps(dispatch) {
  return {actions:
    bindActionCreators(sessionsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
