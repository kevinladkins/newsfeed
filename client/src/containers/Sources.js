import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as sourcesActions from '../actions/sourcesActions';
import SourcesIndex from '../components/sources/SourcesIndex'
import Source from './Source'
import '../styles/sources.css'



class Sources extends Component {
  constructor(props) {
    super();
    this.saveSources = this.saveSources.bind(this)
  }

  componentWillMount() {
    this.selectedSources = new Set();
   }

  toggleSource = label => {
    if (this.selectedSources.has(label)) {
      this.selectedSources.delete(label);
    } else {
      this.selectedSources.add(label)
    }
  }

  saveSources(event) {
    event.preventDefault();
    this.props.actions.updateSources([...this.selectedSources], this.props.history, this.props.auth.user_id)
  }

  render() {
    if(!this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }

    const sourcesList = this.props.sources.map((source, index) =>
          <Source source={source} key={index} toggleSource={this.toggleSource} handleChange={this.handleChange} />
    );

    return (
      <SourcesIndex sourcesList={sourcesList} saveSources={this.saveSources} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sourcesActions, dispatch)
  };
}

const mapStateToProps = (state) => {
  return {
    sources: state.sources,
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources)
