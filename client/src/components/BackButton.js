import React from 'react'
import {withRouter} from 'react-router-dom'
import '../styles/App.css'

const BackButton = ({history}) => (
  <p className="back" onClick={() => history.goBack()}> &lt; &lt; Back</p>
)

export default withRouter(BackButton)
