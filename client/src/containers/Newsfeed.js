import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import ChannelShow from './ChannelShow'
import ChannelIndexView from './ChannelIndexView'


class Newsfeed extends Component {

  channels() {
    return this.props.sources.filter((source) => !!source.selected)
  }

  render() {
    if(!this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }

    const selectedChannels = this.channels().map((channel, index) => {
       return (
       <ChannelIndexView channel={channel} key={index}/>
       )
    })
    return (
      <Switch>
        <Route exact path={this.props.match.url} render={()=> <div>{selectedChannels}</div>}/>
        <Route path ={`${this.props.match.url}/:ChannelId`} component={ChannelShow} />
      </Switch>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    sources: state.sources,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Newsfeed)
