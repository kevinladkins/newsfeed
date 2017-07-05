import React from 'react'
import Login from '../containers/Login'

const Home = () => {
  return (
    <div>
      <p className="App-intro">
        Welcome! Log in below to view your newsfeed.
      </p>
      <p>Secret code is: {process.env.REACT_APP_SECRET_CODE}</p>
      <Login />
    </div>

  )
}




export default Home
