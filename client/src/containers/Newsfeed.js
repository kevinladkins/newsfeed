import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'


class Newsfeed extends Component {

  render() {
    return(
      <h1>Placeholder</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Newsfeed)
