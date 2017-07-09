import React from 'react'
import {withRouter} from 'react-router-dom'
import '../styles/App.css'

const BackButton = ({history}) => (
  <p>
    <span className="back" onClick={() => history.goBack()}> &lt; &lt; Back </span> |
    <span className="back" onClick={() => history.push('/newsfeed')}> Home </span>
  </p>
)

export default withRouter(BackButton)
