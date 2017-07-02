import React from 'react'
import {connect} from 'react-redux';


const Article = (props) => {
  return (
    <h1>Hiya</h1>
  )
}


function mapStateToProps(state, ownProps) {
  debugger
}

export default connect(mapStateToProps)(Article)
