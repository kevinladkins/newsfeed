import React, {Component} from 'react'

import ChannelCard from './ChannelCard'


class Channels extends Component {
  render() {
    var channels = this.props.channels.map((channel, index) => {
       return (
       <ChannelCard channel={channel} key={index}/>
       )
    })
    return (
      <div>{channels}</div>
    )
  }
}

export default Channels
