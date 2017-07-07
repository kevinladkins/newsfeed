import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as sessionsActions from '../actions/sessionsActions'
import Auth from '../auth/authenticator'
import '../styles/Navbar.css'




class Navbar extends Component {
  constructor(props) {
    super();
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    if (this.props.auth.isAuthenticated) {
      return (
        <nav className="navbar">
            <NavLink
              className="navlink"
              to="/newsfeed"
            >Home</NavLink>
            <NavLink
              className="navlink"
              to="/sources"
            >Sources</NavLink>
            <a href="#"
              className="navlink"
              onClick={(e) => {this.logout(e)}}
            >Logout</a>
        </nav>
      )
    } else {
      return (
        <nav className="navbar">
            <NavLink
              className="navlink"
              to="/"
            >Home</NavLink>
            <NavLink
              className="navlink"
              to="/sources"
            >Sources</NavLink>
        </nav>
      )
    }
  }


}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(sessionsActions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
