import React, {Component} from 'react'

class Signup extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
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
      alert("Success")
    } else {
      alert("Failure")
    }
    this.setState({
      email: '',
      password: '',
      passwordConfirm: ''
    })
  }


  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}  >
          <label>Email: </label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br />
          <label>Password: </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
          <label>Confirm Password: </label>
          <input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange}/><br />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default Signup