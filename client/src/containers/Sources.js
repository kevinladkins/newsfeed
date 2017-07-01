import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as sourcesActions from '../actions/sourcesActions';



class Sources extends Component {

  componentWillMount() {
    this.props.actions.getSources()
  }



  render() {

    const sourcesList = this.props.sources.map((source, index) => {
      return (
        <div key={index}>
          <h3>{source.name}</h3>
          <p>{source.description}</p>
        </div>
      )
    })
    
    return (
      <div>
      <h2>Select sources for your newsfeed:</h2>
      {sourcesList}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sourcesActions, dispatch)
  };
}

const mapStateToProps = (state) => {
  return {sources: state.sources}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources)
