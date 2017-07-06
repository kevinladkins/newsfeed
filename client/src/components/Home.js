import React from 'react'
import Login from '../containers/Login'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p className="App-intro">
        Welcome! Log in below to view your newsfeed, or <Link to="/signup">click here</Link> to sign up.
      </p>
      <Login />
    </div>

  )
}




export default Home
