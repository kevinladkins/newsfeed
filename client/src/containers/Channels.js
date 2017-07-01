import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import ChannelsShow from './ChannelsShow'


class Channels extends Component {



  render() {
    var channels = this.props.channels.map(channel => {
       return (
       <ChannelsShow channel={channel} />
       )
    })
    if (this.props.channels.length == 0) {
      return (
        <h2>You have not added any channels yet</h2>
      )
    } else {
      return(
        <div>
          {channels}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Channels)
