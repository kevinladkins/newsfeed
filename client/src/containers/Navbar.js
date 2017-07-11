import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import NavAuth from '../components/nav/NavAuth'
import NavNoAuth from '../components/nav/NavNoAuth'
import * as sessionsActions from '../actions/sessionsActions'
import '../styles/navbar.css'


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
        <NavAuth logout={this.logout} />
      )
    } else {
        return (
          <NavNoAuth />
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
