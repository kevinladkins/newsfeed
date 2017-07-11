import React from 'react'
import {NavLink} from 'react-router-dom'

const NavAuth = ({logout}) =>
  <nav className="navbar">
      <NavLink
        className="navlink"
        to="/sources"
      >Add Channels</NavLink>
      <span
        className="navlink"
        onClick={(e) => {logout(e)}}
      >Logout</span>
  </nav>

  export default NavAuth
