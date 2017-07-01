import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as sourcesActions from '../actions/sourcesActions';
import '../styles/Sources.css'



class Sources extends Component {

  componentWillMount() {
    this.props.actions.getSources()
  }



  render() {

    const sourcesList = this.props.sources.map((source, index) => {
      return (
        <span className="source" key={index}>
          <h3>{source.name}</h3>
          <p>{source.description}</p>
        </span>
      )
    })


    return (
      <div className="sources-container">
        <div className="sources">
          <h2>Select sources for your newsfeed:</h2>
        </div>
        <div className="sources-display">
          {sourcesList}
        </div>
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
