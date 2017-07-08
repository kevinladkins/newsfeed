import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Channel from './Channel'
import ChannelCard from './ChannelCard'


class Channels extends Component {

  channels() {
    return this.props.sources.filter((source) => !!source.selected)
  }

  render() {
    const selectedChannels = this.channels().map((channel, index) => {
       return (
       <ChannelCard channel={channel} key={index}/>
       )
    })
    return (
      <Switch>
        <Route exact path={this.props.match.url} render={()=> <div>{selectedChannels}</div>}/>
        <Route path ={`${this.props.match.url}/:ChannelId`} component={Channel} />
      </Switch>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    sources: state.sources
  }
}

export default connect(mapStateToProps)(Channels)
