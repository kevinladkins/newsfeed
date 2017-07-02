import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Channels from './Channels'


class Newsfeed extends Component {



  render() {
    if (this.props.channels.length == 0) {
      return (
        <h2>You have not added any channels yet</h2>
      )
    } else {
      return(
        <Switch>
          <Route exact path={this.props.match.url} children={() =>
  <Channels channels={this.props.channels} />}  />
        </Switch>
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
