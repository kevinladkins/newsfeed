import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Switch, Route} from 'react-router-dom';

import ChannelShow from './ChannelShow'
import ChannelIndexView from './ChannelIndexView'
import * as channelsActions from '../actions/channelsActions'


class Newsfeed extends Component {


  componentWillMount() {
    this.setArticles()
  }

  componentDidMount() {
    this.interval = setInterval(this.setArticles, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setArticles() {
    this.channels().forEach(channel => {
      this.props.actions.getArticles(channel)
    })

  }


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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(channelsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
