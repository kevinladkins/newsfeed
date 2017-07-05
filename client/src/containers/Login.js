import React, {Component} from 'react'


class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted email: ", this.state.email, ", password: ", this.state.password)
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      name: value
    })
  }

  render() {
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
