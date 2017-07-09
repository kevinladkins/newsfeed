import React from 'react'
import Login from '../containers/Login'
import {Link} from 'react-router-dom'

const Home = (props) =>
    <div>
      <h2 >
        Welcome! Log in below to view your newsfeed, or <Link className="link" to="/signup">click here</Link> to sign up.
      </h2>
      <Login history={props.history}/>
    </div>


export default Home
