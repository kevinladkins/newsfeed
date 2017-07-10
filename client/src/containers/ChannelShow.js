import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom'

import ArticleShow from '../components/ArticleShow'
import ArticlesIndex from '../components/ArticlesIndex'
import BackButton from '../components/BackButton'



const ChannelShow = ({match, articles, channel}) => {

  var channelArticles = articles.find(articleObject => articleObject.name === channel.name).articles;

  const IndexWithProps = (props) => {
     return (
       <ArticlesIndex
         articles ={channelArticles}
         channel={channel}
         {...props}
      />);
   }

  const ArticleWithProps = (props) => {
    return (
      <ArticleShow
        articles={channelArticles}
        channel={channel}
        {...props}
      />);
  }
  return (
    <Switch>
      <Route exact path={match.url} render={IndexWithProps} />
      <Route path={`${match.url}/:article`} render={ArticleWithProps} />
    </Switch>
  )
}


const mapStateToProps = (state, ownProps) => {
  const channel = state.sources.find(source => source.source_id == ownProps.match.params.ChannelId)
  if (channel) {
    return {
      articles: state.articles,
      channel: channel
    }
  } else {
    return {
      articles: state.articles,
      channel: {}
    }
  }
}

export default connect(mapStateToProps)(ChannelShow)
