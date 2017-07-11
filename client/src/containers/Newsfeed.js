import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Switch, Route} from 'react-router-dom';

import ChannelShow from './ChannelShow'
import ChannelCard from '../components/ChannelCard'
import NewsfeedLanding from '../components/NewsfeedLanding'
import * as channelsActions from '../actions/channelsActions'
import '../styles/App.css'


class Newsfeed extends Component {
  constructor(props) {
    super();
    this.setArticles = this.setArticles.bind(this)
    this.channels = this.channels.bind(this)
  }


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

  setArticleUrl = (title) => {
    var sanitizedTitle = title.replace(/%/g, "[percent]");
    return encodeURIComponent(sanitizedTitle);
  }

  render() {
    if(!this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }

    const selectedChannels = this.channels().map((channel, index) => {
       return (
         <ChannelCard channel={channel} setArticleUrl={this.setArticleUrl}  articles={this.props.articles} key={index}/>
       )
    })

    if (this.channels().length === 0) {
      return (
        <NewsfeedLanding />
      )
    } else {
      return (
        <Switch>
          <Route exact path={this.props.match.url} render={()=> <div>{selectedChannels}</div>}/>
          <Route path ={`${this.props.match.url}/:ChannelId`} component={ChannelShow} />
        </Switch>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    sources: state.sources,
    auth: state.auth,
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(channelsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
