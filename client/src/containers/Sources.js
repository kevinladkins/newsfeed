import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as sourcesActions from '../actions/sourcesActions';
import Source from './Source'
import '../styles/Sources.css'



class Sources extends Component {

  componentWillMount() {
    if (this.props.sources.length == 0) {
      this.props.actions.getSources()
    }
   }

  render() {

    const sourcesList = this.props.sources.map((source, index) =>
          <Source source={source} />
    );


    return (
      <div className="sources-container">
        <div className="sources">
          <h2>Select sources for your newsfeed:</h2>
        </div>
        <form className="sources-display">
          {sourcesList}
        </form>
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
