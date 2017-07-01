import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () =>
  <nav className="navbar">
    <div>
      <NavLink
        className="navlink"
        to="/"
      >Home</NavLink>
    </div>
    <div>
      <NavLink
        className="navlink"
        to="/channels"
      >Channels</NavLink>
    </div>
    <div>
      <NavLink
        className="navlink"
        to="/choose-channels"
      >Choose Channels</NavLink>
    </div>
    <div>
      <NavLink
        className="navlink"
        to="/logout"
      >Logout</NavLink>
    </div>
  </nav>
