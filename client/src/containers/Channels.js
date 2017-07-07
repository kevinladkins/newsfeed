import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ChannelCard from './ChannelCard'


class Channels extends Component {

  render() {
    const channels = this.props.sources.filter((source) => !!source.selected)
    const selectedChannels = channels.map((channel, index) => {
       return (
       <ChannelCard channel={channel} key={index}/>
       )
    })
    return (
      <div>{selectedChannels}</div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    sources: state.sources
  }
}

export default connect(mapStateToProps)(Channels)
