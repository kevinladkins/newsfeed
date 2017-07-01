import React from 'react'
import {NavLink} from 'react-router-dom'
import Auth from '../auth/authenticator'
import '../styles/Navbar.css'


function logout(event) {
  event.preventDefault();
  Auth.logOut();
}

const Navbar = () => {
  if (Auth.loggedIn()) {
    return (
      <nav className="navbar">
          <NavLink
            className="navlink"
            to="/channels"
          >Home</NavLink>
          <NavLink
            className="navlink"
            to="/sources"
          >Sources</NavLink>
          <a href="#"
            className="navlink"
            onClick={(e) => {logout(e)}}
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


export default Navbar
