import React, {Component} from 'react'
import Card from '../components/Card'

class ChannelsShow extends Component {
  render() {
    return (
      <Card title={this.props.channel.name} />
    )
  }
}

export default ChannelsShow
