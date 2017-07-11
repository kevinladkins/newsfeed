import React from 'react'
import {NavLink} from 'react-router-dom'

const NavNoAuth = () =>
  <nav className="navbar">
      <NavLink
        className="navlink"
        to="/"
      >Login</NavLink>
      <NavLink
        className="navlink"
        to="/signup"
      >Sign Up</NavLink>
  </nav>

  export default NavNoAuth
