import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'


class Newsfeed extends Component {

  render() {
    if (this.props.channels.length == 0) {
      return (
        <h2>You have not added any channels yet</h2>
      )
    } else {
      return(
        <h1>Placeholder</h1>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Newsfeed)
