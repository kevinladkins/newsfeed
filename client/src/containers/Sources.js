import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import * as sourcesActions from '../actions/sourcesActions';
import Source from './Source'
import '../styles/Sources.css'



class Sources extends Component {
  constructor(props) {
    super();
    this.saveSources = this.saveSources.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      selected: []
    }
  }

  componentWillMount() {
    if (this.props.sources.length == 0) {
      this.props.actions.getSources()
    }
    this.selectedSources = new Set();
   }

   toggleSource = label => {
     if (this.selectedSources.has(label)) {
       this.selectedSources.delete(label);
     } else {
       this.selectedSources.add(label)
     }
   }


  saveSources() {
    document.getElementById("submit-button").click()
  }

  handleSubmit(event) {
    event.preventDefault();
    for (const checkbox of this.selectedSources) {
      console.log(checkbox, 'is selected.');
    }
  }


  render() {
    const sourcesList = this.props.sources.map((source, index) =>
          <Source source={source} key={index} toggleSource={this.toggleSource} handleChange={this.handleChange} />
    );


    return (
      <div className="sources-container">
        <div className="sources">
          <h2>Select sources for your newsfeed:</h2>
          <button className="save-button" onClick={this.saveSources}>Save</button>
        </div>
        <form id="sources-form" onSubmit={event => this.handleSubmit(event)}>
          <input type="submit" className="hidden" id="submit-button"/>
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
  return {sources: state.sources, channels: state.channels}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources)
