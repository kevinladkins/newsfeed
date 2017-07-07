import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Channels from './Channels'
import Channel from './Channel'


class Newsfeed extends Component {

  render() {
    const channels = this.props.sources.filter((source) => !!source.selected)

    if (channels.length == 0) {
      return (
        <h2>You have not added any channels yet</h2>
      )
    } else {
      return(
        <Switch>
          <Route exact path={this.props.match.url} component={Channels} />
          <Route path ={`${this.props.match.url}/:ChannelId`} component={Channel} />
        </Switch>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sources: state.sources
  }
}

export default connect(mapStateToProps)(Newsfeed)
