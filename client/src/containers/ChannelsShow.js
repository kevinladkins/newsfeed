import React, {Component} from 'react'
import Card from '../components/Card'

class ChannelsShow extends Component {

  // componentWillMount() {
  //   this.headlines()
  // }
  //
  // componentDidMount() {
  //   this.interval = setInterval(this.headlines, 60000)
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  // headlines() {
  //   this.actions.getHeadlines(this.props.channel)
  // }

  render() {
    return (
      <Card title={this.props.channel} />
    )
  }
}

export default ChannelsShow
