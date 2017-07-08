import React from 'react'
import {withRouter} from 'react-router-dom'

const BackButton = ({history}) => (
  <p onClick={() => history.goBack()}> &lt; &lt; Back</p>
)

export default withRouter(BackButton)
