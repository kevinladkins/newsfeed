import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import HomePage from '../components/Home'

const Home = (props) => {
  return(
    <div>
      <HomePage />
      <Login/>
    </div>
  )
}

export default Home
