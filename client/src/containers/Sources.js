import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as sourcesActions from '../actions/sourcesActions';



class Sources extends Component {

  componentWillMount() {
    this.actions.getSources()
  }


  render() {
    return (
      <h1>Coming Soon</h1>
    )
  }
}

const mapDispatchToProps = (dispatch) -> {
  return {
    actions: bindActionCreators(sourcesActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Sources)
