import React from 'react'
import {NavLink} from 'react-router-dom'
import Auth from '../auth/authenticator'
import '../styles/Navbar.css'


function logout(event) {
  event.preventDefault();
  Auth.logOut();
}

const Navbar = () =>
  <nav className="navbar">
      <NavLink
        className="navlink"
        to="/"
      >Home</NavLink>
      <NavLink
        className="navlink"
        to="/newsfeed"
      >Newsfeed</NavLink>
      <NavLink
        className="navlink"
        to="/sources"
      >Sources</NavLink>
      <a href="#"
        className="navlink"
        onClick={(e) => {logout(e)}}
      >Logout</a>
  </nav>

export default Navbar
