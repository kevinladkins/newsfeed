import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () =>
  <nav className="navbar">
      <NavLink
        className="navlink"
        to="/"
      >Home</NavLink>
      <NavLink
        className="navlink"
        to="/channels"
      >Channels</NavLink>
      <NavLink
        className="navlink"
        to="/choose-channels"
      >Choose Channels</NavLink>
      <NavLink
        className="navlink"
        to="/logout"
      >Logout</NavLink>
  </nav>

export default Navbar
